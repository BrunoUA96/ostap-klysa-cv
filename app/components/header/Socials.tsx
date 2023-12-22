import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Socials = () => (
  <div className="mt-auto flex gap-20 pb-5">
    <a
      href="https://github.com/BrunoUA96"
      target="new"
      className="relative flex items-center gap-2 text-2xl">
      <BsGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/ostap-klysa-425237108/"
      target="new"
      className="relative flex items-center gap-2 text-2xl">
      <BsLinkedin />
    </a>
    <a download className="relative flex items-center gap-2 text-2xl">
      CV
    </a>
  </div>
);
