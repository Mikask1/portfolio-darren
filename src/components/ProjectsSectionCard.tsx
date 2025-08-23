import Image from "next/image"
import { LuCode, LuExternalLink } from "react-icons/lu"
import SkillBadge from "./SkillBadge"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Project } from "./ProjectsSection"

const ProjectsSectionCard = ({ p }: { p: Project }) => {
    return (
        <Card className="group relative overflow-hidden border-border/20 p-4 shadow-lg glass-hover-scale glass-glow">
            <div className="relative aspect-video overflow-hidden rounded-md border border-border/10 bg-accent-foreground shadow-sm">
                {p.image ? (
                    <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-6 dark:invert transition-transform duration-300 group-hover:scale-105" />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                        No image
                    </div>
                )}
                <div className="pointer-events-none absolute -right-10 -top-10 size-24 rounded-full bg-accent/20 blur-2xl transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
            </div>
            <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
            {Array.isArray(p.description) ? (
                <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                    {p.description.map((line, idx) => (
                        <li key={idx}>{line}</li>
                    ))}
                </ul>
            ) : (
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            )}
            <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                    <SkillBadge key={t} skill={t} />
                ))}
            </div>
            <div className="flex gap-2">
                {p.github ? (
                    <Button asChild variant="outline" size="sm">
                        <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                            <LuCode size={16} /> Code
                        </a>
                    </Button>
                ) : null}
                {p.demo ? (
                    <Button asChild size="sm">
                        <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                            <LuExternalLink size={16} /> Live
                        </a>
                    </Button>
                ) : null}
            </div>
        </Card>
    )
}

export default ProjectsSectionCard