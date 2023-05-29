// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const miscCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().default("JJ Quek"),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    layout: z.string(),
    title: z.string(),
    datePublished: z.string(),
    author: z.string().default("JJ Quek"),
    description: z.string(),
    tags: z.array(z.string()),
    // slug: z.string(), // for defining custom slugs
    image: z.object({ url: z.string(), alt: z.string() }).optional(),
    footnote: z.string().optional(),
    // todo : figure out why 'reference' is not exported from astro:content; can't use this code from the docs.
    // Reference an array of related posts from the `blog` collection by `slug`
    // relatedPosts: z.array(reference("blog")),
    // todo : figure out what is needed to have greater control over sorting the posts
  }),
});

// 3. Export your collections in the collections object to register your collection(s)
export const collections = {
  blog: blogCollection,
  misc: miscCollection,
};
