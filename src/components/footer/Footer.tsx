import React from "react";

import { data } from "../../data/volkankaban";

function Footer() {
  const year = new Date().getFullYear();
  const { profile_name } = data;

  return (
    <footer className="backdrop mt-auto grid w-full place-items-center bg-blue-900 bg-opacity-50">
      <p className="py-3 text-center text-sm font-medium tracking-wide">
        &copy; {year} {profile_name}, Theme by daisyUI
      </p>
    </footer>
  );
}

export default Footer;
