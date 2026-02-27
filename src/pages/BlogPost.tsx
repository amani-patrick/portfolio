import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';
import { ReactNode } from 'react';

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

const blogContent: BlogContent = {
    "betting-addiction-to-ethical-hacking": {
        title: "From Betting Addiction to Ethical Hacking: How I Discovered a Security Loophole in a Popular Betting Platform",
        date: "Apr 17, 2025",
        readTime: "3 min read",
        tags: ["Cyber Security", "Ethical Hacking", "Bug Bounty"],
        mediumUrl: "https://medium.com/@pazzoamani/from-betting-addiction-to-ethical-hacking-how-i-discovered-a-security-loophole-in-a-popular-159720067f1d",
        content: ""
    },
    "hft-pro-us30": {
        title: "Building a High-Frequency Trading Bot for US30: My Journey to 94% Win Rate",
        date: "February 27, 2026",
        author: "AmniiFX Trading",
        readTime: "8 min read",
        tags: ["HFT", "US30", "Algorithmic Trading", "MQL5", "Forex"],
        content: `# Building a High-Frequency Trading Bot for US30: My Journey to 94% Win Rate

*By AmniiFX Trading • February 27, 2026 • 8 min read*

## The Beginning

Every trader dreams of finding that "edge" – that one strategy that consistently extracts profit from the markets. For me, that journey led me to build **HFT Pro**, a high-frequency trading Expert Advisor specifically optimized for the US30 (Dow Jones Industrial Average).

After months of development, countless backtests, and relentless optimization, I'm excited to share the results: a **94.26% win rate** with a profit factor of **35.75** during February 2026.

But let's be real – these numbers aren't magic. They're the result of understanding market microstructure and building a system that exploits specific inefficiencies.

## Performance Metrics

>**Win Rate:** 94.26%  
 **Profit Factor:** 35.75  
 **Total Trades:** 5,070  
 **Total Profit:** $6,089 (from $1,000 starting)  
 **Max Drawdown:** 0.20%  
 **Average Win:** 1.20 points  
 **Average Loss:** -0.60 points  

5,070 trades in one month – that's about **169 trades per trading day**. This is true high-frequency trading, executing multiple times per minute during optimal sessions.


## The Strategy: How It Works

HFT Pro isn't your typical trend-following or grid trading bot. It's a micro-structure exploitation system that operates on a simple principle:

> **US30 tends to micro-overshoot by 0.5-2 points and reverse within 7 points**

Here's the logic breakdown:

\`\`\`cpp
// The Core Parameters
Delta = 0.5;        // Place orders 0.5 points from current price
MaxDistance = 7;    // Don't chase beyond 7 points
Stop = 10;          // Hard stop at 10 points
MaxTrailing = 4;    // Start trailing at 4 points profit
\`\`\`

The bot places buy stops 0.5 points above ask and sell stops 0.5 points below bid. When US30 makes those tiny micro-moves, the bot catches them. Then, with a tight trailing stop, it locks in profits as the market reverses.

## Why US30?

US30 has unique characteristics that make it perfect for this strategy:

- **5-digit pricing** – Allows for precise 0.5 point entries
- **Tight spreads** – Usually 1-3 points during NY session
- **Mean reversion tendency** – Micro-moves often reverse quickly
- **High liquidity** – Orders fill fast with minimal slippage

The bot only trades during **14:00-21:00 GMT** (New York session), when liquidity is highest and spreads are tightest.

## Risk Management Philosophy

With 94% win rate, you might think risk management is unnecessary. Wrong. The 6% of losing trades could wipe out weeks of profits if not controlled.

HFT Pro incorporates:

- **Hard 10-point stops** on every trade
- **Dynamic trailing** starting at 4 points profit
- **Spread filtering** – No trading if spreads exceed 5 points
- **Session-only trading** – No overnight exposure
- **News filter integration** – Steps aside during high-impact events

The result? Maximum drawdown of just **0.20%**. The equity curve is almost a straight line up.

## The Technology Stack

Built on MQL5, HFT Pro uses:

- Real-time spread monitoring with EMA smoothing
- Dynamic order distance adjustment based on market conditions
- Commission-per-pip calculation for accurate profitability
- Multi-level trailing stop logic
- Broker compatibility checks (stop level, freeze level)

\`\`\`cpp
// Key innovation: Adaptive order placement
AdjustedOrderDistance = MathMax(AverageSpread * Delta, MinStopDistance);
TrailingStopActive = AverageSpread * MaxTrailing;
\`\`\`

The bot constantly adjusts to current market conditions, widening parameters during volatile periods and tightening during calm markets.

## Challenges Overcome

Building a high-frequency bot isn't easy. I faced:

- **Broker limitations** – Many brokers have minimum stop distances that prevent tight entries
- **Spread spikes** – Solved with dynamic spread averaging
- **Order rejection** – Mitigated by trading only during high-liquidity hours
- **Commission impact** – Built into every calculation to ensure true profitability

## Realistic Expectations

If you're thinking "94% win rate – I'm in!", here's the reality check:

- **Backtest vs Live:** Expect 80-85% of backtest performance live
- **Broker matters:** ECN brokers with low latency are essential
- **VPS required:** You need <5ms latency to your broker
- **Capital needed:** Start small (0.01 lots) to test broker reaction

I've seen bots like this get broker-restricted when they become too profitable. Smart traders have backup brokers ready.

---

## Risk Disclaimer

> ⚠️ **Trading involves substantial risk. Past performance does not guarantee future results. The 94% win rate shown is from backtested data and may not be achievable in live trading. Always test on demo first, start small, and never trade money you cannot afford to lose.**

## What's Next?

HFT Pro is just the beginning. I'm currently developing:

- **NAS100 version** – Adapted for the more volatile Nasdaq
- **Gold (XAUUSD) variant** – Wider parameters for the volatile metal
- **Multi-pair deployment** – Running simultaneously on uncorrelated instruments
- **Machine learning enhancement** – Using neural networks to predict optimal entry timing

## Want to Learn More?

HFT Pro is available for rental on MQL5 Marketplace and for purchase with lifetime updates. I also offer:

- **Premium signals** – Copy my trades in real-time
- **Mentorship** – Learn to build your own EAs
- **Custom development** – Turn YOUR strategy into an automated bot

Contact me for details or join my Telegram community for free market insights.`
    }
};

const BlogPost = () => {
    const { id } = useParams<{ id: string }>();
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