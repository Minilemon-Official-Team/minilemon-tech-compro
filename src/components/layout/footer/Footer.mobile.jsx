"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import SocialLinks from "@/components/ui/SocialLinks";
import Image from "next/image";
import Link from "next/link";

export default function FooterMobile() {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  return (
    <footer className="bg-white w-full py-12 px-8">
      <div className="max-w-310 2xl:max-w-400 3xl:max-w-440 mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <div className="flex flex-row items-center gap-4 mb-2">
                {isMobile ? (
                  <Image
                    src="/assets/MinilemonTechLogo.png"
                    alt="Tech Logo"
                    width={60}
                    height={80}
                  />
                ) : (
                  <Image
                    src="/assets/MinilemonTechLogo.png"
                    alt="Tech Logo"
                    width={120}
                    height={109}
                  />
                )}
                <div>
                  <p className="text-xl">
                    <b>Minilemon</b>
                    <br /> <span className="text-[#0044FF]">Technology</span>
                  </p>
                </div>
              </div>
            </Link>
            <p className="text-sm">
              Designing systems, products, and collaborations for the future. We
              build digital ecosystems that prioritize long-term impact over
              short-term trends.
            </p>
            <SocialLinks />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col mt-4">
              <h3 className="font-semibold text-xl mb-4">
                Eksplore
              </h3>
              <ul className="space-y-2 text-sm">
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
            <div className="flex flex-col mt-4">
              <h3 className="font-semibold text-xl mb-4">
                Connect
              </h3>
              <ul className="space-y-2 text-sm">
                <li>hello@minilemon.tech</li>
                <li>careers@minilemon.tech</li>
                <li>+1 (555) 123-4567</li>
                <li>Silicon Valley, CA</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-xs mt-12 text-center items-center">
          <p className="mb-2">© 2025 Minilemon Technology. All rights reserved</p>
          <div className="flex justify-between items-center gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
