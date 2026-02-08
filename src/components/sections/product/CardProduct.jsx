import React from "react";
import Image from "next/image";
import CardPill from "./CardPill";

const CardProduct = ({title, description, features}) => {
  return (
    <div className="rounded-2xl p-4 max-w-4xl bg-[#181818] grid grid-cols-2 gap-8 hover:border hover:border-white">
      <Image
        alt=""
        src="/assets/product_card_template.png"
        width={400}
        height={400}
        className="rounded-xl object-cover w-full h-[500px]"
      />
      <div className="flex flex-col justify-center">
        <h2 className="text-white font-bold text-4xl mb-8">{title}</h2>
        <p className="text-[#B1B1B1] mb-4">
          {description}
        </p>
        <div className="flex flex-row gap-4 mb-4">
          {features.map((feature, index) => (
            <CardPill key={index} title={feature}/>
          ))}
        </div>
        <p className="text-[#EABDF2]">Technical Deep Dive</p>
      </div>
    </div>
  );
};

export default CardProduct;
