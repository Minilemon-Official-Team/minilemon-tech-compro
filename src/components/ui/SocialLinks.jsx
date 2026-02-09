import React from "react";
import { Facebook, Instagram, Whatsapp } from "./Social";

export default function SocialLinks() {
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


