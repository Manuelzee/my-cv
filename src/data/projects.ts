export interface Project {
  number: string;
  name: string;
  description: string;
  url: string;
  domain: string;
  image?: string;
  imageAlt?: string;
}

/**
 * Descriptions are kept to what can actually be verified from each site's
 * public-facing content. Nothing here states technologies, metrics, or a
 * specific role unless it was explicitly confirmed.
 */
export const projects: Project[] = [
  {
    number: "01",
    name: "GRIDOS Africa",
    description: "Smart grid infrastructure platform for Africa's energy sector.",
    url: "https://gridos.africa/",
    domain: "gridos.africa",
    image: "/projects/project-01.jpg",
    imageAlt: "GRIDOS Africa homepage with its green smart energy design",
  },
  {
    number: "02",
    name: "Omiola Construction Company",
    description: "Construction, infrastructure, and sustainable biogas solutions website.",
    url: "https://omiola.com.ng/",
    domain: "omiola.com.ng",
    image: "/projects/project-02.jpg",
    imageAlt: "Omiola Construction homepage featuring a building project",
  },
  {
    number: "03",
    name: "Prosumate",
    description: "Business growth, digital marketing, CRM, and automation services website.",
    url: "https://prosumate.com/",
    domain: "prosumate.com",
    image: "/projects/project-03.jpg",
    imageAlt: "Prosumate business growth website homepage",
  },
  {
    number: "04",
    name: "Prosumate SaaS Platform",
    description: "Enterprise multi-tenant business management SaaS workspace.",
    url: "https://app.prosumate.com/",
    domain: "app.prosumate.com",
    image: "/projects/project-04.jpg",
    imageAlt: "Prosumate SaaS platform public sign-in screen",
  },
  {
    number: "05",
    name: "Berg & Bewem Services",
    description: "Health, wellness, consulting, and services website.",
    url: "https://bergandbewem.yogesoluglobal.com/",
    domain: "bergandbewem.yogesoluglobal.com",
    image: "/projects/project-05.jpg",
    imageAlt: "Berg and Bewem Services website wellness section",
  },
  {
    number: "06",
    name: "BERG Live Healthy Foundation",
    description: "Nonprofit organization website focused on health, wellness, and community support.",
    url: "https://foundation.yogesoluglobal.com/",
    domain: "foundation.yogesoluglobal.com",
    image: "/projects/project-06.jpg",
    imageAlt: "BERG Live Healthy Foundation homepage featuring a community event",
  },
];
