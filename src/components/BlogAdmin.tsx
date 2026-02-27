import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Save, Eye, X, Plus, Tag, Calendar, Clock, Image as ImageIcon, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { exportBlogsToJSON } from "@/utils/blogExporter";

const BlogAdmin = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        id: "",
        title: "",
        date: new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        }),
        author: "AmniiFX Trading",
        readTime: "",
        tags: [] as string[],
        coverImage: "",
        content: "",
        excerpt: "",
        mediumUrl: ""
    });
    
    const [currentTag, setCurrentTag] = useState("");
    const [previewMode, setPreviewMode] = useState(false);
    const [saved, setSaved] = useState(false);

    const addTag = () => {
        if (currentTag.trim() && !post.tags.includes(currentTag.trim())) {
            setPost({
                ...post,
                tags: [...post.tags, currentTag.trim()]
            });
            setCurrentTag("");
        }
    };

    const removeTag = (tagToRemove: string) => {
        setPost({
            ...post,
            tags: post.tags.filter(tag => tag !== tagToRemove)
        });
    };

    const generateId = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    };

    const savePost = () => {
        const postId = post.id || generateId(post.title);
        const newPost = {
            ...post,
            id: postId,
            readTime: post.readTime || `${Math.ceil(post.content.split(' ').length / 200)} min read`
        };

        // Here you would save to your backend/localStorage
        const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '{}');
        existingPosts[postId] = newPost;
        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-5xl px-6 py-12">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Write New Blog Post</h1>
                    <div className="flex gap-3">
                        <button
                            onClick={exportBlogsToJSON}
                            className="flex items-center gap-2 px-4 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-xl transition-colors"
                            title="Export all blogs to JSON file"
                        >
                            <Download className="h-4 w-4" />
                            Export
                        </button>
                        <button
                            onClick={() => setPreviewMode(!previewMode)}
                            className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-xl transition-colors"
                        >
                            <Eye className="h-4 w-4" />
                            {previewMode ? "Edit" : "Preview"}
                        </button>
                        <button
                            onClick={savePost}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
                        >
                            <Save className="h-4 w-4" />
                            {saved ? "Saved!" : "Save Post"}
                        </button>
                        <button
                            onClick={() => navigate('/blogs')}
                            className="flex items-center gap-2 px-4 py-2 bg-destructive/10 hover:bg-destructive/20 text-destructive rounded-xl transition-colors"
                        >
                            <X className="h-4 w-4" />
                            Cancel
                        </button>
                    </div>
                </div>

                {previewMode ? (
                    // Preview Mode
                    <div className="prose prose-invert max-w-3xl mx-auto">
                        <h1>{post.title || "Untitled Post"}</h1>
                        
                        <div className="flex items-center gap-4 text-muted-foreground border-b border-border/50 pb-6 mb-6">
                            <span className="text-primary">{post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                            {post.readTime && (
                                <>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </>
                            )}
                        </div>

                        {post.tags.length > 0 && (
                            <div className="flex gap-2 mb-6">
                                {post.tags.map(tag => (
                                    <Badge key={tag} variant="secondary">#{tag}</Badge>
                                ))}
                            </div>
                        )}

                        {post.coverImage && (
                            <img 
                                src={post.coverImage} 
                                alt="Cover"
                                className="w-full rounded-xl mb-6"
                            />
                        )}

                        <div className="whitespace-pre-wrap">
                            {post.content || "No content yet..."}
                        </div>
                    </div>
                ) : (
                    // Edit Mode
                    <div className="space-y-6">
                        {/* Basic Info Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Title *</label>
                                <input
                                    type="text"
                                    value={post.title}
                                    onChange={(e) => setPost({...post, title: e.target.value})}
                                    className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="Building a High-Frequency Trading Bot..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Author</label>
                                <input
                                    type="text"
                                    value={post.author}
                                    onChange={(e) => setPost({...post, author: e.target.value})}
                                    className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 flex items-center gap-1">
                                    <Calendar className="h-4 w-4" /> Date
                                </label>
                                <input
                                    type="text"
                                    value={post.date}
                                    onChange={(e) => setPost({...post, date: e.target.value})}
                                    className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="February 27, 2026"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 flex items-center gap-1">
                                    <Clock className="h-4 w-4" /> Read Time
                                </label>
                                <input
                                    type="text"
                                    value={post.readTime}
                                    onChange={(e) => setPost({...post, readTime: e.target.value})}
                                    className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="8 min read"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 flex items-center gap-1">
                                    <ImageIcon className="h-4 w-4" /> Cover Image URL
                                </label>
                                <input
                                    type="text"
                                    value={post.coverImage}
                                    onChange={(e) => setPost({...post, coverImage: e.target.value})}
                                    className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="/hft-pro-cover.png"
                                />
                            </div>
                        </div>

                        {/* Tags */}
                        <div>
                            <label className="block text-sm font-medium mb-2 flex items-center gap-1">
                                <Tag className="h-4 w-4" /> Tags
                            </label>
                            <div className="flex gap-2 flex-wrap mb-2">
                                {post.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="text-sm py-1 px-3">
                                        #{tag}
                                        <button
                                            onClick={() => removeTag(tag)}
                                            className="ml-2 hover:text-destructive"
                                        >
                                            ×
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={currentTag}
                                    onChange={(e) => setCurrentTag(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                                    className="flex-1 px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="Add tag (e.g., HFT)"
                                />
                                <button
                                    onClick={addTag}
                                    className="px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-xl transition-colors"
                                >
                                    <Plus className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Excerpt */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Excerpt (Preview text)</label>
                            <textarea
                                value={post.excerpt}
                                onChange={(e) => setPost({...post, excerpt: e.target.value})}
                                rows={2}
                                className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                placeholder="A brief summary of your post..."
                            />
                        </div>

                        {/* Medium URL (Optional) */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Medium URL (if cross-posting)</label>
                            <input
                                type="url"
                                value={post.mediumUrl}
                                onChange={(e) => setPost({...post, mediumUrl: e.target.value})}
                                className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                placeholder="https://medium.com/@username/..."
                            />
                        </div>

                        {/* Main Content */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Content (Markdown supported)</label>
                            <textarea
                                value={post.content}
                                onChange={(e) => setPost({...post, content: e.target.value})}
                                rows={20}
                                className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary font-mono text-sm"
                                placeholder="Write your blog post here... (Markdown supported)"
                            />
                        </div>

                        {/* Quick Stats Card Generator */}
                        <div className="bg-secondary/20 border border-border/50 rounded-xl p-4">
                            <h3 className="font-semibold mb-2">Quick Stats Card Generator</h3>
                            <p className="text-sm text-muted-foreground mb-3">Generate a markdown table for your metrics</p>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <input placeholder="Win Rate" className="px-3 py-1 bg-secondary/30 rounded" />
                                <input placeholder="Profit Factor" className="px-3 py-1 bg-secondary/30 rounded" />
                                <input placeholder="Total Trades" className="px-3 py-1 bg-secondary/30 rounded" />
                                <input placeholder="Max Drawdown" className="px-3 py-1 bg-secondary/30 rounded" />
                            </div>
                            <button className="mt-3 text-xs text-primary hover:underline">
                                Generate Table
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogAdmin;