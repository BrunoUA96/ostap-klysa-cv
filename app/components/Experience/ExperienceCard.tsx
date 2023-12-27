"use client";
import React from "react";

import { Card } from "../Card";

import { Experience } from "@/lib/api/dto";

export const ExperienceCard = (props: Experience) => {
  const [startedYear, startedMonth] = props.startedDate.split("-");
  const [finishYear, finishMonth] = props.finishedDate.split("-");

  return (
    <Card id={props.id}>
      {/* Timeline Section */}
      <div>
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
    </Card>
  );
};
