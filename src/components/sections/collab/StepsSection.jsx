import { useState } from "react";

function StepCard({ id, title, subtitle, isActive, onSelect }) {
  return (
    <div 
      className={`flex flex-col justify-center items-center gap-8 cursor-pointer group transition-all duration-500 ease-out ${isActive ? "scale-110 text-white" : "text-white/20"}`} 
      onClick={() => onSelect(id)}
    >
      <div 
        className={`rounded-2xl w-32 h-32 p-16 border-4 text-6xl font-bold flex justify-center 
          items-center ${isActive ? "border-white" : "border-white/20"}`}
      >
        {id}
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-2xl leading-tight text-center">
          {title}
        </h3>
        <p className="leading-relaxed text-center">{subtitle}</p>
      </div>
    </div>
  );
}


export default function StepsSection() {
  const [activeStep, setActiveStep] = useState(1); 

  const stepDatas = [
    { id: 1, title: "Reach Out", subtitle: "Email Us Your Proposal" },
    { id: 2, title: "Idea Share", subtitle: "Initial Discovery Call" },
    { id: 3, title: "Align Goals", subtitle: "Strategy & Roadmap" },
    { id: 4, title: "Co-Launch", subtitle: "Start The Project" },
  ];

  return (
    <div className="flex flex-row gap-24 my-32 justify-center">
      {stepDatas.map((data) => (
        <StepCard
          key={data.id}
          id={data.id}
          title={data.title}
          subtitle={data.subtitle}
          onSelect={setActiveStep}
          isActive={activeStep === data.id}
        />
      ))}
    </div>
  );
}