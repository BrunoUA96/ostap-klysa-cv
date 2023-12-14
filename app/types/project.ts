export interface ProjectResponse {
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
