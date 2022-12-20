import React from "react";
import { FaQrcode, FaShare } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

import { data } from "../../data/volkankaban";
import Socials from "../profile/Socials";

function Header() {
	const { profile_name, username, avatar, background, cover, bio, user_location } = data;
	return (
		<header className="mx-auto w-11/12 max-w-2xl">
			<video className="flex h-[300px] w-screen flex-col items-center object-cover"
        	src={cover}
        	muted autoPlay loop
			// playsinline=""
      		>
			</video>
			<div className="backdrop mb-8 flex flex-col gap-6 rounded-md bg-slate-50 bg-opacity-20 p-6">
				<img className="mx-auto aspect-square w-36 rounded-full border-2 border-blue-900"
				src={avatar}
				alt={profile_name}
				/>
				<h1 className="text-center text-3xl font-bold tracking-wide">{profile_name}</h1>
				<p className="text-center text-lg font-medium tracking-wide">
					{bio}
				</p>
				<div className="backdrop grid place-items-center rounded-lg border-2 bg-blue-600 bg-opacity-40 p-4 duration-300 ease-in-out hover:rotate-1 hover:scale-105">
					<span className="text-xl font-semibold tracking-wide">
					<FaQrcode /> <FaShare /> {username} {user_location} 
					</span>
				</div>

			</div>

		</header>
	);
}

export default Header;
