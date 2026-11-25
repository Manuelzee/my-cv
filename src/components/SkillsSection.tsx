import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "@/data/skills";

export function SkillsSection({ groups = skillGroups }: { groups?: typeof skillGroups }) {
  return (
    <section className="px-8 sm:px-12 py-8 border-b border-line">
      <SectionHeading>Core Skills</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
        {groups.map((group) => (
          <div key={group.heading}>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-ink mb-2">
              {group.heading}
            </h3>
            <p className="text-sm leading-relaxed text-slate">
              {group.items.join("  ·  ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
