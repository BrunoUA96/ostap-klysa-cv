import { DividerContent } from "@/components/DividerContent";
import { MouseBg } from "@/components/MouseBg";
import { About } from "@/components/home/About";
import { Experience } from "@/components/home/Experience";
import { PortfolioList } from "@/components/portfolio/PortfolioList";

export default function Home() {
  return (
    <div className="">
      <MouseBg />
      <h4 className="tracking-wide">{"</>"}</h4>
      <About />

      <DividerContent />

      <Experience />

      <DividerContent />

      <PortfolioList />
    </div>
  );
}
