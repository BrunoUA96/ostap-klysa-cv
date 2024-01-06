"use client";
import React from "react";

import { Card } from "../Card";
import { ResponsabilityList } from "../ResponsabilityList";

import { Experience } from "@/lib/api/dto";

export const ExperienceCard = (props: Experience) => {
  const [startedYear, startedMonth] = props.startedDate.split("-");
  const [finishYear, finishMonth] = props.finishedDate.split("-");

  const descrintion = { __html: props.description.html };

  return (
    <Card id={props.id}>
      {/* Timeline Section */}
      <div>
        <div className="col-span-3">
          {/* Company */}
          <div className="flex items-center gap-4">
            <h5 className="text-sm 2xl:text-md font-bold tracking-wide text-slate-900 dark:text-slate-200 transition-colors duration-300">
              {props.company}
            </h5>
            <div className="flex gap-3 col-span-2 text-slate-800 text-xs lg:group-hover:bg-white/50 dark:lg:group-hover:bg-white dark:text-white/80 dark:lg:group-hover:text-black px-3 py-1 rounded-lg transition-all">
              <span>{`${startedYear}/${startedMonth}`}</span>
              <span>&mdash;</span>
              <span>{`${finishYear}/${finishMonth}`}</span>
            </div>
          </div>
          {/* Position */}
          <span className="inline-block text-xs text-sky-800 dark:text-cyan-400 font-medium mb-3 transition-colors duration-300">
            {props.position}
          </span>
          {/* Description */}
          <div
            className="mb-3 text-sm font-light text-slate-900 dark:text-slate-200 transition-colors duration-300 [&>p>a]:text-blue-500 [&>p>a]:dark:text-sky-400"
            dangerouslySetInnerHTML={descrintion}
          />

          <ResponsabilityList responsabilityList={props.responsability} />
        </div>
      </div>
    </Card>
  );
};
