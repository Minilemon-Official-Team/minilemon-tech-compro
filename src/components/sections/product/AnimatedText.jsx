import React from "react";

export default function AnimatedText({ text, rotate }) {
  return (
    <h2
      className={`flex flex-wrap text-[80px] leading-none select-none ${rotate}`}
    >
      {text.split(" ").map((word, wordIndex) => (
        <div key={wordIndex} className="inline-block mr-4 last:mr-0">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="
                inline-block 
                text-white/10 cursor-pointer
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
