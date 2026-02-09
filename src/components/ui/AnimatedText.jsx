import React from "react";
import { myFont } from "@/app/fonts";

export default function AnimatedText({ text, rotate }) {
  return (
    <h2
      className={`${myFont.className} flex flex-wrap sm:text-[40px] md:text-[80px] lg:text-[92px] xl:text-[100px] leading-none select-none ${rotate}`}
    >
      {text.split(" ").map((word, wordIndex) => (
        <div key={wordIndex} className="inline-block mr-4 last:mr-0">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="
                inline-block 
                text-white/10 cursor-pointer
                transform-all duration-300 ease-in-out
                hover:text-purple-700
            "
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </h2>
  );
}
