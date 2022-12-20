import React from "react";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const DataLink = ({ name, href, icon, background }) => {
    const glassy = `bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 `;
  return (
    <div
      style={{ background: `${background}` }}
      className={`m-2 my-4 flex min-w-[200px] items-center justify-center rounded-xl border p-2 text-left text-xl font-semibold ${glassy}`}
    >
      {name === "Phone" ? (
        <FaPhone className="text-green-400" />
      ) : name == "Email" ? (
        <FaEnvelope className="text-gray-200" />
      ) : name === "Youtube" ? (
        <FaYoutube className="text-red-500" />
      ) : name === "Instagram" ? (
        <FaInstagram className="text-purple-400" />
      ) : name === "TikTok" ? (
        <FaTiktok className="text-black" />
      ) : name === "Github" ? (
        <FaGithub className="" />
      ) : name === "Facebook" ? (
        <FaFacebook className="text-[#1877F2]" />
      ) : name === "Twitter" ? (
        <FaTwitter className="text-[#1DA1F2]" />
      ) : (
        ""
      )}
      <a className="mx-2" href={href}>
        {name}
      </a>
      {/* {name} */}
    </div>
  );
};

export default DataLink;
