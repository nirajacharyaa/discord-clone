import React, { useState } from "react";
import DiscordLogo from "../assets/DiscordLogo";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleProvider } from "../app/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/discord-clone/channels");
    } catch (err) {
      console.log(err.message);
    }
  };

  const [sideBarToggle, setSideBarToggle] = useState(false);
  const handleSideBarToggle = () => {
    setSideBarToggle((prev) => !prev);
  };
  return (
    <header className="flex items-center justify-between py-4 px-6 max-w-7xl mx-auto text-white">
      <div
        className={`fixed transition flex flex-col right-0 top-0 bottom-0 bg-white z-50 text-black p-4 w-4/6 rounded-l-lg shadow-2xl ${
          sideBarToggle
            ? "translate-x-0 md:hidden"
            : "translate-x-full md:hidden"
        } `}
      >
        <div className="mt-2 mb-4 pb-4 flex items-center justify-between border-b-2">
          <DiscordLogo />
          <button onClick={handleSideBarToggle}>
            <svg
              className="closeIcon-3Cx1EL"
              width="24"
              height="24"
              viewBox="0 0 12 12"
            >
              <g fill="none" fillRule="evenodd" aria-hidden="true">
                <path d="M0 0h12v12H0"></path>
                <path
                  fill="currentColor"
                  d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <div>
          <nav>
            <ul className="flex flex-col [&>*]:mx-4  [&>*]:p-2 [&>*]:rounded-md font-light">
              <li className="hover:underline hover:cursor-pointer bg-gray-200 text-blue-700">
                Home
              </li>
              <li className="hover:underline hover:cursor-pointer">Download</li>
              <li className="hover:underline hover:cursor-pointer">Nitro</li>
              <li className="hover:underline hover:cursor-pointer">Discover</li>
              <li className="hover:underline hover:cursor-pointer">Safety</li>
              <li className="hover:underline hover:cursor-pointer">Blog</li>
            </ul>
          </nav>
        </div>
        <div className="flex-grow flex flex-col">
          <div className="flex-grow"></div>
          <a
            href="#"
            className="flex bg-[#5865f2]  text-white mx-4 px-6 py-2 justify-center rounded-3xl"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g fill="currentColor">
                <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
              </g>
            </svg>
            <span className="ml-2">Download for your device</span>
          </a>
        </div>
      </div>

      <a href="/">
        <DiscordLogo />
      </a>
      <nav className=" hidden md:block">
        <ul className="flex [&>*]:mx-4 ">
          <li className="hover:underline hover:cursor-pointer">Download</li>
          <li className="hover:underline hover:cursor-pointer">Nitro</li>
          <li className="hover:underline hover:cursor-pointer">Discover</li>
          <li className="hover:underline hover:cursor-pointer">Safety</li>
          <li className="hover:underline hover:cursor-pointer">Blog</li>
        </ul>
      </nav>
      <div className="flex">
        <button
          onClick={() =>
            user ? navigate("/discord-clone/channels") : signIn()
          }
          className="text-black bg-white px-4 py-2 rounded-3xl hover:shadow-btn-shadow hover:text-dis-blue"
        >
          {user ? "Open Discord" : "Login"}
        </button>
        <button className="md:hidden ml-4" onClick={handleSideBarToggle}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
