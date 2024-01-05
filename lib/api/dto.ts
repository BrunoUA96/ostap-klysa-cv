// Experience
export interface ExperienceDTO {
  experiences: Experience[];
}

export interface Experience {
  id: string;
  link?: string;
  position: string;
  description: {
    html: Document;
  };
  company: string;
  startedDate: string;
  finishedDate: string;
  responsability: string[];
}

// Project

export interface ProjectDTO {
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  url: string;
  content: {
    html: Document;
  };
  previewImage: { url: string };
  images: Image[];
  responsability: string[];
}

interface Image {
  url: string;
}
