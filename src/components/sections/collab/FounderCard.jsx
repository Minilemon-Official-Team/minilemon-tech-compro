import React from "react";
import Image from "next/image";

export default function FounderCard({ props }) {
  const isEven = props.id % 2 === 0;

  return (
    <div
      className={`group relative flex items-center py-4 px-8 w-full max-w-4xl transition-all duration-500 ease-out border-2 hover:border-white
  ${isEven ? "flex-row-reverse text-right" : "flex-row text-left"}`}
      style={{ backgroundColor: props.color }}

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
        <p className="font-bold text-2xl">{props.name}</p>
        <p>{props.subTitle}</p>
      </div>

      <div
        className={`absolute -bottom-3.5 w-48 h-48 sm:w-56 sm:h-56 z-20 transition-transform duration-500 ease-out origin-bottom group-hover:scale-110
      ${isEven ? "-left-6 group-hover:translate-x-4" : "-right-6 group-hover:-translate-x-4"}`}
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
