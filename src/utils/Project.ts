export interface Project {
  name: string;
  gifSrc: string | undefined;
  images?: string[];
  description: string;
  labels: string[];
  githubLink?: string;
  features?: string[];
}