import React from "react";

import { Experience } from "@/types/experience";

export const ExperienceCard = (props: Experience) => {
  const [startedYear, startedMonth] = props.startedDate.split("-");
  const [finishYear, finishMonth] = props.finishedDate.split("-");

  return (
    <li className="mb-12 last:mb-0">
      <div className="group lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="rounded-md transition-all motion-reduce:transition-none lg:group-hover:bg-slate-300/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg lg:group-hover:-m-4 lg:group-hover:p-4 cursor-pointer">
          {/* Timeline Section */}
          <div className="flex gap-3 col-span-2 text-slate-800 text-xs">
            <span>{`${startedYear}/${startedMonth}`}</span>
            <span>&mdash;</span>
            <span>{`${finishYear}/${finishMonth}`}</span>
          </div>
          <div className="col-span-3">
            {/* Company */}
            <h5 className="text-sm font-semibold mb-1">{props.company}</h5>
            {/* Position */}
            <span className="inline-block text-sm mb-3">{props.position}</span>
            {/* Description */}
            <p className="mb-3 text-sm">{props.description}</p>
            <div className="flex gap-3 flex-wrap">
              {props.responsability.map((res, index) => (
                <span
                  key={index}
                  className="bg-sky-200/75 px-3 py-1 rounded-full text-xs">
                  {res.replace("_", " ")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
