import React from "react";

import { Greeting } from "./Greeting";
import { Socials } from "./Socials";
import { Skills } from "./Skills";
import { AnimationWrapper } from "../AnimationWrapper";

export const Header = () => {
  return (
    <header className="max-h-screen flex flex-col pt-16 lg:sticky lg:top-0">
      <AnimationWrapper>
        <Greeting />
        <Socials />
        <Skills />
      </AnimationWrapper>
    </header>
  );
};
