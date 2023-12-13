import Image from "next/image";
import React from "react";

export const PortfolioCard = () => {
  return (
    <li className="mb-12">
      <div className="group lg:hover:!opacity-100 lg:group-hover/list:opacity-50 relative">
        <div className="flex gap-4 rounded-md transition-all motion-reduce:transition-none lg:group-hover:bg-slate-300/50 lg:group-hover:-m-4 lg:group-hover:p-4 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg cursor-pointer">
          <div className=" flex-shrink-0">
            <Image
              src={
                "https://images.unsplash.com/photo-1702234577513-151004f4cb44?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Company"
              width={200}
              height={100}
              sizes=" 50vw, 33vw"
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Labrador</h4>
            <p className="mb-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              quam obcaecati sequi tenetur quibusdam nemo soluta doloribus
              blanditiis quas earum, corrupti odit ipsa laborum sit eligendi,
              consequatur molestiae nisi explicabo.
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
