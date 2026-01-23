import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const collections = {
  projects: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "./src/content/projects",
    }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.union([z.string(), z.number()]),
      type: z.string(),
      location: z.string(),
      tags: z.array(z.string()),
      img: z.object({
        cover: z.string(),
        others: z.array(z.string()).optional(),
      }),
    }),
  }),
};
