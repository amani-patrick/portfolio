import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, ShieldCheck, Activity, Target } from "lucide-react";

interface EACardProps {
    name: string;
    desc: string;
    image?: string;
    metrics?: {
        profitFactor: string;
        recoveryFactor: string;
        lastTested: string;
        winrate?: string;
    };
    isLive?: boolean;
    onClick?: () => void;
}

export const EACard = ({ name, desc, image, metrics, isLive = false, onClick }: EACardProps) => {
    return (
        <Card
            className="overflow-hidden cursor-pointer hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500 border border-emerald-500/10 bg-secondary/20 backdrop-blur-md group hover:-translate-y-2 relative"
            onClick={onClick}
        >
            {/* Animated Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse pointer-events-none" />

            <div className="aspect-[16/10] w-full bg-muted overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />

                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out grayscale-[0.3] group-hover:grayscale-0"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-accent/20">
                        <Activity className="h-8 w-8 animate-pulse text-emerald-500/40" />
                    </div>
                )}

                {/* Status Indicator */}
                <div className="absolute top-3 left-3 z-20">
                    {isLive ? (
                        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-emerald-500/20 shadow-lg">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Live</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-muted-foreground/20 shadow-lg">
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-muted-foreground/50"></span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/70">Not Live</span>
                        </div>
                    )}
                </div>

                {/* Winrate Overlay */}
                {metrics?.winrate && (
                    <div className="absolute bottom-4 right-4 z-20">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-tighter">Win Rate</span>
                            <span className="text-2xl font-black text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
                                {metrics.winrate}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            <CardHeader className="p-5 flex flex-col gap-2 relative z-20 -mt-2">
                <div className="space-y-1">
                    <CardTitle className="text-xl font-black tracking-tight group-hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2">
                        {name}
                        <div className="h-1 w-1 rounded-full bg-emerald-500/30" />
                    </CardTitle>
                    <CardDescription className="text-xs line-clamp-2 text-muted-foreground/70 leading-relaxed font-medium">
                        {desc}
                    </CardDescription>
                </div>

                {metrics && (
                    <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/5">
                        <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-1.5 text-[9px] uppercase font-bold text-muted-foreground tracking-widest">
                                <TrendingUp className="h-2.5 w-2.5 text-emerald-500" />
                                Profit Factor
                            </div>
                            <div className="text-sm font-black text-foreground">{metrics.profitFactor}</div>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-1.5 text-[9px] uppercase font-bold text-muted-foreground tracking-widest">
                                <ShieldCheck className="h-2.5 w-2.5 text-sky-500" />
                                Recovery
                            </div>
                            <div className="text-sm font-black text-foreground">{metrics.recoveryFactor}</div>
                        </div>
                    </div>
                )}
            </CardHeader>
        </Card>
    );
};

export default EACard;
