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
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-all border-none bg-secondary/50 group"
            onClick={onClick}
        >
            <div className="aspect-video w-full bg-muted overflow-hidden">
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
            </div>
            <CardHeader className="p-4 flex flex-col gap-1">
                <CardTitle className="text-xl font-semibold leading-none">{name}</CardTitle>
                <CardDescription className="text-sm line-clamp-2 mt-1">{desc}</CardDescription>
                {tags && (
                    <div className="flex flex-wrap gap-1 mt-2">
                        {tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0 font-normal">
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
