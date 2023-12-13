import React from "react";
import { PortfolioCard } from "./PortfolioCard";
import { GraphQLClient } from "graphql-request";

import { gql } from "graphql-request";

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

interface Data {
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: any;
  content: {
    text: string;
  };
  images: Image[];
}

interface Image {
  url: string;
}

async function getProjects() {
  const hygraph = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clpy9x1jckoj501t0boi1b44e/master"
  );

  const data = await hygraph.request<Data>(QUERY);

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
