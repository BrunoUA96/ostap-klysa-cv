import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

import { ExperienceDTO, ProjectDTO } from "./dto";

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
    projects {
      id
      title
      url
      previewImage {
        url
      }
      images {
        url
      }
      content {
        text
      }
    }
  }
`;

export async function getProjects() {
  const hygraph = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clpy9x1jckoj501t0boi1b44e/master"
  );

  const { projects, experiences } = await hygraph.request<
    ProjectDTO & ExperienceDTO
  >(QUERY);

  return { projects: [...projects], experiences: [...experiences] };
}
