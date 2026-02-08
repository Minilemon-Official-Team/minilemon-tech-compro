import React from "react";

export default function PlaygroundCard({ title, description }) {
  return (
    <div className="bg-white p-8 flex flex-col justify-center gap-4 max-w-80 min-h-92">
      <h3 className="font-bold leading-tight text-3xl">{title}</h3>
      <p className="italic leading-relaxed text-xl">{description}</p>
      <a href="" className="font-bold">
        Learn More
      </a>
    </div>
  );
}
