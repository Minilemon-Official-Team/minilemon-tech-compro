import React from "react";

const StepCard = ({ id, title, subtitle }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-2xl w-44 h-44 p-16 border-4 border-white text-white text-6xl font-bold flex justify-center items-center">
        {id}
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-white text-2xl leading-tight text-center">
          {title}
        </h3>
        <p className="text-white leading-relaxed text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default StepCard;
