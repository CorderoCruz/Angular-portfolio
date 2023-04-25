export interface Project {
  id: number;
  title: string;
  description: string;
  responsibilities: string;
  technologies: {
    name: string;
    imageLink: string;
  }[];
  images: string[];
  deployedLink: string;
  repository: string;
}
