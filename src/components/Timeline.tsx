"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type TimelineItem = {
	year: number;
	image: string;
	title: string;
	subtitle: string;
	description: string;
	skills: string[];
	projects?: { name: string; link?: string }[];
};

const TIMELINE: TimelineItem[] = [
	{
		year: 2025,
		image: "/next.svg",
		title: "Senior Agentic AI Engineer",
		subtitle: "Leading AI Platforms",
		description:
			"Architected multi-agent systems with tool-use, memory, and evaluation loops. Scaled LLMOps across environments.",
		skills: ["TypeScript", "Python", "Next.js", "OpenAI", "LangGraph", "RAG"],
		projects: [
			{ name: "Autonomous Research Agent" },
			{ name: "Realtime Voice Agent" },
		],
	},
	{
		year: 2024,
		image: "/vercel.svg",
		title: "LLMOps Engineer",
		subtitle: "Production LLM Pipelines",
		description:
			"Built observability, evaluation, and prompt/version management. Delivered low-latency inference services.",
		skills: ["LLMOps", "OpenTelemetry", "Vercel AI SDK", "Postgres"],
		projects: [{ name: "Prompt Registry" }, { name: "Eval Dashboard" }],
	},
	{
		year: 2023,
		image: "/globe.svg",
		title: "Software Developer",
		subtitle: "Full-Stack Product Work",
		description:
			"Shipped features end-to-end with strong UX and performance focus. Owned monitoring and release pipelines.",
		skills: ["React", "Node.js", "Prisma", "tRPC"],
		projects: [{ name: "Design System" }, { name: "Message Broker" }],
	},
	{
		year: 2022,
		image: "/window.svg",
		title: "AI Intern",
		subtitle: "Applied ML",
		description: "Explored vector databases, embeddings, and evaluation for retrieval use-cases.",
		skills: ["Pinecone", "FAISS", "Weights & Biases"],
	},
	{
		year: 2021,
		image: "/file.svg",
		title: "Student Developer",
		subtitle: "Foundations",
		description: "Laid core CS foundations and shipped early personal projects.",
		skills: ["Algorithms", "Data Structures", "Git"],
	},
];

function useReveal() {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });
	const controls = useAnimation();
	useEffect(() => {
		if (isInView) {
			controls.start({ opacity: 1, y: 0 });
		}
	}, [isInView, controls]);
	return { ref, controls } as const;
}

export default function Timeline() {
	return (
		<section id="timeline" className="relative">
			<div className="container-px mx-auto max-w-4xl py-20">
				<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Experience</h2>
				<p className="mt-2 text-muted-foreground">
					Interactive vertical timeline with animations as items come into view.
				</p>
				<div className="relative mt-10">
					<div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
					<div className="flex flex-col gap-8">
						{TIMELINE.map((item) => (
							<TimelineRow key={item.year} item={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function TimelineRow({ item }: { item: TimelineItem }) {
	const { ref, controls } = useReveal();
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 24 }}
			animate={controls}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="relative pl-10 sm:pl-12"
		>
			<div className="absolute left-5 top-2 size-4 -translate-x-1/2 rounded-full border-2 border-background bg-accent shadow-[0_0_0_3px_var(--color-background)]" />
			<Card className="border-border/10 bg-card/50 p-5 shadow-xl backdrop-blur-sm">
				<div className="flex items-start gap-4">
					<div className="relative aspect-square w-16 shrink-0 overflow-hidden rounded-lg border border-border/10 bg-muted shadow-md">
						<Image src={item.image} alt="logo" fill className="object-contain p-2" />
					</div>
					<div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<span className="font-semibold text-foreground">{item.year}</span>
							<span>•</span>
							<span>{item.subtitle}</span>
						</div>
						<h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
						<p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
						<div className="mt-3 flex flex-wrap gap-1.5">
							{item.skills.map((s) => (
								<Badge key={s} variant="secondary" className="border border-border/10">
									{s}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</Card>
		</motion.div>
	);
}


