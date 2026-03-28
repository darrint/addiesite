import { defineCollection, z } from 'astro:content';

const artwork = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    alt: z.string(),
    order: z.number().default(50),
  }),
});

export const collections = { artwork };
