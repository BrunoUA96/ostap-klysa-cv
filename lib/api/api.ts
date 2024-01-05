import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

import { ExperienceDTO, ProjectDTO } from "./dto";

const QUERY = gql`
  {
    experiences(orderBy: startedDate_DESC) {
      id
      link
      position
      description {
        html
      }
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
      images(first: 500) {
        url
      }
      content {
        html
      }
      responsability
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
