import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

export const markdownComponents: Components = {
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
        const match = /language-(\w+)/.exec(className || "");
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

interface BlogMarkdownProps {
    content: string;
    className?: string;
}

export function BlogMarkdown({ content, className = "prose prose-invert prose-lg max-w-none" }: BlogMarkdownProps) {
    return (
        <div className={className}>
            <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
        </div>
    );
}
