import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { LuExternalLink, LuArrowRight } from "react-icons/lu";
import { Post } from "@/lib/blogData";
import Link from "next/link";

export const BlogCard = ({ p }: { p: Post }) => {
    const href = p.isExternal ? p.link! : `/blogs/${p.slug}`;
    return (
        <Link
            href={href}
            className="block"
            {...(p.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            <Card className="group relative overflow-hidden border-border/10 bg-card/70 p-6 shadow-lg transition-all hover:shadow-xl hover:bg-card h-full">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold tracking-tight underline-ltr w-fit">{p.title}</h3>
                        <p className="mt-1 text-xs sm:text-sm text-muted-foreground whitespace-pre-line">{p.desc}</p>
                    </div>
                    <div className="flex items-center">
                        {p.isExternal ? <LuExternalLink size={16} /> : <LuArrowRight size={16} />}
                    </div>
                </div>
                <div className="pointer-events-none absolute -right-14 -top-14 size-28 rounded-full bg-accent/20 blur-2xl transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
            </Card>
        </Link >
    )
}


const Card = ({ className, children }: ComponentProps<"div">) => (
    <div
        className={cn(
            "h-full w-full overflow-hidden rounded-xl border border-transparent p-6 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg",
            // Enhanced frosted glass effect with better hover states
            "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20",
            "dark:from-white/5 dark:to-white/2 dark:border-white/10",
            "hover:from-white/15 hover:to-white/8 hover:border-white/30 hover:backdrop-blur-md",
            "dark:hover:from-white/8 dark:hover:to-white/3 dark:hover:border-white/15",
            // Add subtle texture overlay
            "relative before:absolute before:inset-0 before:pointer-events-none before:opacity-30 before:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] before:bg-[length:20px_20px]",
            "dark:before:opacity-20 dark:before:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)]",
            className
        )}
    >
        <div className="relative z-10">
            {children}
        </div>
    </div>
);

export default BlogCard