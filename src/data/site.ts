export interface SiteProfile {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  githubLabel: string;
  url: string;
  summary: string;
  resumePdf?: string;
}

export const site: SiteProfile = {
  name: "Emmanuel Oluwakayode Kolawole",
  title: "Web Developer",
  location: "West Africa",
  email: "ekolawole57@gmail.com",
  github: "https://github.com/Manuelzee",
  githubLabel: "github.com/Manuelzee",
  url: "https://kolawoleemmanuel.com",
  summary:
    "Web Developer with experience in building responsive, content-focused web experiences. Skilled in website maintenance, third-party integrations, SEO, troubleshooting, and collaborative project delivery.",
};
