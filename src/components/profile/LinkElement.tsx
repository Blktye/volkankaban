import React from "react";

interface LinkElementProps {
  url: string;
  children: React.ReactNode;
}

function LinkElement({ url, children }: LinkElementProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default LinkElement;
