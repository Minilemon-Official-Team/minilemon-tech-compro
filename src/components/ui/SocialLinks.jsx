import React from "react";
import { Facebook, Instagram, Whatsapp } from "./Social";

const SocialLinks = () => {
  return (
    <div className="flex gap-8">
      <a href="#" aria-label="Instagram">
        <Instagram/>
      </a>
      <a href="#" aria-label="Whatsapp">
        <Whatsapp/>
      </a>
      <a href="#" aria-label="Facebook">
        <Facebook/>
      </a>
    </div>
  );
};

export default SocialLinks;
