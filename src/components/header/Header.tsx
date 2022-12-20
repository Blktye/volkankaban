import React from "react";
import { FaQrcode, FaShare } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

import { data } from "../../data/volkankaban";
import Socials from "../profile/Socials";

function Header() {
  const {
    profile_name,
    username,
    avatar,
    background,
    cover,
    bio,
    user_location,
  } = data;
  return (
    <header className="mx-auto w-11/12 max-w-2xl">

      <div className="backdrop mb-8 flex flex-col gap-6 rounded-md bg-slate-50 bg-opacity-20 p-6">
        <video className="flex h-[300px] w-screen flex-col items-center object-cover"
          src={cover}
          muted
          autoPlay
          loop
        // playsinline=""
        ></video>
        <img className="mx-auto -mt-20 aspect-square w-36 rounded-full border-2 border-blue-900"
          src={avatar}
          alt={profile_name}
        />

        <div class="px-6 py-4">
          <div class="flex flex-col">
            <div class="font-bold text-xl text-center hover:text-pink-500 hover:cursor-pointer">{profile_name} </div>
            <div class="text-md text-center"><FaQrcode /> </div>
            <div class="text-md text-center"><FaShare /></div>
            <p class="text-md text-center">{username}</p>
            <div class="flex flex-row justify-center">
              
              
              <div class="text-md text-center">{user_location}</div>
            </div>
          </div>
          <div class="flex flex-row justify-center font-semibold mx-auto my-4">
            <div class="my-auto text-white bg-pink-500 hover:bg-pink-600 hover:cursor-pointer rounded-3xl py-2 px-4 mx-2">Follow</div>
            <div class="my-auto text-white bg-pink-500 hover:bg-pink-600 hover:cursor-pointer rounded-3xl py-2 px-4 mx-2">Message</div>
          </div>
        

        <div class="flex flex-row justify-center">
        <img class="object-cover hover:cursor-pointer rounded-full h-12 w-12 m-3 p-0.5 border-2 border-pink-600" src="https://pbs.twimg.com/profile_images/1521539589818793986/k65Z2WvW_400x400.jpg" alt="{profile_name}" />
        <img class="object-cover hover:cursor-pointer rounded-full h-12 w-12 m-3 p-0.5 border-2 border-pink-600" src="https://pbs.twimg.com/profile_images/1521539589818793986/k65Z2WvW_400x400.jpg" alt="{profile_name}" />
        <img class="object-cover hover:cursor-pointer rounded-full h-12 w-12 m-3 p-0.5 border-2 border-pink-600" src="https://pbs.twimg.com/profile_images/1521539589818793986/k65Z2WvW_400x400.jpg" alt="{profile_name}" />
        <img class="object-cover hover:cursor-pointer rounded-full h-12 w-12 m-3 p-0.5 border-2 border-pink-600" src="https://pbs.twimg.com/profile_images/1521539589818793986/k65Z2WvW_400x400.jpg" alt="{profile_name}" />
        </div>
        </div>

        <p className="text-center text-lg font-medium tracking-wide">{bio}</p>

        <div class="grid grid-cols-3 gap-5">
          <button
            class="text-white rounded bg-blue-500 flex items-center justify-center bg-opacity-40 p-4 duration-300 ease-in-out hover:rotate-1 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            LINKS
          </button>
          <button
            class="text-white rounded bg-blue-500 flex items-center justify-center bg-opacity-40 p-4 duration-300 ease-in-out hover:rotate-1 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            WALLET
          </button>
          <button class="text-white rounded bg-blue-500 flex items-center justify-center bg-opacity-40 p-4 duration-300 ease-in-out hover:rotate-1 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            POSTS
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;
