import { MouseBg } from "@/app/components/MouseBg";
import { About } from "@/app/components/About";

import { PortfolioList } from "@/app/components/portfolio/PortfolioList";
import { ExperienceList } from "@/app/components/ExperienceOld/ExperienceList";
import { getProjects } from "@/lib/api/api";
import { AnimationWrapper } from "./components/AnimationWrapper";

const Divider = () => (
  <div className="my-6 border-b border-slate-300 dark:border-slate-700" />
);

export default async function Home() {
  const { projects, experiences } = await getProjects();

  return (
    <div>
      <MouseBg />

      <AnimationWrapper>
        <About />
        <Divider />
        <ExperienceList experienceList={experiences} />
        <Divider />
      </AnimationWrapper>

      <PortfolioList projectList={projects} />
    </div>
  );
}
