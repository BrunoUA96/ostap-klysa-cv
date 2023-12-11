import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {
  HiOutlineDocumentDownload,
  HiOutlineExternalLink,
} from "react-icons/hi";

export const Socials = () => (
  <div className="mt-auto flex justify-between pb-5">
    <a
      href="https://github.com/BrunoUA96"
      target="new"
      className="relative flex items-center gap-2 text-2xl">
      <BsGithub />
      <span className="absolute -bottom-3 -right-3 text-sm">
        <HiOutlineExternalLink />
      </span>
    </a>
    <a
      href="https://www.linkedin.com/in/ostap-klysa-425237108/"
      target="new"
      className="relative flex items-center gap-2 text-2xl">
      <BsLinkedin />
      <span className="absolute -bottom-3 -right-3 text-sm">
        <HiOutlineExternalLink />
      </span>
    </a>
    <a download className="relative flex items-center gap-2 text-2xl">
      Resume
      <span className="absolute -bottom-3 -right-3 text-sm">
        <HiOutlineDocumentDownload />
      </span>
    </a>
  </div>
);
