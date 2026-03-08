import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    iconName: z.string(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    clientName: z.string(),
    suburb: z.string(),
    quote: z.string(),
    rating: z.number().min(1).max(5).int(),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = {
  services,
  testimonials,
  portfolio,
};
