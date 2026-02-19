import { StepsSection } from "@/components/ui/Card";

export default function Collaborate() {
  return (
    <div className="w-full px-6">
      <header className="relative z-20">
        <p
          aria-hidden="true"
          className="absolute top-0 -left-32 text-xl min-[520px]:text-3xl min-[520px]:-left-48 sm:-left-32 text-white/10 font-bold text-center tracking-tight"
        >
          How To Collaborate
        </p>
        <p
          aria-hidden="true"
          className="absolute top-0 -right-32 text-xl min-[520px]:text-3xl min-[520px]:-right-48 sm:-right-32 text-white/10 font-bold text-center tracking-tight"
        >
          How To Collaborate
        </p>
        <h2 className="text-xl min-[520px]:text-3xl text-white font-bold text-center tracking-tight">
          How To Collaborate
        </h2>
      </header>
      <div className="flex flex-col gap-24 my-4 px-4 justify-center">
        <StepsSection />
      </div>
    </div>
  );
}
