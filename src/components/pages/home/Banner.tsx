import React from "react";
import BlackBtn from "../../resuable/BlackBtn";
const Banner = () => {
  let props = {text: 'Discover'}
  return (
    <div className="mt-5 mb-20 lg:my-5 md:h-screen flex flex-col justify-center lg:h-[80%] ">
      <h1 className="text-5xl md:text-8xl font-[600] leading-[4rem] md:leading-[6.5rem]">
        Beginner- <span className="relative">friendly <div className="bg-yellow -z-[10] absolute md:top-4 md:h-16 -top-0 -right-4 w-full h-10"/> </span> articles in simple{" "}
        <span className="relative">
          English. <div className="absolute h-2 w-full md:h-4 -z-[10] bg-green" />{" "}
        </span>
      </h1>
      <p className="my-4 text-lg md:text-2xl p-2">
        Find articles and tutorials written by developers, for the developers.
      </p>
      <div className="">
     <BlackBtn {...props} />
      </div>
    </div>
  );
};

export default Banner;
