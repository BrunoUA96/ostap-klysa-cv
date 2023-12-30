"use client";
import React from "react";

import { Card } from "../Card";

import { Experience } from "@/lib/api/dto";
import { ResponsabilityList } from "../ResponsabilityList";
import { motion } from "framer-motion";

export const ExperienceCard = (props: Experience) => {
  const [startedYear, startedMonth] = props.startedDate.split("-");
  const [finishYear, finishMonth] = props.finishedDate.split("-");

  return (
    <Card id={props.id}>
      {/* Timeline Section */}
      <div>
        <div className="col-span-3">
          {/* Company */}
          <div className="flex items-center gap-4">
            <h5 className="text-sm 2xl:text-md font-bold tracking-wide">
              {props.company}
            </h5>
            <div className="flex gap-3 col-span-2 text-slate-800 text-xs lg:group-hover:bg-white/50 px-3 py-1 rounded-lg transition-all">
              <span>{`${startedYear}/${startedMonth}`}</span>
              <span>&mdash;</span>
              <span>{`${finishYear}/${finishMonth}`}</span>
            </div>
          </div>
          {/* Position */}
          <span className="inline-block text-xs text-sky-800 font-medium mb-3">
            {props.position}
          </span>
          {/* Description */}
          <p className="mb-3 text-sm font-light">{props.description}</p>

          <ResponsabilityList responsabilityList={props.responsability} />
        </div>
      </div>
    </Card>
  );
};
