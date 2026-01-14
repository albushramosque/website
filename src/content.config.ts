import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: z.string(),
    speaker: z.string().optional(),
    description: z.string(),
    type: z.enum(['jummah', 'lecture', 'class', 'community', 'other']).default('other'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { events };
