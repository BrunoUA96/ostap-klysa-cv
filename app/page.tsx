import { DividerContent } from "@/app/components/DividerContent";
import { MouseBg } from "@/app/components/MouseBg";
import { About } from "@/app/components/home/About";

import { PortfolioList } from "@/app/components/portfolio/PortfolioList";
import { ExperienceList } from "@/app/components/Experience/ExperienceList";
import { getProjects } from "@/lib/api/api";
import { AnimationWrapper } from "./components/AnimationWrapper";

export default async function Home() {
  const { projects, experiences } = await getProjects();

  return (
    <div>
      <MouseBg />

      <AnimationWrapper>
        <About />
        <DividerContent />
        <ExperienceList experienceList={experiences} />
        <DividerContent />
      </AnimationWrapper>

      <PortfolioList projectList={projects} />
    </div>
  );
}
