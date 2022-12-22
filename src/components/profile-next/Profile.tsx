import Image from "next/image";
import React from "react";
import { FaQrcode, FaShare } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

import { data } from "../../data/volkankaban";

const Hero = () => {
  console.log(data);
  const { profile_name, username, photo, bio, profile_location, cover } = data;
  return (
    <>
      <video
        className="flex h-[300px] w-screen flex-col items-center object-cover"
        src={cover}
        muted="muted"
        autoplay="autoplay"
        loop="loop"
        // playsinline=""
      ></video>
      <section className="absolute top-[250px] flex w-[300px] min-w-[200px] flex-col items-center justify-center ">
        <div className="h-24 w-24 overflow-hidden rounded-full border-2 object-contain">
          <Image
            src={photo}
            alt={profile_name}
            width={200}
            height={200}
            priority
          />
        </div>
        <h1 className="flex items-center justify-center text-xl font-bold">
          {profile_name}
          <MdVerified className="m-1 text-blue-400" />
        </h1>
        <p>{profile_location}</p>
        <div className="flex w-24 justify-around p-2 text-2xl text-gray-200">
          <FaQrcode />
          <FaShare />
        </div>
      </section>
    </>
    // </div>
  );
};

export default Hero;
