import { StepsSection } from "@/components/ui/Card";

export default function Collaborate() {
  return (
    <div className="w-full px-6">
      <header className="relative z-20">
        <p
          aria-hidden="true"
          className="absolute top-0 lg:-left-150 xl:-left-160 2xl:-left-174 lg:text-6xl xl:text-7xl 2xl:text-8xl text-white/10 font-bold text-center tracking-tight"
        >
          How To Collaborate
        </p>
        <p
          aria-hidden="true"
          className="absolute top-0 lg:-right-150 xl:-right-160 2xl:-right-174 lg:text-6xl xl:text-7xl 2xl:text-8xl text-white/10 font-bold text-center tracking-tight"
        >
          How To Collaborate
        </p>
        <h2 className="lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-bold text-center tracking-tight">
          How To Collaborate
        </h2>
      </header>
      <div className="flex flex-row gap-24 my-32 justify-center">
        <StepsSection />
      </div>
    </div>
  );
}
