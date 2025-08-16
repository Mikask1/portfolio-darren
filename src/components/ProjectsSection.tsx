"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LuExternalLink, LuGithub } from "react-icons/lu";

type Project = {
	title: string;
	description: string;
	tags: string[];
	image?: string;
	github?: string;
	demo?: string;
};

const PROJECTS: Project[] = [
	{
		title: "Autonomous Research Agent",
		description:
			"Multi-agent system with tools, memory, and evaluation for deep-dive research workflows.",
		tags: ["TypeScript", "LangGraph", "OpenAI", "RAG"],
		image: "/globe.svg",
		github: "https://github.com/darren/autonomous-research-agent",
		demo: "https://example.com/research-agent",
	},
	{
		title: "Realtime Voice Agent",
		description:
			"Streaming bidirectional voice assistant with function calling and low-latency synthesis.",
		tags: ["Next.js", "WebRTC", "Vercel AI SDK"],
		image: "/vercel.svg",
		github: "https://github.com/darren/realtime-voice-agent",
	},
	{
		title: "Prompt Registry & Eval Dashboard",
		description:
			"Versioned prompts, datasets, and eval runs with robust telemetry and reporting.",
		tags: ["LLMOps", "Postgres", "OpenTelemetry"],
		image: "/window.svg",
		demo: "https://example.com/llmops-dashboard",
	},
];

export default function ProjectsSection() {
	return (
		<section id="projects" className="relative">
			<div className="container-px mx-auto max-w-6xl py-20">
				<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h2>
				<p className="mt-2 text-muted-foreground">Selected personal work with live demos and code.</p>
				<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{PROJECTS.map((p, i) => (
						<motion.div
							key={p.title}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.5, delay: i * 0.06 }}
						>
							<Card className="group relative overflow-hidden border-border/10 bg-card/70 p-4 shadow-lg transition-all hover:shadow-xl">
								<div className="relative mb-3 aspect-video overflow-hidden rounded-md border border-border/10 bg-accent-foreground shadow-sm">
									{p.image ? (
										<Image src={p.image} alt={p.title} fill className="object-contain p-6" />
									) : (
										<div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
											No image
										</div>
									)}
									<div className="pointer-events-none absolute -right-10 -top-10 size-24 rounded-full bg-accent/20 blur-2xl transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
								</div>
								<h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
								<p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
								<div className="mt-3 flex flex-wrap gap-1.5">
									{p.tags.map((t) => (
										<Badge key={t} variant="secondary" className="border border-border/10">
											{t}
										</Badge>
									))}
								</div>
								<div className="mt-4 flex gap-2">
									{p.github ? (
										<Button asChild variant="outline" size="sm">
											<a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
												<LuGithub size={16} /> Code
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
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}


