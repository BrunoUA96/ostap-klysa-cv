import { DividerContent } from "@/app/components/DividerContent";
import { MouseBg } from "@/app/components/MouseBg";
import { About } from "@/app/components/home/About";

import { PortfolioList } from "@/app/components/portfolio/PortfolioList";
import { ExperienceList } from "@/app/components/Experience/ExperienceList";
import { getProjects } from "@/lib/api/api";

export default async function Home() {
  const { projects, experiences } = await getProjects();

  return (
    <div>
      <MouseBg />

      <About />

      <DividerContent />

      <ExperienceList experienceList={experiences} />

      <DividerContent />

      <PortfolioList projectList={projects} />
    </div>
  );
}
