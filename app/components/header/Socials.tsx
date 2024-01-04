import React, { ReactNode } from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialLink = ({
  download = false,
  href,
  children,
}: {
  download?: boolean;
  href: string;
  children: ReactNode;
}) => {
  return (
    <a
      href={href}
      target={download ? "_self" : "_blank"}
      download={download}
      className="flex items-center gap-2 text-xl hover:scale-125 transition-all">
      {children}
    </a>
  );
};

export const Socials = () => (
  <div className="flex gap-14 pb-5">
    <SocialLink href="https://github.com/BrunoUA96">
      <BsGithub />
    </SocialLink>
    <SocialLink href="https://www.linkedin.com/in/ostap-klysa-425237108/">
      <BsLinkedin />
    </SocialLink>
    <SocialLink download href="/Resume-Ostap-Klysa.pdf">
      CV
    </SocialLink>
  </div>
);
