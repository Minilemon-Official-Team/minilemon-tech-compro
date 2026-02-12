import ProductCard from "@/components/ui/Card";
import AnimatedCubes from "../../../ui/AnimatedCubes";

export default function Products() {
  const datasCard = [
    {
      id: "minilemon-learning-system",
      image: "/assets/MLS.png",
      title: "Minilemon learning System",
      description:
        "A next-generation and scalable learning management platform built for modern institutions, featuring flexible systems and full white-label readiness for rapid professional growth.",
      features: ["PaaS", "Learning Management System"],
      tagline: "Modernize Learning Platform",
    },
    {
      id: "minilemon-space",
      image: "/assets/Minilemon Space.png",
      title: "Minilemon Space",
      description:
        "A trusted parenting app designed to deliver safe, comfortable, and enriching learning experiences for families & powered by AI you can rely on, without the worries.",
      features: ["Application", "Parenting"],
      tagline: "Parenting App With AI"
    },
    {
      id: "minilemon-hicare",
      image: "/assets/Hicare.png",
      title: "Minilemon Hicare",
      description:
        "Connecting parents and children with trusted doctors through a seamless platform, making consultation and visit scheduling faster, easier, and more convenient.",
      features: ["Health Care", "Smart App"],
      tagline: "Fun, Simple, and Smart App"
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col gap-8 items-center mb-12">
      <AnimatedCubes
        position={"rotate-8 top-90 lg:right-10 xl:right-20 2xl:right-80"}
      />

      <AnimatedCubes
        position={"-rotate-12 top-[56%] lg:left-10 xl:left-20 left-80"}
      />

      {datasCard.map((data) => (
        <ProductCard
          key={data.id}
          image={data.image}
          title={data.title}
          description={data.description}
          features={data.features}
          tagline={data.tagline}
        />
      ))}
    </div>
  );
}
