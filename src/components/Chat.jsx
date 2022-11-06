import {
  ArchiveBoxIcon,
  BellAlertIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HashtagIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { selectChannel } from "../features/channelSlice";
import { auth, channelRef, db } from "../app/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  collection,
  doc,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { nanoid } from "@reduxjs/toolkit";

const Chat = () => {
  const { channelName, channelId } = useSelector(selectChannel);
  const [user] = useAuthState(auth);
  const messageRef = useRef("");
  const ref = doc(db, "channels", channelId, "messages", nanoid());
  const fireMessageRef = collection(db, `channels/${channelId}/messages`);
  const q = query(fireMessageRef, orderBy("timeStamp"));
  const chatRef = useRef(null);
  const [messages] = useCollectionData(q);

  const scrollToBottom = () => {
    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const sendMessage = async () => {
    try {
      await setDoc(ref, {
        timeStamp: serverTimestamp(),
        message: messageRef.current.value,
        photo: user?.photoURL,
        name: user?.displayName,
        email: user?.email,
      });
      messageRef.current.value = "";
      scrollToBottom();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="flex flex-col h-full">
      <header>
        <div className="flex items-center justify-between text-dis-sidebar-text border-gray-700 border-b-2 text-sm font-bold  p-4 shadow-lg">
          <div className="flex items-center ">
            <HashtagIcon className="h-5 text-dis-sidebar-text" />
            <h4>{channelName}</h4>
          </div>
          <div className="flex items-center gap-3">
            <ChatBubbleOvalLeftEllipsisIcon className="h-5" />
            <BellAlertIcon className="h-5" />
            <MapPinIcon className="h-5" />
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="font-normal px-2 outline-none rounded-md bg-[#202225]"
              />
              <MagnifyingGlassIcon className="absolute h-4 top-[2px] right-1 font-bold" />
            </div>
            <ArchiveBoxIcon className="h-5" />
          </div>
        </div>
      </header>
      <div className="flex-grow overflow-y-scroll scrollbar-hide hover:bg-[#32353b]">
        {messages?.map((message) => (
          <div
            ref={chatRef}
            className="p-2 mx-8 flex items-center gap-2 mb-4 hover:bg-dis-sidebar-grey"
          >
            <img src={message?.photo} className="h-10 rounded-full" />
            <div>
              <p className="text-white font-bold">
                {message?.name.split(" ")[0].toLowerCase()}
                <span className="font-thin ml-1 text-sm text-dis-sidebar-text">
                  #6969
                </span>
                <span className="text-xs font-light text-gray-200 ml-8">{`${message?.timeStamp
                  ?.toDate()
                  .toLocaleString()}`}</span>
              </p>
              <p className="text-[#ddedde]">{message?.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-dis-icon-grey p-4 w-full flex gap-4">
        <input
          type="text"
          placeholder={`message #${channelName}`}
          className="w-full bg-dis-sidebar-grey h-12 rounded-md outline-none text-gray-400 px-4"
          ref={messageRef}
          onKeyDown={(e) => {
            if (e.key == "Enter" && e.target.value.length != 0) {
              sendMessage(e.target.value);
            }
          }}
        />
        <button
          className="text-white bg-dis-sidebar-grey px-4 rounded-md"
          onClick={() => sendMessage()}
        >
          <PaperAirplaneIcon className="h-6" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
