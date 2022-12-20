import React from "react";

import LinkElement from "./LinkElement";

interface LinkProps {
  id: string;
  title: string;
  url: string;
  background?: string;
  category?: string;
}

function Link({ title, url }: LinkProps) {
  return (
    <>
      <LinkElement url={url}>
        <div className="mb-2 backdrop grid place-items-center rounded-lg border-2 bg-blue-500 bg-opacity-40 p-4 duration-300 ease-in-out hover:rotate-1 hover:scale-105">
          <span className="text-xl font-semibold tracking-wide">{title}</span>
        </div>
      </LinkElement>
    </>
  );
}

export default Link;
