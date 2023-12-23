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
  const hygraph = new GraphQLClient(process.env.HYGRAPH_API as string);

  const { projects, experiences } = await hygraph.request<
    ProjectDTO & ExperienceDTO
  >(QUERY);

  return { projects: [...projects], experiences: [...experiences] };
}
