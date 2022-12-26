import React from "react";
import Link from "../profile/Links";
import { linksList } from "../../data/links";

function Main() {
  return (
    <main className="flex w-11/12 max-w-2xl flex-col gap-10 -py-20">
      <div className="shadow-xl font-light rounded -mt-5">
        {linksList
          .filter(({ category }) => !category)
          .map((link) => (
            <Link key={link.title} {...link} />
          ))}
      </div>

      <div className="bg-whitebackdrop mb-8 flex flex-col gap-6 rounded-md bg-slate-0 bg-opacity-0 p-6">
        <div className="mx-auto max-w-2xl py-10 px-10 sm:py-0 sm:px-8 lg:max-w-7xl lg:px-8">
          <div className="h-96 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
              <img src="https://placeimg.com/256/400/arch" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://placeimg.com/256/400/arch" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://placeimg.com/256/400/arch" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://placeimg.com/256/400/arch" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://placeimg.com/256/400/arch" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://placeimg.com/256/400/arch" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://placeimg.com/256/400/arch" />
            </div>
          </div>
        </div>
      </div>

    </main>

  );
}

export default Main;
