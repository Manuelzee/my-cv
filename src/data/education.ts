export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export const education: EducationEntry = {
  degree: "Higher National Diploma (HND), Statistics",
  institution: "Ibadan City Polytechnic",
  location: "Oyo State, Nigeria",
  period: "2023",
};

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  { name: "Android Bug Bounty", issuer: "EC-Council", year: "2023" },
  { name: "Certified Ethical Hacking", issuer: "HIIT PLC, Nigeria", year: "2022" },
  {
    name: "Project Management Essentials Certified",
    issuer: "Management and Strategy Institute, USA",
    year: "2020",
  },
  { name: "Web Development", issuer: "Udemy", year: "2019" },
  {
    name: "Diploma in Information Security and Cyberlaw",
    issuer: "Scholars Infotech Institute of Technology, India",
    year: "2017",
  },
];
