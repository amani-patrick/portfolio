import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import blogsData from "@/data/blogs.json";

const Blogs = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    
    useEffect(() => {
        // In development, merge localStorage blogs with JSON blogs
        // In production, only use JSON blogs
        if (import.meta.env.DEV) {
            const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '{}');
            const mergedPosts = { ...blogsData, ...savedPosts };
            setBlogPosts(Object.values(mergedPosts));
        } else {
            setBlogPosts(Object.values(blogsData));
        }
    }, []);
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

                <header className="mb-20">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Blogs</h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Thoughts, tutorials, and deep dives into software development,
                        forex trading algorithms, and cyber security research.
                    </p>
                </header>

                <div className="space-y-16">
                    {blogPosts.map((post) => (
                        <Link key={post.id} to={`/blogs/${post.id}`} className="block group cursor-pointer">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                                    <span>{post.date}</span>
                                    <span className="text-muted-foreground/30">•</span>
                                    <span>{post.readTime}</span>
                                    <span className="text-muted-foreground/30">•</span>
                                    <div className="flex gap-2">
                                        {post.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="px-2 py-0 text-[10px] bg-secondary/50 font-normal">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                                    {post.title}
                                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all text-muted-foreground" />
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="mt-2 text-sm font-medium border-b border-transparent group-hover:border-primary w-fit transition-all text-primary">
                                    Read article  →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <footer className="mt-32 pt-12 border-t border-border/50 text-center">
                    <p className="text-sm text-muted-foreground">
                        Want to collaborate or have questions?
                        <a href="mailto:pazzoamani@gmail.com" className="ml-1 text-foreground underline underline-offset-4">Get in touch.</a>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Blogs;