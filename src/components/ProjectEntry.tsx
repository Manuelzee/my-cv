"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

interface ProjectEntryProps {
  project: Project;
}

export function ProjectEntry({ project }: ProjectEntryProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), {
    stiffness: 200,
    damping: 20,
  });
  const lift = useSpring(0, { stiffness: 200, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseEnter() {
    if (!reducedMotion) lift.set(-4);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    lift.set(0);
  }

  const initial = project.name
    .split(" ")
    .filter((word) => /^[A-Z0-9]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reducedMotion ? 0 : rotateX,
        rotateY: reducedMotion ? 0 : rotateY,
        y: reducedMotion ? 0 : lift,
        transformPerspective: 800,
      }}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group block border border-line rounded-sm p-5 bg-paper hover:shadow-lg hover:shadow-ink/5 hover:border-ink/20 transition-[box-shadow,border-color]"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-bold tracking-[0.1em] text-ink/50">
          {project.number}
        </span>
        <ArrowUpRight
          size={16}
          className="text-ink/40 group-hover:text-ink transition-colors"
          aria-hidden="true"
        />
      </div>

      <div
        className="project-preview relative mt-3 mb-4 aspect-[8/5] overflow-hidden rounded-sm border border-line bg-desk flex flex-col items-center justify-center gap-1 text-center"
      >
        {project.image && !imageFailed ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.name} website preview`}
            fill
            unoptimized
            sizes="(max-width: 639px) 100vw, 360px"
            className="object-cover object-top"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <>
        <span className="text-lg font-bold tracking-tight text-ink/25">
          {initial}
        </span>
        <span className="text-[0.7rem] text-ink/60 tracking-wide break-all">
          {project.domain}
        </span>
          </>
        )}
      </div>

      <h3 className="text-base font-bold text-ink">{project.name}</h3>
      <p className="mt-1 text-sm text-slate leading-snug">
        {project.description}
      </p>

      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ink underline underline-offset-4 decoration-line group-hover:decoration-ink transition-colors">
        Visit Live Site
      </span>
    </motion.a>
  );
}
