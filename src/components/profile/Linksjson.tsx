import React from "react";

import data from "../../data";
// import { profile } from "../../public/profiles/{ profile.id }";
import DataLink from "./DataLink";

const Links = () => {
  const { links } = data;
  return (
    // background={link.background}
    <div className="mt-32 w-[350px] flex-grow p-2">
      {/* profile links */}
      {links.map((link) => (
        <DataLink
          key={link.id}
          name={link.title}
          href={link.url}
          icon={link.icon}
        />
      ))}
    </div>
  );
};

export default Links;
