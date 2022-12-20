import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Profile";
import Links from "../components/Links";


export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      <Hero/>
      <Links/>
      

    </div>
  );
}
