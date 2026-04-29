import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'zod';

const sourceRefSchema = z.object({
  label: z.string(),
  url: z.url(),
});

const videoSchema = z.object({
  title: z.string(),
  url: z.url(),
  embedUrl: z.url(),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        sourceRefs: z.array(sourceRefSchema).default([]),
        video: videoSchema.optional(),
        lastReviewed: z.union([z.string(), z.date()]),
      }),
    }),
  }),
};
