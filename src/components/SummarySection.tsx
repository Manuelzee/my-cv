import { SectionHeading } from "./SectionHeading";
import { site } from "@/data/site";

export function SummarySection({ summary = site.summary }: { summary?: string }) {
  return (
    <section className="px-8 sm:px-12 py-8 border-b border-line">
      <SectionHeading>Professional Summary</SectionHeading>
      <p className="text-[0.95rem] leading-relaxed text-slate max-w-[640px]">
        {summary}
      </p>
    </section>
  );
}
