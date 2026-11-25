export interface SkillGroup {
  heading: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    heading: "WordPress & CMS",
    items: [
      "WordPress Development",
      "Website Administration",
      "Theme and Plugin Management",
      "Content Management",
      "Website Maintenance",
      "SEO",
    ],
  },
  {
    heading: "Web Engineering",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
      "Python",
      "Responsive Web Development",
      "Third-Party Integrations",
    ],
  },
  {
    heading: "Security & Website Operations",
    items: [
      "Website Testing",
      "Troubleshooting",
      "Penetration Testing Fundamentals",
      "Git Version Control",
      "Website Optimization",
      "Accessibility Principles",
      "Deployment Workflows",
    ],
  },
  {
    heading: "Tools",
    items: ["Git", "GitHub", "Jira", "Selenium"],
  },
];
