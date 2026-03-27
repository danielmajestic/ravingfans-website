import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  title: string;
  subtitle: string;
  slug: string;
  date: string;
  author: string;
  authorBio: string;
  excerpt: string;
  coverImage: string;
  readTime: string;
  published: boolean;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return data as PostMeta;
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getAllSlugs(): string[] {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
  return files.map((f) => {
    const fileContents = fs.readFileSync(path.join(postsDirectory, f), "utf8");
    const { data } = matter(fileContents);
    return data.slug;
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  for (const filename of files) {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    if (data.slug === slug) {
      const processed = await remark().use(html, { sanitize: false }).process(content);
      return {
        ...(data as PostMeta),
        contentHtml: processed.toString(),
      };
    }
  }

  return null;
}
