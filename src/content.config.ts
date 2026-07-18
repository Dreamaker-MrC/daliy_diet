import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each recipe is a single .md file under src/content/recipes/<category>/*.md.
// Add or remove a file to add or remove a recipe — no code changes needed.
const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['breakfast', 'meal', 'snack']),
    calories: z.number(),
    protein: z.number(),
    tools: z.array(z.string()).default([]),
    ingredients: z.array(z.string()).default([]),
  }),
});

export const collections = { recipes };
