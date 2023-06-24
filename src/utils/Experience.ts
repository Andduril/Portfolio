import { Label } from './Label';

export interface Company {
  name: string;
  description: string;
  imageSrc: string | undefined;
}

export interface Experience {
  name: string;
  company: Company;
  jobDescription: string;
  startDate: Date;
  endDate?: Date;
  labels: Label[];
}