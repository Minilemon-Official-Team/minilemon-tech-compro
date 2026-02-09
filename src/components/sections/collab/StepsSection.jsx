import StepCard from "@/components/sections/collab/StepCard";
import { useState } from "react";

export default function StepsSection() {

    const [activeStep, setIsActive] = useState(1);
    

  const stepDatas = [
    {
      id: 1,
      title: "Reach Out",
      subtitle: "Email Us Your Proposal",
    },
    {
      id: 2,
      title: "Idea Share",
      subtitle: "Initial Discovery Call",
    },
    {
      id: 3,
      title: "Align Goals",
      subtitle: "Strategy & Roadmap",
    },
    {
      id: 4,
      title: "Co-Launch",
      subtitle: "Start The Project",
    },
  ];
  return (
    <div className="flex flex-row gap-24 my-32 justify-center">
      {stepDatas.map((data) => (
        <StepCard
          key={data.id}
          id={data.id}
          title={data.title}
          subtitle={data.subtitle}
          onClick={setIsActive}
          isActive={activeStep === data.id}
        />
      ))}
    </div>
  );
}
