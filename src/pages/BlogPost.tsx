import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlogMarkdown } from "@/components/BlogMarkdown";
import { useState, useEffect } from "react";
import type { BlogPost as BlogPostType } from "@/types/blog";
import { DEFAULT_AUTHOR } from "@/types/blog";
import { getBlogPost } from "@/utils/blogUtils";

const BlogPost = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPostType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            setPost(getBlogPost(id));
        }
        setLoading(false);
    }, [id]);

    if (loading) {
        return null;
    }

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                    <Link to="/blogs" className="text-primary hover:underline">
                        Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    if (post.mediumUrl && !post.content.trim()) {
        window.location.href = post.mediumUrl;
        return null;
    }

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <div className="mx-auto max-w-3xl px-6 py-20 md:py-32">
                <Link
                    to="/blogs"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors group"
                >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Blogs
                </Link>

                <article>
                    {post.coverImage && (
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full rounded-xl mb-8 border border-border/50"
                        />
                    )}

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border/50">
                        <span className="text-primary font-medium">{post.author || DEFAULT_AUTHOR}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-secondary/50 font-normal text-sm">
                                #{tag}
                            </Badge>
                        ))}
                    </div>

                    <BlogMarkdown content={post.content} />

                    {post.mediumUrl && (
                        <p className="mt-12 text-sm text-muted-foreground border-t border-border/50 pt-8">
                            Also published on{" "}
                            <a
                                href={post.mediumUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                Medium
                            </a>
                            .
                        </p>
                    )}
                </article>

                <footer className="mt-32 pt-12 border-t border-border/50">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full overflow-hidden border border-border/50">
                                <img src="/ee.jpg" alt={DEFAULT_AUTHOR} className="h-full w-full object-cover" />
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">{DEFAULT_AUTHOR}</p>
                                <p className="text-sm text-muted-foreground">Developer & Security Researcher</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to="/" className="text-sm font-medium text-primary hover:underline">
                                Portfolio
                            </Link>
                            <span className="text-muted-foreground">/</span>
                            <a href="mailto:pazzoamani@gmail.com" className="text-sm font-medium text-primary hover:underline">
                                Contact
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default BlogPost;
