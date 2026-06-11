import blogsData from "@/data/blogs.json";
import type { BlogPost, BlogStore } from "@/types/blog";

export function getBlogStore(): BlogStore {
    if (import.meta.env.DEV) {
        const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "{}");
        return { ...blogsData, ...savedPosts };
    }
    return blogsData as BlogStore;
}

export function getBlogPosts(): BlogPost[] {
    return Object.values(getBlogStore()).sort(
        (a, b) => parseBlogDate(b.date) - parseBlogDate(a.date)
    );
}

export function getBlogPost(id: string): BlogPost | null {
    return getBlogStore()[id] ?? null;
}

export function isExternalPost(post: BlogPost): boolean {
    return Boolean(post.mediumUrl) && !post.content.trim();
}

export function parseBlogDate(dateStr: string): number {
    const parsed = Date.parse(dateStr);
    return Number.isNaN(parsed) ? 0 : parsed;
}

export function generatePostId(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

export function estimateReadTime(content: string): string {
    const words = content.trim().split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export function savePostToLocalStorage(post: BlogPost): void {
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts") || "{}");
    existingPosts[post.id] = post;
    localStorage.setItem("blogPosts", JSON.stringify(existingPosts));
}

export function deletePostFromLocalStorage(id: string): void {
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts") || "{}");
    delete existingPosts[id];
    localStorage.setItem("blogPosts", JSON.stringify(existingPosts));
}
