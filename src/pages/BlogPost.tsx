import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';
import { useState, useEffect } from 'react';
import blogsData from "@/data/blogs.json";

interface BlogPostData {
    title: string;
    date: string;
    author?: string;
    readTime: string;
    tags: string[];
    coverImage?: string;
    content: string;
    mediumUrl?: string;
}

interface BlogContent {
    [key: string]: BlogPostData;
}

const BlogPost = () => {
    const { id } = useParams<{ id: string }>();
    const [blogContent, setBlogContent] = useState<BlogContent>(blogsData);
    
    useEffect(() => {
        // In development, merge localStorage blogs with JSON blogs
        if (import.meta.env.DEV) {
            const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '{}');
            setBlogContent({ ...blogsData, ...savedPosts });
        }
    }, []);
    
    const post = id ? blogContent[id] : null;

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                    <Link to="/blogs" className="text-primary hover:underline">Back to Blogs</Link>
                </div>
            </div>
        );
    }

    if (post.mediumUrl) {
        window.location.href = post.mediumUrl;
        return null;
    }

    const markdownComponents: Components = {
        h1: ({ children }) => <h1 className="text-4xl font-bold mt-12 mb-6">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-4">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-3">{children}</h3>,
        p: ({ children }) => <p className="text-foreground/80 leading-relaxed mb-6">{children}</p>,
        ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
        li: ({ children }) => <li className="text-foreground/80">{children}</li>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-l-primary bg-secondary/20 py-4 px-6 rounded-r-xl italic text-foreground/90 my-6">
                {children}
            </blockquote>
        ),
        code: ({ className, children }) => {
            const match = /language-(\w+)/.exec(className || '');
            const isInline = !match;
            
            if (isInline) {
                return <code className="bg-secondary/50 px-1.5 py-0.5 rounded text-sm">{children}</code>;
            }
            
            return (
                <pre className="bg-secondary/80 border border-border/50 rounded-xl p-4 overflow-x-auto my-6">
                    <code className={className}>{children}</code>
                </pre>
            );
        },
        table: ({ children }) => (
            <div className="bg-secondary/20 border border-border/50 rounded-xl p-4 my-6 overflow-x-auto">
                <table className="w-full">{children}</table>
            </div>
        ),
        th: ({ children }) => <th className="text-left font-semibold p-2 border-b border-border/50">{children}</th>,
        td: ({ children }) => <td className="p-2 border-b border-border/50">{children}</td>,
        hr: () => <hr className="border-border/50 my-12" />,
    };

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
                        <div className="flex items-center gap-2">
                            <span className="text-primary font-medium">{post.author || "AmniiFX Trading"}</span>
                        </div>
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
                        {post.tags.map((tag: string) => (
                            <Badge key={tag} variant="secondary" className="bg-secondary/50 font-normal text-sm">
                                #{tag}
                            </Badge>
                        ))}
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <ReactMarkdown components={markdownComponents}>
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </article>

                <footer className="mt-32 pt-12 border-t border-border/50">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full overflow-hidden border border-border/50">
                                <img src="/ee.jpg" alt="AmniiFX Trading" className="h-full w-full object-cover" />
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">AmniiFX Trading</p>
                                <p className="text-sm text-muted-foreground">MQL5 Developer & HFT Specialist</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to="/" className="text-sm font-medium text-primary hover:underline">Portfolio</Link>
                            <span className="text-muted-foreground">/</span>
                            <a href="mailto:pazzoamani@gmail.com" className="text-sm font-medium text-primary hover:underline">Contact</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default BlogPost;