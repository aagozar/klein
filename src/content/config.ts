import { defineCollection, z } from 'astro:content';

const entrySchema = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.date().optional(),
});

const pensieri = defineCollection({
  type: 'content',
  schema: entrySchema,
});

const vita = defineCollection({
  type: 'content',
  schema: entrySchema,
});

export const collections = { pensieri, vita };
