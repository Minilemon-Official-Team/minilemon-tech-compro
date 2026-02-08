import React from "react";
import Image from "next/image";

export default function FounderCard({ props }) {
  const isEven = props.id % 2 === 0;

  return (
    <div
      className={`relative flex items-center bg-pink-300 py-4 px-8 w-full max-w-4xl 
  ${isEven ? "flex-row-reverse text-right" : "flex-row text-left"}`}
    >
      <div
        className={`absolute -top-4 bottom-0 text-[136px] flex justify-center items-center text-black/8 tracking-tighter uppercase leading-none select-none pointer-events-none
      ${isEven ? "-right-48" : "left-8"}`}
      >
        Founder
      </div>

      <div
        className={`w-1 h-24 bg-black shrink-0 ${isEven ? "ml-4" : "mr-4"}`}
      ></div>

      <div className="flex flex-col justify-center z-10 relative">
        <p className="font-bold text-2xl">Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>

      <div
        className={`absolute -bottom-3.5 w-48 h-48 sm:w-56 sm:h-56 z-20
      ${isEven ? "-left-6" : "-right-6"}`}
      >
        <Image
          alt="Foto Founder"
          src="/assets/founder_template.png"
          width={300}
          height={300}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}
