import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
    name: string;
    desc: string;
    image?: string;
    tags?: string[];
    onClick?: () => void;
}

export const ProjectCard = ({ name, desc, image, tags, onClick }: ProjectCardProps) => {
    return (
        <Card
            className="overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border border-border/20 bg-secondary/30 backdrop-blur-sm group hover:-translate-y-1"
            onClick={onClick}
        >
            <div className="aspect-[16/10] w-full bg-muted overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-accent/20">
                        No Image
                    </div>
                )}
            </div>
            <CardHeader className="p-5 flex flex-col gap-1.5 relative z-20">
                <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">{name}</CardTitle>
                <CardDescription className="text-sm line-clamp-2 text-muted-foreground/80 leading-relaxed">{desc}</CardDescription>
                {tags && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                        {tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0.5 font-medium bg-background/50 backdrop-blur-md border border-border/10">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardHeader>
        </Card>
    );
};

export default ProjectCard;
