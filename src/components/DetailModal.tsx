import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, ShieldCheck, Calendar, Activity, Target } from "lucide-react";

interface DetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        name: string;
        desc: string;
        image?: string;
        category?: string;
        tags?: string[];
        metrics?: {
            profitFactor: string;
            recoveryFactor: string;
            lastTested: string;
            testedPeriod: string;
            winrate?: string;
        };
        details?: string;
    } | null;
}

export const DetailModal = ({ isOpen, onClose, data }: DetailModalProps) => {
    if (!data) return null;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border border-emerald-500/10 bg-background/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[2rem] no-scrollbar">
                <div className="relative w-full overflow-hidden bg-muted group/modal">
                    {/* Innovative Geometric Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover/modal:bg-emerald-500/10 transition-colors duration-1000" />

                    <div className="aspect-[16/10] sm:aspect-video w-full overflow-hidden bg-black/40 relative">
                        {data.image ? (
                            <img
                                src={data.image}
                                alt={data.name}
                                className="w-full h-full object-cover sm:object-contain transition-all duration-700 hover:scale-[1.02]"
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground bg-accent/20 gap-4">
                                <Activity className="h-12 w-12 animate-pulse text-emerald-500/20" />
                                <span className="text-xs font-bold tracking-widest uppercase opacity-40">{data.metrics ? "Financial Algorithms" : "Project Infrastructure"}</span>
                            </div>
                        )}
                        {/* Interactive Scanline Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-[10%] w-full animate-scanline pointer-events-none opacity-20" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
                </div>

                <div className="relative z-20 -mt-24 px-6 pb-12 sm:px-12">
                    <div className="bg-background/60 backdrop-blur-xl border border-white/5 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                        {/* Sublte Inner Glow */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-50" />

                        <DialogHeader className="mb-10 items-start text-left">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                    <Badge variant="outline" className="border-none p-0 text-emerald-400 uppercase tracking-widest text-[9px] font-black">
                                        {data.category || "Expert Advisor"}
                                    </Badge>
                                </div>
                                {data.tags?.map(tag => (
                                    <Badge key={tag} className="bg-secondary/40 text-secondary-foreground/80 hover:bg-secondary rounded-full px-4 py-1 text-[10px] font-bold border border-white/5 backdrop-blur-md">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <DialogTitle className="text-4xl sm:text-5xl font-black tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                                {data.name}
                            </DialogTitle>
                            <DialogDescription className="text-lg sm:text-xl text-muted-foreground/90 leading-relaxed font-medium">
                                {data.desc}
                            </DialogDescription>
                        </DialogHeader>

                        {data.metrics && (
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 bg-white/[0.02] backdrop-blur-sm p-8 rounded-[2rem] border border-white/5 relative group/metrics">
                                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/metrics:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

                                <div className="relative space-y-2">
                                    <div className="flex items-center gap-2 text-muted-foreground text-[9px] uppercase tracking-[0.3em] font-black opacity-60">
                                        <TrendingUp className="h-3 w-3 text-emerald-500" />
                                        Profit
                                    </div>
                                    <div className="text-3xl font-black tracking-tighter text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">{data.metrics.profitFactor}</div>
                                </div>
                                <div className="relative space-y-2">
                                    <div className="flex items-center gap-2 text-muted-foreground text-[9px] uppercase tracking-[0.3em] font-black opacity-60">
                                        <ShieldCheck className="h-3 w-3 text-sky-500" />
                                        Recovery
                                    </div>
                                    <div className="text-3xl font-black tracking-tighter text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">{data.metrics.recoveryFactor}</div>
                                </div>
                                <div className="relative space-y-2">
                                    <div className="flex items-center gap-2 text-muted-foreground text-[9px] uppercase tracking-[0.3em] font-black opacity-60">
                                        <Target className="h-3 w-3 text-amber-500" />
                                        Win Rate
                                    </div>
                                    <div className="text-3xl font-black tracking-tighter text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">{data.metrics.winrate || "0%"}</div>
                                </div>
                                <div className="relative space-y-2">
                                    <div className="flex items-center gap-2 text-muted-foreground text-[9px] uppercase tracking-[0.3em] font-black opacity-60">
                                        <Calendar className="h-3 w-3 text-indigo-400" />
                                        Period
                                    </div>
                                    <div className="text-3xl font-black tracking-tighter text-indigo-400 drop-shadow-[0_0_10px_rgba(129,140,248,0.3)]">{data.metrics.testedPeriod}</div>
                                </div>
                            </div>
                        )}

                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-1 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                                <h4 className="text-sm font-black uppercase tracking-[0.4em] text-muted-foreground/60">Technical Analysis</h4>
                            </div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-muted-foreground/80 leading-relaxed text-base sm:text-lg font-medium italic">
                                    "{data.details || "This implementation represents a fusion of high-performance architecture and strategic innovation. By leveraging advanced data structures and optimized execution pipelines, the system achieves a new standard for reliability and efficiency in complex environments."}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DetailModal;
