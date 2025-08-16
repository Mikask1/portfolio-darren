"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const POSTS = [
	{
		title: "Agentic Systems: Practical Patterns",
		desc: "Trade-offs, evaluation, and tool orchestration in production.",
		link: "#",
	},
	{
		title: "LLMOps from Zero to One",
		desc: "Telemetry, prompts, and continuous evaluation loops.",
		link: "#",
	},
	{
		title: "Animating UX with Framer Motion",
		desc: "Make apps feel alive without hurting performance.",
		link: "#",
	},
];

export default function BlogSection() {
	return (
		<section id="blog" className="relative">
			<div className="container-px mx-auto max-w-6xl py-20">
				<div className="flex items-end justify-between gap-4">
					<div>
						<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Blog</h2>
						<p className="mt-2 text-muted-foreground">Thoughts on AI systems, LLMOps, and delightful UX.</p>
					</div>
					<Link href="#" className="text-sm text-primary underline-ltr">
						View all
					</Link>
				</div>
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{POSTS.map((p, i) => (
						<motion.div
							key={p.title}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.5, delay: i * 0.05 }}
						>
							<Link href={p.link} className="block h-full">
								<Card className="group relative h-full overflow-hidden border-border/10 bg-card/70 p-5 shadow-lg transition-shadow hover:shadow-xl">
									<h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
									<p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
									<span className="mt-4 inline-flex text-sm text-primary underline-ltr w-fit">
										Read more →
									</span>
									<div className="pointer-events-none absolute -right-10 -top-10 size-24 rounded-full bg-accent/20 blur-2xl transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
								</Card>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}


