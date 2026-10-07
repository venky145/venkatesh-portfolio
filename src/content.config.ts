import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/projects",
    retainBody: true,
  }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(["professional", "personal"]),
    status: z.enum(["released", "in-development"]).optional(),
    summary: z.string(),
    tagline: z.string().optional(),
    context: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    timeframe: z.string().optional(),
    image: z.string().optional(),
    imageFit: z.enum(["cover", "contain"]).default("cover"),
    logos: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        }),
      )
      .default([]),
    screenshots: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        }),
      )
      .default([]),
    frame: z.enum(["phone", "screen"]).default("screen"),
    order: z.number().default(0),
    featured: z.boolean().default(true),
    caseStudy: z.boolean().default(false),
    workedOn: z.array(z.string()).optional(),
    challenges: z.array(z.string()).optional(),
    impact: z.array(z.string()).optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
        }),
      )
      .optional(),
  }),
});

export const collections = { projects };
