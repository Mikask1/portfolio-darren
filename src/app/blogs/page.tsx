"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const POSTS = [
	{
		slug: "agentic-systems-practical-patterns",
		title: "Agentic Systems: Practical Patterns",
		desc: "Trade-offs, evaluation, and tool orchestration in production.",
	},
	{ slug: "llmops-from-zero-to-one", title: "LLMOps from Zero to One", desc: "Telemetry, prompts, and continuous evaluation loops." },
	{ slug: "animating-ux-with-framer-motion", title: "Animating UX with Framer Motion", desc: "Make apps feel alive without hurting performance." },
];

export default function BlogsPage() {
	return (
		<main className="container-px mx-auto max-w-3xl py-16">
			<h1 className="text-3xl font-bold">Blog</h1>
			<p className="mt-2 text-muted-foreground">Notes on AI, agents, LLMOps, and engineering craft.</p>
			<div className="mt-8 space-y-4">
				{POSTS.map((p, i) => (
					<motion.div
						key={p.slug}
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.45, delay: i * 0.05 }}
					>
						<Link href={`/blogs/${p.slug}`} className="block">
							<Card className="group relative overflow-hidden border-border/10 bg-card/70 p-6 shadow-lg transition-all hover:shadow-xl">
								<div className="flex items-start justify-between gap-4">
									<div>
										<h3 className="text-xl font-semibold tracking-tight underline-ltr">{p.title}</h3>
										<p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
									</div>
									<span className="text-primary opacity-80 group-hover:opacity-100">→</span>
								</div>
								<div className="pointer-events-none absolute -right-14 -top-14 size-28 rounded-full bg-accent/20 blur-2xl transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
							</Card>
						</Link>
					</motion.div>
				))}
			</div>
		</main>
	);
}


