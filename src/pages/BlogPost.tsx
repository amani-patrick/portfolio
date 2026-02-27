import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blogContent: Record<string, any> = {
    "future-of-trading": {
        title: "The Future of Algorithmic Trading",
        date: "Feb 24, 2024",
        readTime: "6 min read",
        tags: ["Trading", "AI"],
        content: `
      <p>The landscape of algorithmic trading is undergoing a seismic shift. As we move deeper into 2024, the integration of machine learning and quantitative analysis is no longer just an advantage—it's a necessity.</p>
      
      <h3>The AI Revolution</h3>
      <p>Modern forex markets are increasingly driven by sentiment analysis and high-frequency data. AI players are now moving beyond simple moving averages and RSI crossovers. We're seeing neural networks that can process thousands of data points a second, identifying patterns that are invisible to the human eye.</p>
      
      <blockquote>"Quantitative trading isn't just about math anymore; it's about the synergy between human intuition and machine precision."</blockquote>
      
      <h3>Key Trends to Watch</h3>
      <ul>
        <li><strong>RL (Reinforcement Learning):</strong> Agents that learn and adapt to market volatility in real-time.</li>
        <li><strong>Alternative Data:</strong> Using social media sentiment and news feeds to predict price movements.</li>
        <li><strong>Low-Latency Execution:</strong> The battle for milliseconds continues to drive infrastructure innovation.</li>
      </ul>
      
      <p>As a developer specialized in MQL5 and Python, I've spent the last 5 years building EAs that attempt to capture these micro-fluctuations. The challenge remains: how do we build systems that are robust enough to handle "black swan" events while remaining aggressive enough to stay profitable?</p>
    `
    },
    "securing-web-apps": {
        title: "Securing Modern Web Applications",
        date: "Jan 15, 2024",
        readTime: "8 min read",
        tags: ["Cyber Security", "SecDevOps"],
        content: `
      <p>Web security is a moving target. With the rise of complex frontend frameworks like React and Next.js, the attack surface has shifted from simple server-side injections to more nuanced client-side vulnerabilities.</p>
      
      <h3>The Shift to the Client</h3>
      <p>Attackers are now focusing heavily on XSS (Cross-Site Scripting) and CSRF (Cross-Site Request Forgery) in ways that bypass traditional WAFs. As developers, we must treat every piece of user input as malicious and every client-side state as potentially compromised.</p>
      
      <h3>Web App Pentesting 101</h3>
      <p>During my security audits, I often find that the biggest holes aren't in the code itself, but in the logic of the application. Broken authentication and insecure direct object references (IDOR) remain the most common entry points for attackers.</p>
    `
    }
};

const BlogPost = () => {
    const { id } = useParams();
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
                    <header className="mb-12">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="h-4 w-4" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4" />
                                {post.readTime}
                            </div>
                            <div className="flex items-center gap-2 pl-2 border-l border-border">
                                {post.tags.map((tag: string) => (
                                    <Badge key={tag} variant="secondary" className="bg-secondary/50 font-normal">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                            {post.title}
                        </h1>
                    </header>

                    <div
                        className="prose prose-invert prose-lg max-w-none 
              prose-headings:font-bold prose-headings:tracking-tight
              prose-p:leading-relaxed prose-p:text-foreground/80
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-primary prose-blockquote:bg-secondary/20 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
              prose-strong:text-foreground prose-strong:font-semibold"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                <footer className="mt-32 pt-12 border-t border-border/50">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full overflow-hidden border border-border/50">
                                <img src="/ee.jpg" alt="Amani Patrick" className="h-full w-full object-cover" />
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">Amani Patrick</p>
                                <p className="text-sm text-muted-foreground">Dev & Security Researcher</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="mailto:pazzoamani@gmail.com" className="text-sm font-medium text-primary hover:underline">Subscribe</a>
                            <span className="text-muted-foreground">/</span>
                            <a href="https://github.com/amani-patrick" className="text-sm font-medium text-primary hover:underline">GitHub</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default BlogPost;
