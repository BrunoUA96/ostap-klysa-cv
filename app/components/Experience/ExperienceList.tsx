import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

import { ExperienceResponse } from "@/types/experience";

import { ExperienceCard } from "./ExperienceCard";

const QUERY = gql`
  {
    experiences {
      id
      link
      position
      description
      company
      startedDate
      finishedDate
      responsability
    }
  }
`;

async function getExperience() {
  const hygraph = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clpy9x1jckoj501t0boi1b44e/master"
  );

  const { experiences } = await hygraph.request<ExperienceResponse>(QUERY);

  return [...experiences];
}

export const ExperienceList = async () => {
  const experienceList = await getExperience();

  return (
    <ol className="group/list">
      {experienceList.map((exp) => (
        <div key={exp.id}>
          <ExperienceCard {...exp} />
        </div>
      ))}
    </ol>
  );
};
