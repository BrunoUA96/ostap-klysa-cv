import Image from "next/image";
import React from "react";
import { Project } from "./PortfolioList";

export const PortfolioCard = ({ ...project }: Project) => {
  return (
    <li className="mb-12">
      <div className="group lg:hover:!opacity-100 lg:group-hover/list:opacity-50 relative">
        <div className="flex gap-4 rounded-md transition-all motion-reduce:transition-none lg:group-hover:bg-slate-300/50 lg:group-hover:-m-4 lg:group-hover:p-4 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg cursor-pointer">
          <div className=" flex-shrink-0">
            <Image
              src={project.images[0].url}
              alt="Company"
              width={200}
              height={100}
              sizes=" 50vw, 33vw"
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">{project.title}</h4>
            <p className="mb-3 text-sm">{project.content.text}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
