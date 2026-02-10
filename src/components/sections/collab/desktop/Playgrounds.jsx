import { PlaygroundCard } from "@/components/ui/Card";

export default function Playgrounds() {
  const playgroundDatas = [
    {
      id: "internship-program",
      title: "Internship Program",
      description:
        "High-intensity immersive learning by doing alongside our Core and Meta teams.",
    },
    {
      id: "open-source-project",
      title: "Open Source Project",
      description:
        "Core components of our stack shared for community growth and innovation.",
    },
    {
      id: "csr-initiatives",
      title: "CSR Initiatives",
      description:
        "Applying advanced technology to solve pressing social and environmental problems.",
    },
    {
      id: "research-&-experiments",
      title: "Research & Experiments",
      description:
        "Testing bleeding-edge technologies and theoretical frameworks in the lab.",
    },
  ];

  return (
    <div className="w-full min-h-screen px-6">
      <header className="relative z-20">
        <p
          aria-hidden="true"
          className="absolute top-0 lg:-left-110 xl:-left-120 2xl:-left-116 lg:text-6xl xl:text-7xl 2xl:text-8xl text-white/10 font-bold text-center tracking-tight"
        >
          The Playground
        </p>
        <p
          aria-hidden="true"
          className="absolute top-0 lg:-right-110 xl:-right-120 2xl:-right-116 lg:text-6xl xl:text-7xl 2xl:text-8xl text-white/10 font-bold text-center tracking-tight"
        >
          The Playground
        </p>
        <h2 className="lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-bold text-center tracking-tight">
          The Playground
        </h2>
      </header>
      <div className="grid grid-cols-2 w-fit mx-auto gap-24 py-24">
        {playgroundDatas.map((data) => (
          <PlaygroundCard
            key={data.id}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}
