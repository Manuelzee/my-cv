import type { Metadata } from "next";
import { ResumePage } from "@/components/ResumePage";
import { marketingSite, marketingSkills, marketingExperience, marketingEducation, marketingCertifications, marketingProjects } from "@/data/marketing";

export const metadata: Metadata = {
  title: `${marketingSite.name.trim()} — Digital Marketing Specialist`,
  description: marketingSite.summary,
  keywords: ["Digital Marketing", "SEO", "Google Ads", "Meta Ads", "Lead Generation", "Kolawole Emmanuel"],
  alternates: { canonical: "/digital-marketing" },
  openGraph: {
    title: `${marketingSite.name.trim()} — Digital Marketing Specialist`,
    description: marketingSite.summary,
    url: `${marketingSite.url}/digital-marketing`,
    type: "profile",
  },
  twitter: { card: "summary", title: `${marketingSite.name.trim()} — Digital Marketing Specialist`, description: marketingSite.summary },
};

export default function DigitalMarketingPage() {
  return <ResumePage profile={marketingSite} roles={marketingExperience} skills={marketingSkills} studies={marketingEducation} certificates={marketingCertifications} portfolioProjects={marketingProjects} marketing />;
}
