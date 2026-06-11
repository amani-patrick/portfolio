import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Save, Eye, X, Plus, Tag, Calendar, Clock, Image as ImageIcon, Download, Trash2, PenLine } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlogMarkdown } from "@/components/BlogMarkdown";
import { exportBlogsToJSON } from "@/utils/blogExporter";
import {
    DEFAULT_AUTHOR,
    SUGGESTED_TAGS,
    type BlogPost,
} from "@/types/blog";
import {
    deletePostFromLocalStorage,
    estimateReadTime,
    generatePostId,
    getBlogStore,
    savePostToLocalStorage,
} from "@/utils/blogUtils";

const emptyPost = (): BlogPost => ({
    id: "",
    title: "",
    date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }),
    author: DEFAULT_AUTHOR,
    readTime: "",
    tags: [],
    coverImage: "",
    content: "",
    excerpt: "",
    mediumUrl: "",
});

const BlogAdmin = () => {
    const navigate = useNavigate();
    const { id: editId } = useParams<{ id: string }>();
    const isEditing = Boolean(editId);

    const [post, setPost] = useState<BlogPost>(emptyPost());
    const [currentTag, setCurrentTag] = useState("");
    const [previewMode, setPreviewMode] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState("");
    const [drafts, setDrafts] = useState<BlogPost[]>([]);

    const refreshDrafts = () => {
        const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "{}");
        setDrafts(Object.values(savedPosts));
    };

    useEffect(() => {
        refreshDrafts();

        if (editId) {
            const store = getBlogStore();
            const existing = store[editId];
            if (existing) {
                setPost(existing);
            }
        }
    }, [editId]);

    const addTag = (tag: string) => {
        const trimmed = tag.trim();
        if (trimmed && !post.tags.includes(trimmed)) {
            setPost({ ...post, tags: [...post.tags, trimmed] });
        }
        setCurrentTag("");
    };

    const removeTag = (tagToRemove: string) => {
        setPost({
            ...post,
            tags: post.tags.filter((tag) => tag !== tagToRemove),
        });
    };

    const savePost = () => {
        if (!post.title.trim()) {
            setError("Title is required.");
            return;
        }
        if (!post.excerpt.trim()) {
            setError("Excerpt is required for the listing page.");
            return;
        }
        if (!post.content.trim() && !post.mediumUrl.trim()) {
            setError("Add content or a Medium URL for external posts.");
            return;
        }

        const postId = post.id || generatePostId(post.title);
        const newPost: BlogPost = {
            ...post,
            id: postId,
            readTime: post.readTime || estimateReadTime(post.content),
        };

        savePostToLocalStorage(newPost);
        refreshDrafts();
        setError("");
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);

        if (!isEditing) {
            navigate(`/blog/edit/${postId}`, { replace: true });
        }
    };

    const handleDelete = () => {
        if (!post.id) return;
        if (!confirm(`Delete "${post.title}" from local drafts?`)) return;

        deletePostFromLocalStorage(post.id);
        refreshDrafts();
        navigate("/blog/new");
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">
                            {isEditing ? "Edit Blog Post" : "Write New Blog Post"}
                        </h1>
                        <p className="text-sm text-muted-foreground mt-1">
                            Dev-only editor — save locally, then export to update{" "}
                            <code className="text-xs bg-secondary/50 px-1.5 py-0.5 rounded">blogs.json</code>
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
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
                        {isEditing && (
                            <button
                                onClick={handleDelete}
                                className="flex items-center gap-2 px-4 py-2 bg-destructive/10 hover:bg-destructive/20 text-destructive rounded-xl transition-colors"
                            >
                                <Trash2 className="h-4 w-4" />
                                Delete
                            </button>
                        )}
                        <button
                            onClick={() => navigate("/blogs")}
                            className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-xl transition-colors"
                        >
                            <X className="h-4 w-4" />
                            Cancel
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="mb-6 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                        {error}
                    </div>
                )}

                {drafts.length > 0 && !previewMode && (
                    <div className="mb-8 rounded-xl border border-border/50 bg-secondary/10 p-4">
                        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                            <PenLine className="h-4 w-4" />
                            Local drafts
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {drafts.map((draft) => (
                                <button
                                    key={draft.id}
                                    onClick={() => navigate(`/blog/edit/${draft.id}`)}
                                    className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                                        draft.id === post.id
                                            ? "border-primary bg-primary/10 text-primary"
                                            : "border-border/50 hover:border-primary/50"
                                    }`}
                                >
                                    {draft.title || draft.id}
                                </button>
                            ))}
                            <button
                                onClick={() => {
                                    setPost(emptyPost());
                                    navigate("/blog/new");
                                }}
                                className="text-sm px-3 py-1.5 rounded-lg border border-dashed border-border/50 hover:border-primary/50 text-muted-foreground"
                            >
                                + New post
                            </button>
                        </div>
                    </div>
                )}

                {previewMode ? (
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold mb-6">{post.title || "Untitled Post"}</h1>

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
                                {post.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        #{tag}
                                    </Badge>
                                ))}
                            </div>
                        )}

                        {post.coverImage && (
                            <img
                                src={post.coverImage}
                                alt="Cover"
                                className="w-full rounded-xl mb-6 border border-border/50"
                            />
                        )}

                        {post.content ? (
                            <BlogMarkdown content={post.content} />
                        ) : (
                            <p className="text-muted-foreground italic">
                                {post.mediumUrl
                                    ? "This post will redirect to Medium when published."
                                    : "No content yet..."}
                            </p>
                        )}
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Title *</label>
                                <input
                                    type="text"
                                    value={post.title}
                                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                                    className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="How I found an auth flaw in a betting platform..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Author</label>
                                <input
                                    type="text"
                                    value={post.author}
                                    onChange={(e) => setPost({ ...post, author: e.target.value })}
                                    className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 flex items-center gap-1">
                                    <Calendar className="h-4 w-4" /> Date
                                </label>
                                <input
                                    type="text"
                                    value={post.date}
                                    onChange={(e) => setPost({ ...post, date: e.target.value })}
                                    className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="June 11, 2026"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 flex items-center gap-1">
                                    <Clock className="h-4 w-4" /> Read Time
                                </label>
                                <input
                                    type="text"
                                    value={post.readTime}
                                    onChange={(e) => setPost({ ...post, readTime: e.target.value })}
                                    className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="Auto-calculated from content"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 flex items-center gap-1">
                                    <ImageIcon className="h-4 w-4" /> Cover Image URL
                                </label>
                                <input
                                    type="text"
                                    value={post.coverImage}
                                    onChange={(e) => setPost({ ...post, coverImage: e.target.value })}
                                    className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="/cover-image.jpg"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 flex items-center gap-1">
                                <Tag className="h-4 w-4" /> Tags
                            </label>
                            <div className="flex gap-2 flex-wrap mb-3">
                                {SUGGESTED_TAGS.map((tag) => (
                                    <button
                                        key={tag}
                                        type="button"
                                        onClick={() => addTag(tag)}
                                        disabled={post.tags.includes(tag)}
                                        className="text-xs px-2.5 py-1 rounded-full border border-border/50 hover:border-primary/50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-2 flex-wrap mb-2">
                                {post.tags.map((tag) => (
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
                                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag(currentTag))}
                                    className="flex-1 px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                    placeholder="Add a custom tag"
                                />
                                <button
                                    onClick={() => addTag(currentTag)}
                                    className="px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-xl transition-colors"
                                >
                                    <Plus className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Excerpt *</label>
                            <textarea
                                value={post.excerpt}
                                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                                rows={2}
                                className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                placeholder="A brief summary shown on the blog listing..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Medium URL <span className="text-muted-foreground font-normal">(optional — for cross-posts)</span>
                            </label>
                            <input
                                type="url"
                                value={post.mediumUrl}
                                onChange={(e) => setPost({ ...post, mediumUrl: e.target.value })}
                                className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary"
                                placeholder="https://medium.com/@username/..."
                            />
                            <p className="text-xs text-muted-foreground mt-1.5">
                                Leave content empty to publish as an external link only.
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Content (Markdown)</label>
                            <textarea
                                value={post.content}
                                onChange={(e) => setPost({ ...post, content: e.target.value })}
                                rows={20}
                                className="w-full px-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:border-primary font-mono text-sm"
                                placeholder="Write your post here. Markdown is supported — headings, code blocks, tables, blockquotes..."
                            />
                        </div>

                        <div className="bg-secondary/20 border border-border/50 rounded-xl p-4">
                            <h3 className="font-semibold mb-2 text-sm">Markdown quick reference</h3>
                            <pre className="text-xs text-muted-foreground font-mono whitespace-pre-wrap">
{`## Section heading
> Blockquote for callouts

\`\`\`python
# Code block
def example():
    pass
\`\`\`

| Column | Value |
|--------|-------|
| Item   | Data  |`}
                            </pre>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogAdmin;
