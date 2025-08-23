import SkillBadge from "./SkillBadge";
import { TimelineItem } from "./Timeline";
import { Card } from "./ui/card";
import Image from "next/image";

export default function TimelineCard({ item }: { item: TimelineItem }) {
    return (
        <Card className="border-border/10 bg-card/50 p-5 shadow-xl backdrop-blur-sm">
            {/* Mobile Layout */}
            <div className="sm:hidden">
                <div className="flex items-center gap-3 mb-3">
                    <div className="relative aspect-square w-12 shrink-0 overflow-hidden border border-border/10 bg-white rounded-full shadow-md">
                        <Image src={item.image} alt="logo" fill sizes="(min-width: 640px) 64px, 48px" className="object-contain p-2" />
                    </div>
                    <span className="font-semibold text-foreground">{item.subtitle}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-3">{item.year}</div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                {item.bullets ? (
                    <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground mb-3">
                        {item.bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                )}
                <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((s) => (
                        <SkillBadge key={s} skill={s} />
                    ))}
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex items-start gap-4">
                <div className="relative aspect-square w-16 shrink-0 overflow-hidden border border-border/10 bg-white rounded-full shadow-md">
                    <Image src={item.image} alt="logo" fill sizes="(min-width: 640px) 64px, 48px" className="object-contain p-2" />
                </div>
                <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">{item.subtitle}</span>
                        <span>•</span>
                        <span>{item.year}</span>
                    </div>
                    <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                    {item.bullets ? (
                        <ul className="mt-2 ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                            {item.bullets.map((bullet, idx) => (
                                <li key={idx}>{bullet}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    )}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.skills.map((s) => (
                            <SkillBadge key={s} skill={s} />
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    )
}
