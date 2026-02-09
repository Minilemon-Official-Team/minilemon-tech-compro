import React from "react";

export default function CardPill({ title }) {
  return <div className="p-2 text-white bg-[#0F2C7B]/50 rounded transition-color duration-700 ease-out hover:bg-[#0F2C7B]">{title}</div>;
}
