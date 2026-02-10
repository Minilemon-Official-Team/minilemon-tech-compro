import ProductCard from "@/components/ui/Card";
import AnimatedCubes from "../../../ui/AnimatedCubes";

export default function Products() {

  const datasCard = [
    {
      id: "citrus-os",
      title: "CitrusOS",
      description:
        "A distributed runtime for high-concurrency cloud environments, prioritizing low-latency and auto-healing capabilities.",
      features: ["Infastructure", "Production"],
    },
    {
      id: "lumina-grid",
      title: "Lumina Grid",
      description:
        "Real-time data visualization engine for IoT sensor networks, providing deep insights into complex physical systems.",
      features: ["Data & AI", "Beta"],
    },
    {
      id: "vertex-protocol",
      title: "Vertex Protocol",
      description:
        "An encrypted communication layer designed for secure multi-party computation and private collaboration.",
      features: ["Security", "Alpha"],
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col gap-8 items-center mb-12">
      <AnimatedCubes position={"rotate-8 top-90 lg:right-10 xl:right-20 2xl:right-80"}/>

      <AnimatedCubes position={"-rotate-12 top-[56%] lg:left-10 xl:left-20 left-80"} />

      {datasCard.map((data) => (
        <ProductCard
          key={data.id}
          title={data.title}
          description={data.description}
          features={data.features}
        />
      ))}
    </div>
  );
}
