export interface BlogPost {
    id: string;
    title: string;
    date: string;
    author: string;
    readTime: string;
    tags: string[];
    excerpt: string;
    content: string;
    mediumUrl?: string;
    coverImage?: string;
}

export type BlogStore = Record<string, BlogPost>;

export const DEFAULT_AUTHOR = "Amani Patrick";

export const SUGGESTED_TAGS = [
    "Cyber Security",
    "Ethical Hacking",
    "Bug Bounty",
    "Software Development",
    "Web Development",
    "DevOps",
    "Tutorial",
    "Research",
] as const;
