import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Socials = () => (
  <div className="flex gap-14 pb-5">
    <a
      href="https://github.com/BrunoUA96"
      target="new"
      className="relative flex items-center gap-2 text-xl">
      <BsGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/ostap-klysa-425237108/"
      target="new"
      className="relative flex items-center gap-2 text-xl">
      <BsLinkedin />
    </a>
    <a
      download
      className="relative flex items-center gap-2 text-xl"
      href="/Resume-Ostap-Klysa.pdf">
      CV
    </a>
  </div>
);
