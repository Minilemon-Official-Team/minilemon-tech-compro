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
    <div className="w-full min-h-screen">
      <header className="relative z-20">
        <p
          aria-hidden="true"
          className="absolute top-0 -left-20 text-xl min-[520px]:text-3xl min-[520px]:-left-28 sm:-left-16 text-white/10 font-bold text-center tracking-tight"
        >
          The Playground
        </p>
        <p
          aria-hidden="true"
          className="absolute top-0 -right-20 text-xl min-[520px]:text-3xl min-[520px]:-right-28 sm:-right-16 text-white/10 font-bold text-center tracking-tight"
        >
          The Playground
        </p>
        <h2 className="text-xl min-[520px]:text-3xl text-white font-bold text-center tracking-tight">
          The Playground
        </h2>
      </header>
      <div className="grid grid-cols-1 gap-12 py-24">
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
