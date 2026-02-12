import InteractiveGridPattern from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="w-full px-20">
      <div className="relative text-white tracking-widest max-w-310 2xl:max-w-400 3xl:max-w-440 mx-auto py-32 2xl:py-48">
        <InteractiveGridPattern
          className={cn("absolute inset-0 h-full w-full z-20 opacity-20")}
          width={120}
          height={120}
          squares={[80, 80]}
          borderColor="#FFDD10"
        />
        <div className="relative">
          <p className="text-3xl 2xl:text-4xl mb-12">Minilemon Technology</p>
          <h1 className="text-6xl 2xl:text-7xl 3xl:text-8xl font-semibold leading-relaxed">
            We Craft <span className="text-(--mltYellow)">Design</span>
            <br />
            With Purpose, Vision, And Impact
          </h1>
          <div className="text-xl 2xl:text-2xl flex gap-6 justify-start items-center text-white mt-12">
            <button className="bg-(--mltBlue) border border-(--mltBlue) px-2 py-5 rounded-[40px] hover:cursor-pointer">
              Explore Our Vision
            </button>
            <button className="px-2 py-5 rounded-[40px] border border-white hover:cursor-pointer">
              View Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
