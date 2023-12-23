import { Experience } from "@/lib/api/dto";
import { ExperienceCard } from "./ExperienceCard";

export const ExperienceList = ({
  experienceList,
}: {
  experienceList: Experience[];
}) => {
  return (
    <ol className="group/list">
      {experienceList.map((exp) => (
        <div key={exp.id} className="mb-12 last:mb-0">
          <ExperienceCard {...exp} />
        </div>
      ))}
    </ol>
  );
};
