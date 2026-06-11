import { ArrowLeft, ExternalLink, PenLine } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useMemo } from "react";
import type { BlogPost } from "@/types/blog";
import { getBlogPosts, isExternalPost } from "@/utils/blogUtils";

const Blogs = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [activeTag, setActiveTag] = useState<string | null>(null);

    useEffect(() => {
        setBlogPosts(getBlogPosts());
    }, []);

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
        return Array.from(tags).sort();
    }, [blogPosts]);

    const filteredPosts = useMemo(() => {
        if (!activeTag) return blogPosts;
        return blogPosts.filter((post) => post.tags.includes(activeTag));
    }, [blogPosts, activeTag]);

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <div className="mx-auto max-w-2xl px-6 py-20 md:py-32">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors group"
                >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                <header className="mb-12">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <h1 className="text-4xl font-bold tracking-tight">Blogs</h1>
                        {import.meta.env.DEV && (
                            <Link
                                to="/blog/new"
                                className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl border border-border/50 hover:border-primary/50 hover:text-primary transition-colors w-fit"
                            >
                                <PenLine className="h-4 w-4" />
                                Write post
                            </Link>
                        )}
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Notes on software development, security research, and things I&apos;m learning along the way.
                    </p>
                </header>

                {allTags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-12">
                        <button
                            onClick={() => setActiveTag(null)}
                            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                                activeTag === null
                                    ? "border-primary bg-primary/10 text-primary"
                                    : "border-border/50 hover:border-primary/50"
                            }`}
                        >
                            All
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                                    activeTag === tag
                                        ? "border-primary bg-primary/10 text-primary"
                                        : "border-border/50 hover:border-primary/50"
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                )}

                <div className="space-y-16">
                    {filteredPosts.length === 0 ? (
                        <p className="text-muted-foreground">No posts match this filter.</p>
                    ) : (
                        filteredPosts.map((post) => {
                            const external = isExternalPost(post);
                            const Wrapper = external ? "a" : Link;
                            const linkProps = external
                                ? { href: post.mediumUrl, target: "_blank", rel: "noopener noreferrer" }
                                : { to: `/blogs/${post.id}` };

                            return (
                                <Wrapper
                                    key={post.id}
                                    {...linkProps}
                                    className="block group cursor-pointer"
                                >
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                                            <span>{post.date}</span>
                                            <span className="text-muted-foreground/30">•</span>
                                            <span>{post.readTime}</span>
                                            {external && (
                                                <>
                                                    <span className="text-muted-foreground/30">•</span>
                                                    <span className="normal-case tracking-normal flex items-center gap-1">
                                                        <ExternalLink className="h-3 w-3" />
                                                        Medium
                                                    </span>
                                                </>
                                            )}
                                            <span className="text-muted-foreground/30">•</span>
                                            <div className="flex gap-2 normal-case tracking-normal">
                                                {post.tags.map((tag) => (
                                                    <Badge
                                                        key={tag}
                                                        variant="secondary"
                                                        className="px-2 py-0 text-[10px] bg-secondary/50 font-normal"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                                            {post.title}
                                            {external && (
                                                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                            )}
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                                        <div className="mt-2 text-sm font-medium border-b border-transparent group-hover:border-primary w-fit transition-all text-primary">
                                            {external ? "Read on Medium" : "Read article"} →
                                        </div>
                                    </div>
                                </Wrapper>
                            );
                        })
                    )}
                </div>

                <footer className="mt-32 pt-12 border-t border-border/50 text-center">
                    <p className="text-sm text-muted-foreground">
                        Want to collaborate or have questions?
                        <a href="mailto:pazzoamani@gmail.com" className="ml-1 text-foreground underline underline-offset-4">
                            Get in touch.
                        </a>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Blogs;
