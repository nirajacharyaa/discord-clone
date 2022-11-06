import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { auth, channelRef, db } from "../app/firebase";
import { doc, setDoc } from "firebase/firestore";
import DiscordSmallLogo from "../assets/DiscordSmallLogo";
import ServerIcon from "../components/ServerIcon";
import {
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
  MicrophoneIcon,
  PlusIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/solid";
import Channel from "../components/Channel";
import Chat from "../components/Chat";
import { selectChannel } from "../features/channelSlice";
import NoChannelSelected from "../components/NoChannelSelected";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [channels] = useCollection(channelRef);
  const { channelName, channelId } = useSelector(selectChannel);
  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const handleAddChannel = async () => {
    const channelName = prompt("Enter the channel name !");
    if (channelName) {
      try {
        await setDoc(doc(channelRef), {
          channelName,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      {!user && <Navigate to="/" />}
      <div className="flex">
        <div className="w-16 bg-[#202225] h-screen flex flex-col items-center space-y-2 p-2">
          <div className="server-default bg-dis-blue text-white flex items-center justify-center p-2 cursor-pointer rounded-2xl">
            <DiscordSmallLogo />
          </div>
          <hr className="border-gray-700 border w-8 mx-auto my-2 rounded-xl" />
          <ServerIcon image="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-random.svg" />
          <ServerIcon image="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-random.svg" />
          <div className="bg-dis-icon-grey rounded-full p-2 cursor-pointer hover:bg-dis-green text-dis-green hover:text-white hover:rounded-xl transition-all ease-in-out duration-100">
            <PlusIcon className="h-8" />
          </div>
        </div>
        <div className="bg-dis-sidebar-grey flex flex-col  min-w-max h-screen ">
          <div className="flex items-center justify-between border-gray-700 border-b-2 text-white text-sm font-bold cursor-pointer hover:bg-dis-icon-grey p-4 shadow-lg">
            <h2 className="">The Badass Server...</h2>
            <ChevronDownIcon className="h-5 ml-2" />
          </div>
          <div className="text-dis-sidebar-text select-none text-sm font-semibold flex flex-col  justify-between  overflow-y-scroll scrollbar-hide ">
            <div className="flex items-center  mb-2 p-2 w-full">
              <ChevronDownIcon className="h-3 mr-2" />
              <h4>Channels</h4>
              <PlusIcon
                className="h-6 ml-auto cursor-pointer hover:text-white"
                onClick={() => handleAddChannel()}
              />
            </div>
            <div className="px-2">
              {channels?.docs.map((doc) => {
                return (
                  <Channel
                    key={doc.id}
                    id={doc.id}
                    channelName={doc.data().channelName}
                  />
                );
              })}
            </div>
          </div>
          <div className=" mt-auto bg-[#292b2f] min-h-max flex items-center justify-between gap-8 p-1">
            <div className="flex gap-2 items-center hover:bg-[#3f433a] cursor-pointer px-4 py-1 rounded-lg">
              <img src={user?.photoURL} className="h-8 rounded-full" />
              <div className="leading-snug">
                <p className="text-white">
                  {user?.displayName.split(" ")[0].toLowerCase()}
                </p>
                <p className="text-dis-sidebar-text text-xs font-semibold">
                  #6969
                </p>
              </div>
            </div>
            <div className="[&>*]:rounded-lg gap-2 grid place-items-center grid-cols-3 p-2">
              <MicrophoneIcon
                className="h-5  cursor-pointer text-dis-sidebar-text hover:bg-[#3f433a]"
                onClick={() => alert("Voice feature not available yet !")}
              />
              <SpeakerWaveIcon
                className="h-5  cursor-pointer text-dis-sidebar-text hover:bg-[#3f433a]"
                onClick={() => alert("Voice feature not available yet !")}
              />
              <ArrowLeftOnRectangleIcon
                className="h-5 cursor-pointer text-dis-sidebar-text hover:bg-[#3f433a]"
                onClick={() => handleLogout()}
              />
            </div>
          </div>
        </div>
        <div className="bg-dis-icon-grey flex-grow h-screen">
          {channelId ? <Chat /> : <NoChannelSelected />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
