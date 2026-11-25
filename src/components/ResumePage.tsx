import { ResumeHeader } from "@/components/ResumeHeader";
import { SummarySection } from "@/components/SummarySection";
import { SkillsSection } from "@/components/SkillsSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectEntry } from "@/components/ProjectEntry";
import { experience } from "@/data/experience";
import { education, certifications } from "@/data/education";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";

interface ResumePageProps {
  profile?: typeof site;
  roles?: typeof experience;
  skills?: typeof skillGroups;
  studies?: typeof education;
  certificates?: typeof certifications;
  portfolioProjects?: typeof projects;
  marketing?: boolean;
}

export function ResumePage({ profile = site, roles = experience, skills = skillGroups, studies = education, certificates = certifications, portfolioProjects = projects, marketing = false }: ResumePageProps) {
  return (
    <>
      <a href="#resume" className="skip-link no-print">Skip to résumé</a>
      <main id="resume" className="print-paper paper-shadow mx-auto my-6 max-w-a4 border border-line bg-paper sm:my-12">
        <ResumeHeader profile={profile} marketing={marketing} />
        <SummarySection summary={profile.summary} />
        <SkillsSection groups={skills} />
        <section className="px-8 py-8 sm:px-12 border-b border-line" aria-label="Professional experience">
          <SectionHeading>Professional Experience</SectionHeading>
          <div className="space-y-7">
            {roles.map((entry) => (
              <article key={entry.company} className="avoid-break">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6">
                  <h3 className="font-bold text-ink">{entry.title}</h3>
                  <p className="text-xs text-slate sm:text-right sm:pt-1">{entry.period}</p>
                </div>
                <p className="mt-1 text-sm">{entry.company}</p>
                {entry.bullets.length > 0 && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                    {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>
        <section id="projects" className="scroll-mt-6 px-8 py-8 sm:px-12 border-b border-line" aria-label="Selected projects">
          <SectionHeading>{marketing ? "Selected Marketing Work" : "Selected Projects"}</SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2">
            {portfolioProjects.map((project) => <ProjectEntry key={project.number} project={project} />)}
          </div>
        </section>
        <section className="px-8 py-8 sm:px-12 border-b border-line avoid-break" aria-label="Education">
          <SectionHeading>Education</SectionHeading>
          <h3 className="font-bold text-ink">{studies.degree}</h3>
          <p className="mt-1 text-sm">{studies.institution} · {studies.location}</p>
          <p className="mt-2 text-xs">{studies.period}</p>
        </section>
        <section className="px-8 py-8 sm:px-12" aria-label="Certifications">
          <SectionHeading>Certifications</SectionHeading>
          <ul className="space-y-4">
            {certificates.map((certification) => (
              <li key={certification.name} className="avoid-break flex justify-between gap-5 text-sm">
                <div><h3 className="font-semibold text-ink">{certification.name}</h3><p className="mt-1">{certification.issuer}</p></div>
                <span className="text-xs pt-1">{certification.year}</span>
              </li>
            ))}
          </ul>
        </section>
        <footer className="no-print border-t border-line px-8 py-6 sm:px-12 text-sm">
          <a className="font-semibold text-ink underline underline-offset-4" href={`mailto:${profile.email}`}>Let’s work together ↗</a>
        </footer>
      </main>
    </>
  );
}
