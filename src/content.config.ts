import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const episodeCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/episodes" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      episodeNumber: z.number(),
      guest: z.union([z.string(), z.array(z.string())]),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      duration: z.string(),
      imgUrl: image(),
      tags: z.array(z.string()),
      youtubeUrl: z.string().optional(),
      spotifyUrl: z.string().optional(),
      youtubeShorts: z.array(z.string()).optional(),
      igReels: z.array(z.string()).optional(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
  episodes: episodeCollection,
};
