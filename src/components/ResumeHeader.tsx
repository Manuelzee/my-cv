"use client";

import { motion } from "framer-motion";
import { Mail, Github, MapPin, Download, ArrowDown } from "lucide-react";
import { site, type SiteProfile } from "@/data/site";
import Link from "next/link";

export function ResumeHeader({ profile = site, marketing = false }: { profile?: SiteProfile; marketing?: boolean }) {
  return (
    <header className="px-8 sm:px-12 pt-12 sm:pt-16 pb-8 border-b border-line">
      <nav aria-label="Portfolio specialization" className="no-print mb-8 flex flex-wrap gap-2 text-xs font-semibold">
        <Link href="/" aria-current={!marketing ? "page" : undefined} className={`rounded-sm border px-3 py-2 ${!marketing ? "bg-ink text-white border-ink" : "border-line text-ink hover:bg-desk"}`}>Web Development</Link>
        <Link href="/digital-marketing" aria-current={marketing ? "page" : undefined} className={`rounded-sm border px-3 py-2 ${marketing ? "bg-ink text-white border-ink" : "border-line text-ink hover:bg-desk"}`}>Digital Marketing</Link>
      </nav>
      <motion.h1
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-2xl sm:text-4xl font-bold tracking-tight text-ink"
      >
        {profile.name.trim().toUpperCase()}
      </motion.h1>

      <motion.p
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mt-1 text-sm sm:text-base font-semibold uppercase tracking-[0.12em] text-slate"
      >
        {profile.title}
      </motion.p>

      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate"
      >
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={14} className="text-ink/60" aria-hidden="true" />
          {profile.location}
        </span>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
        >
          <Mail size={14} className="text-ink/60" aria-hidden="true" />
          {profile.email}
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
        >
          <Github size={14} className="text-ink/60" aria-hidden="true" />
          {site.githubLabel}
        </a>
      </motion.div>

      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="no-print mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-1.5 font-semibold text-ink underline underline-offset-4 decoration-line hover:decoration-ink transition-colors"
        >
          {marketing ? "View Marketing Work" : "View My Projects"}
          <ArrowDown size={14} aria-hidden="true" />
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 font-semibold text-ink underline underline-offset-4 decoration-line hover:decoration-ink transition-colors"
        >
          Print / Save CV
          <Download size={14} aria-hidden="true" />
        </button>
        {marketing && profile.resumePdf && (
          <a href={profile.resumePdf} download className="inline-flex items-center gap-1.5 font-semibold text-ink underline underline-offset-4 decoration-line hover:decoration-ink">
            Download CV <Download size={14} aria-hidden="true" />
          </a>
        )}
      </motion.div>
    </header>
  );
}
