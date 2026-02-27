import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, ShieldCheck } from "lucide-react";

interface EACardProps {
    name: string;
    desc: string;
    image?: string;
    metrics?: {
        profitFactor: string;
        recoveryFactor: string;
        lastTested: string;
    };
    onClick?: () => void;
}

export const EACard = ({ name, desc, image, metrics, onClick }: EACardProps) => {
    return (
        <Card
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-all border-none bg-secondary/50 group"
            onClick={onClick}
        >
            <div className="aspect-video w-full bg-muted overflow-hidden relative">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-accent/20">
                        No Image
                    </div>
                )}
                <div className="absolute top-2 right-2 flex gap-1">
                    <Badge className="bg-green-500/80 hover:bg-green-500 text-white border-none text-[10px]">Active</Badge>
                </div>
            </div>
            <CardHeader className="p-4 flex flex-col gap-1">
                <CardTitle className="text-xl font-semibold leading-none">{name}</CardTitle>
                <CardDescription className="text-sm line-clamp-2 mt-1">{desc}</CardDescription>

                {metrics && (
                    <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-border/50">
                        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <TrendingUp className="h-3 w-3 text-green-500" />
                            <span>PF: {metrics.profitFactor}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <ShieldCheck className="h-3 w-3 text-blue-500" />
                            <span>RF: {metrics.recoveryFactor}</span>
                        </div>
                    </div>
                )}
            </CardHeader>
        </Card>
    );
};

export default EACard;
