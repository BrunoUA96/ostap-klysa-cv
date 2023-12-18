export interface ProjectResponse {
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  url: string;
  content: {
    text: string;
  };
  previewImage: { url: string };
  images: Image[];
}

interface Image {
  url: string;
}
