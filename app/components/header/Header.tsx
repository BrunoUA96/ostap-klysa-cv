import React from "react";

import { Greeting } from "./Greeting";
import { Socials } from "./Socials";
import { Skills } from "./Skills";

export const Header = () => {
  return (
    <header className="max-h-screen flex flex-col pt-16 lg:sticky lg:top-0">
      <Greeting />
      <Skills />
      <Socials />
    </header>
  );
};
