export interface ExperienceResponse {
  experiences: Experience[];
}

export interface Experience {
  id: string;
  link?: string;
  position: string;
  description?: string;
  company: string;
  startedDate: string;
  finishedDate: string;
  responsability: string[];
}
