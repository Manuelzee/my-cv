import { site } from "./site";
import type { ExperienceEntry } from "./experience";
import type { SkillGroup } from "./skills";
import { projects } from "./projects";

// Content transcribed and condensed from the supplied digital marketing CV.
export const marketingSite = {
  ...site,
  title: "Digital Marketing Specialist",
  email: "Manuelzee57@gmail.com",
  resumePdf: "/resume/Kolawole-Emmanuel-Digital-Marketing-CV.pdf",
  summary: "Results-driven Digital Marketing Specialist with 6+ years of experience helping SMEs and service-based businesses grow through SEO, paid advertising, lead generation, content marketing, and marketing analytics. Experienced in planning and optimizing Google Ads, Meta Ads, LinkedIn Ads, email marketing, and organic search campaigns. Skilled at translating business goals into measurable marketing strategies and improving campaign performance using data.",
};

export const marketingSkills: SkillGroup[] = [
  { heading: "Strategy & Growth", items: ["Digital Marketing Strategy", "Lead Generation", "Conversion Optimization", "Content Marketing", "Email Marketing", "Social Media Marketing", "AI-Assisted Marketing"] },
  { heading: "Paid Advertising & Analytics", items: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "TikTok Ads", "Twitter Ads", "PPC Campaign Management", "Google Analytics (GA4)", "Marketing Analytics & Reporting"] },
  { heading: "SEO & Web", items: ["Keyword Research", "On-Page SEO", "Ahrefs", "SEMrush", "WordPress", "Yoast SEO", "HTML5", "CSS", "JavaScript", "Web Development"] },
  { heading: "CRM, Content & Design Tools", items: ["GoHighLevel", "HubSpot", "Salesforce", "Zoho CRM", "Mailchimp", "Hootsuite", "Buffer", "Canva", "CorelDRAW"] },
];

export const marketingExperience: ExperienceEntry[] = [
  { title: "Sales Development Representative", company: "Prosumate", period: "September 2024 – February 2026", bullets: [
    "Planned, managed, and optimized Google Ads campaigns to drive qualified traffic and conversions.",
    "Developed conversion funnels across landing pages and campaigns, using marketing data and user behavior to improve conversion rates and ROI.",
    "Collaborated with AI and technology influencers and creators, and executed AI-assisted growth strategies for SaaS products.",
    "Aligned campaigns with product and content teams; tracked performance and tested acquisition channels including paid ads, partnerships, and influencer marketing.",
  ] },
  { title: "Upwork Specialist", company: "Upwork", period: "March 2020 – Present", bullets: [
    "Managed profile positioning and a consistent bidding strategy for software development, AI, staff augmentation, and dedicated-team opportunities.",
    "Wrote personalized proposals for startups, SaaS, fintech, healthcare, and AI-driven companies.",
    "Worked with marketing and sales teams to refine messaging, track proposal performance, and improve conversion.",
  ] },
  { title: "Digital Marketer", company: "Namenayou", period: "February 2024 – March 2024", bullets: [
    "Coordinated marketing, product, creative, and sales teams around strategic content objectives and a consistent brand voice.",
    "Managed online communities and built positive relationships with followers.",
  ] },
  { title: "Business Development Associate", company: "Omiola Construction Company", period: "March 2022 – June 2023", bullets: [
    "Conducted competitive keyword analysis for client domains and niches.",
    "Created and executed a Facebook Lead Ad campaign that generated qualified leads with a 30% conversion rate.",
    "Created content calendars aligned with brand goals and executed social media strategies.",
  ] },
  { title: "SEO Specialist", company: "Nigeria Updates", period: "December 2021 – January 2022", bullets: [
    "Delivered SEO initiatives associated with 35% growth in organic website traffic.",
    "Conducted keyword research and implemented on-page SEO strategies to improve search rankings.",
    "Used analytics and reporting insights to develop authoritative content for target audiences.",
  ] },
  { title: "Digital Marketing Specialist", company: "Lighthouse Logistics", period: "June 2020 – August 2020", bullets: [
    "Created sponsored ad campaigns, analyzed performance, and implemented optimizations achieving 40% return on investment.",
    "Collaborated across teams on data-driven marketing strategies aligned with business goals.",
  ] },
];

export const marketingEducation = {
  degree: "Higher National Diploma (HND), Statistics",
  institution: "Ibadan City Polytechnic",
  location: "Oyo State, Nigeria",
  period: "2021–2023",
};

export const marketingCertifications = [
  { name: "Digital Marketing Course", issuer: "Udemy", year: "2020" },
  { name: "Digital Marketing", issuer: "HubSpot", year: "2026" },
];

export const marketingProjects = projects
  .filter(project => ["prosumate.com", "omiola.com.ng"].includes(project.domain))
  .map((project, index) => ({
    ...project,
    number: String(index + 1).padStart(2, "0"),
    description: project.domain === "prosumate.com"
      ? "SaaS growth, Google Ads, conversion funnels, and influencer partnerships as Chief Marketing Officer."
      : "Social media strategy, content calendars, and a Facebook lead campaign with a 30% conversion rate.",
  }));
