export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

/**
 * Bullet content pending the user's actual CV text — do not invent
 * responsibilities, statistics, or achievements. Company, title, and
 * dates below are confirmed; bullets will be filled in once provided.
 */
export const experience: ExperienceEntry[] = [
    {
    title: "Fullstack  Developer",
    company: "Prosumate(Remote)",
    period: "August 2026 ",
    bullets: [],
  },
  {
    title: "Web Developer",
    company: "DigitalVent (Remote)",
    period: "September 2022 – March 2023",
    bullets: [],
  },
  {
    title: "WordPress web Engineer",
    company: "Ispecs Digital Services",
    period: "December 2020 – September 2021",
    bullets: [],
  },
  {
    title: "Web Developer(Contract)",
    company: "One Big Pie Ltd",
    period: "September 2020 – December 2020",
    bullets: [],
  },
  {
    title: "Web Administrator",
    company: "Central Council of Ibadan Indigenes",
    period: "September 2018 – December 2018",
    bullets: [],
  },
  {
    title: "WordPress Developer Intern",
    company: "Miracle Technologies",
    period: "February 2018 – September 2018",
    bullets: [],
  },
];
