import React from "react";
import { Navs } from "./Navs";
import { Greeting } from "./Greeting";
import { Socials } from "./Socials";

export const Header = () => {
  return (
    <header className="h-screen flex flex-col pt-16 lg:sticky lg:top-0">
      <Greeting />

      <Navs />

      <Socials />
    </header>
  );
};
