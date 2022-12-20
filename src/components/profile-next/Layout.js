import React from "react";

import { data } from "../data/volkankaban";

const Layout = ({ children }) => {
  // console.log(data.background);
  let bg = data.background;
  // return (
  //   <div className="flex min-h-screen w-screen flex-col items-center bg-[#222] text-white">
  //     {children}
  //   </div>
  // );
  return (
    <div
      style={{ background: `url('${bg}')` }}
      className={`flex min-h-screen w-screen flex-col items-center text-white`}
    >
      {children}
    </div>
  );
};

export default Layout;
