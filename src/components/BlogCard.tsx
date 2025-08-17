"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ComponentProps } from "react";
import { Post } from "@/lib/blogData";
import { LuArrowRight, LuExternalLink } from "react-icons/lu";

interface BlogCardProps {
    p: Post;
    i: number;
}

const item = {
    hidden: {
        opacity: 0,
        y: 12,
    },
    show: {
        opacity: 1,
        y: 0,
    },
};

export default function BlogCard({ p, i }: BlogCardProps) {
    const href = p.isExternal ? p.link! : `/blogs/${p.slug}`;

    return (
        <motion.div
            variants={item}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group relative"
        >
            <Link
                href={href}
                className="block"
                {...(p.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
                <Card className="group relative overflow-hidden border-border/10 bg-card/70 p-6 shadow-lg transition-all hover:shadow-xl hover:bg-card h-full">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-semibold tracking-tight underline-ltr w-fit">{p.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground whitespace-pre-line">{p.desc}</p>
                        </div>
                        <div className="flex items-center">
                            {p.isExternal ? <LuExternalLink size={16} /> : <LuArrowRight size={16} />}
                        </div>
                    </div>
                    <div className="pointer-events-none absolute -right-14 -top-14 size-28 rounded-full bg-accent/20 blur-2xl transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
                </Card>
            </Link>
        </motion.div>
    );
}

const Card = ({ className, children }: ComponentProps<"div">) => (
    <div
        className={cn(
            "h-full w-full overflow-hidden rounded-xl border border-transparent bg-background p-6 text-card-foreground shadow-sm dark:border-white/[0.2] dark:hover:border-slate-700",
            className
        )}
    >
        {children}
    </div>
);
