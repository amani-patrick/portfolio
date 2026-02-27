import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, ShieldCheck, Calendar, Activity } from "lucide-react";

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
        };
        details?: string;
    } | null;
}

export const DetailModal = ({ isOpen, onClose, data }: DetailModalProps) => {
    if (!data) return null;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 border-none bg-background shadow-2xl">
                <div className="aspect-video w-full bg-muted overflow-hidden">
                    {data.image ? (
                        <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-accent/20">
                            {data.metrics ? "Backtest Results Image" : "Project Preview Image"}
                        </div>
                    )}
                </div>

                <div className="p-8">
                    <DialogHeader className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="rounded-full px-3">{data.category || "EA"}</Badge>
                            {data.tags?.map(tag => (
                                <Badge key={tag} className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full px-3">{tag}</Badge>
                            ))}
                        </div>
                        <DialogTitle className="text-3xl font-bold">{data.name}</DialogTitle>
                        <DialogDescription className="text-lg text-muted-foreground mt-2 leading-relaxed">
                            {data.desc}
                        </DialogDescription>
                    </DialogHeader>

                    {data.metrics && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-secondary/30 p-6 rounded-2xl">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                                    <TrendingUp className="h-3.5 w-3.5 text-green-500" />
                                    Profit Factor
                                </div>
                                <div className="text-xl font-bold">{data.metrics.profitFactor}</div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                                    <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
                                    Recovery Factor
                                </div>
                                <div className="text-xl font-bold">{data.metrics.recoveryFactor}</div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                                    <Clock className="h-3.5 w-3.5 text-amber-500" />
                                    Tested Period
                                </div>
                                <div className="text-xl font-bold">{data.metrics.testedPeriod}</div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                                    <Calendar className="h-3.5 w-3.5 text-purple-500" />
                                    Last Tested
                                </div>
                                <div className="text-xl font-bold">{data.metrics.lastTested}</div>
                            </div>
                        </div>
                    )}

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                            <Activity className="h-4 w-4" />
                            Overview
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                            {data.details || "More detailed information about the project or strategy performance will be added here. This section covers the technical implementation, challenges faced, and the core logic behind the solution."}
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DetailModal;
