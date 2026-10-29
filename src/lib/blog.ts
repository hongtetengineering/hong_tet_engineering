import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

// Calculate approximate reading time based on word count
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Ensure the content directory exists
function ensureContentDirectory() {
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true });
  }
}

// Get all posts sorted by date descending
export function getAllPosts(): BlogPostMeta[] {
  ensureContentDirectory();

  const fileNames = fs.readdirSync(contentDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug.replace(/-/g, " "),
        date: data.date ? String(data.date) : "Recent",
        excerpt:
          data.excerpt ||
          content.slice(0, 160).replace(/[#*`]/g, "").trim() + "...",
        category: data.category || "Engineering",
        author: data.author || "Hong Tet Engineering",
        readTime: data.readTime || calculateReadingTime(content),
        image: data.image || "/Projects/Structural Steel Framing & I-Beams.webp",
        featured: Boolean(data.featured),
      };
    });

  // Sort posts by date descending
  return posts.sort((a, b) => (new Date(b.date).getTime() || 0) - (new Date(a.date).getTime() || 0));
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  ensureContentDirectory();

  let fullPath = path.join(contentDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(contentDirectory, `${slug}.md`);
  }

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug.replace(/-/g, " "),
    date: data.date ? String(data.date) : "Recent",
    excerpt:
      data.excerpt ||
      content.slice(0, 160).replace(/[#*`]/g, "").trim() + "...",
    category: data.category || "Engineering",
    author: data.author || "Hong Tet Engineering",
    readTime: data.readTime || calculateReadingTime(content),
    image: data.image || "/Projects/Structural Steel Framing & I-Beams.webp",
    featured: Boolean(data.featured),
    content,
  };
}

// Get all unique categories
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  return categories;
}
