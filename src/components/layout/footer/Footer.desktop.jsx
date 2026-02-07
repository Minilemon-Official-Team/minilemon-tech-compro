import SocialLinks from "@/components/ui/SocialLinks";
import Image from "next/image";

export default function FooterDesktop() {
  return (
    <footer className="grid grid-cols-[2fr_1fr_1fr] gap-12 px-24 py-8 w-full border">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <Image
            alt="Logo Minilemon Technology"
            src="/assets/MinilemonTechLogo.png"
            width={80}
            height={80}
          />
          <div>
            <p className="text-xl">
              <b>Minilemon</b>
              <br /> <span className="text-[#0044FF]">Technology</span>
            </p>
          </div>
        </div>
        <p>
          Designing systems, products, and collaborations for the future. We
          build digital ecosystems that prioritize long-term impact over
          short-term trends.
        </p>
        <SocialLinks />
        <p className="mt-4">© 2025 Minilemon Technology. All rights reserved</p>
      </div>
      <div className="flex flex-col text-xl justify-center">
        <h3 className="font-bold mb-8 w-full">Eksplore</h3>
        <ul className="space-y-4 w-full">
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Collaborations</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-xl justify-center">
        <h3 className="font-bold mb-8 w-full">Connect</h3>
        <ul className="space-y-4 w-full">
          <li>hello@minilemon.tech</li>
          <li>careers@minilemon.tech</li>
          <li>+1 (555) 123-4567</li>
          <li>Silicon Valley, CA</li>
        </ul>
      </div>
    </footer>
  );
}
