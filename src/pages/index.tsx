import Head from "next/head";
import Image from "next/image";

import Hero from "../components/profile";
import Links from "../components/profile";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <Hero />
      <Links />
    </div>
  );
}
