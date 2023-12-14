import { DividerContent } from "@/app/components/DividerContent";
import { MouseBg } from "@/app/components/MouseBg";
import { About } from "@/app/components/home/About";

import { PortfolioList } from "@/app/components/portfolio/PortfolioList";
import { ExperienceList } from "@/app/components/Experience/ExperienceList";

export default function Home() {
  return (
    <div className="">
      <MouseBg />
      <h4 className="tracking-wide">{"</>"}</h4>
      <About />

      <DividerContent />

      <ExperienceList />

      <DividerContent />

      <PortfolioList />
    </div>
  );
}
