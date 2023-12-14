import React from "react";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

import { ProjectResponse } from "@/app/types/project";
import { PortfolioCard } from "./PortfolioCard";

const QUERY = gql`
  {
    projects {
      id
      title
      subtitle
      images {
        url
      }
      content {
        text
      }
    }
  }
`;

async function getProjects() {
  const hygraph = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clpy9x1jckoj501t0boi1b44e/master"
  );

  const data = await hygraph.request<ProjectResponse>(QUERY);

  return { data };
}

export const PortfolioList = async () => {
  const { data } = await getProjects();

  return (
    <ol className="group/list">
      {data.projects.map((project) => (
        <div key={project.id}>
          <PortfolioCard {...project} />
        </div>
      ))}
    </ol>
  );
};
