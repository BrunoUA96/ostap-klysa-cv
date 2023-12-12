import React from "react";

const ExperienceCard = () => {
  return (
    <li className="mb-12">
      <div className="group lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="rounded-md transition-all motion-reduce:transition-none lg:group-hover:bg-slate-300/50 lg:group-hover:p-4 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg cursor-pointer">
          {/* Timeline Section */}
          <div className="flex gap-3 col-span-2 text-slate-800 text-xs">
            <span>2018</span>
            <span>&mdash;</span>
            <span>2020</span>
          </div>
          <div className="col-span-3">
            {/* Company */}
            <h5 className="text-sm font-semibold mb-3">
              Junta Digital Production
            </h5>
            {/* Position */}
            <span className="inline-block text-sm font-semibold mb-3">
              Frontend Developer
            </span>
            {/* Description */}
            <p className="mb-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              numquam omnis labore culpa quam cum cumque perspiciatis
              necessitatibus iste consequuntur, iure unde, aliquid vel,
              inventore suscipit! Odit non natus velit.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="bg-sky-200/75 px-3 py-1 rounded-full text-xs">
                React
              </span>
              <span className="bg-sky-200/75 px-3 py-1 rounded-full text-xs">
                October CMS
              </span>
              <span className="bg-sky-200/75 px-3 py-1 rounded-full text-xs">
                HTML
              </span>
              <span className="bg-sky-200/75 px-3 py-1 rounded-full text-xs">
                CSS / SASS
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const Experience = () => {
  return (
    <ol className="group/list">
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
    </ol>
  );
};
