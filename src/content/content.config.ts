import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.union([z.string(), z.number()]),
    type: z.string(),
    location: z.string(),
    tags: z.array(z.string()),
    img: z.object({
      cover: z.string(),
      others: z.array(z.string()).optional()
    })
  })
});

export const collections = { projects };