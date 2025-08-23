"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { JSX, useEffect, useRef } from "react";
import Image from "next/image";
import SkillBadge from "@/components/SkillBadge";
import { Card } from "@/components/ui/card";

type TimelineItem = {
	year: string;
	image: string;
	title: string;
	subtitle: string;
	description?: string;
	bullets?: JSX.Element[];
	skills: string[];
	projects?: { name: string; link?: string }[];
};

const TIMELINE: TimelineItem[] = [
	{
		year: "Feb 2025 - present",
		image: "/covena.png",
		title: "AI Software Engineer",
		subtitle: "Covena",
		bullets: [
			<>Contributed to the development of a <strong>full-stack Agentic LLM sales representative</strong> using <strong>LangChain/LangGraph</strong> with <strong>OpenRouter</strong>, <strong>OpenAI</strong>, <strong>Gemini</strong>, <strong>Anthropic</strong>, <strong>DeepSeek</strong>, <strong>Llama</strong>, and <strong>Mixtral</strong>.</>,
			<>Led the development of a <strong>meta-learning agent</strong> that autonomously diagnoses and optimizes other agents, reducing manual <strong>prompt engineering</strong> work.</>,
			<>Contributed to the <strong>LLMOps pipeline</strong> for monitoring/observability, eval/feedback loops, and prompt management using <strong>DeepEval</strong> and <strong>LangSmith</strong>.</>,
			<>Researched state-of-the-art retrieval for general-purpose <strong>RAG</strong> with <strong>knowledge graphs</strong>.</>,
		],
		skills: ["LangChain", "LangGraph", "OpenRouter", "OpenAI", "Anthropic", "Gemini", "DeepSeek", "Llama", "Mixtral", "DeepEval", "LangSmith", "RAG", "Knowledge Graphs", "LLMOps"],
	},
	{
		year: "May 2024 - May 2025",
		image: "/bengcare.png",
		title: "Co-Founder and Chief Executive Officer",
		subtitle: "BengCare",
		bullets: [
			<>Secured <strong>$10,000 pre-seed funding</strong> from Google.</>,
			<>Built a latent-factor <strong>collaborative filtering</strong> recommender optimizing regularized MSE with <strong>Adam</strong> in <strong>TensorFlow</strong>.</>,
			<>Shipped full-stack apps with <strong>TypeScript</strong>, <strong>Next.js</strong>, <strong>FastAPI</strong>, and <strong>PostgreSQL</strong>.</>,
			<>Managed up to <strong>15 employees</strong> across Product, Sales, and Marketing.</>,
		],
		skills: ["TensorFlow", "TypeScript", "Next.js", "FastAPI", "PostgreSQL", "Collaborative Filtering"],
	},
	{
		year: "Aug 2024 - Feb 2025",
		image: "/traveloka.png",
		title: "Implementation Engineer Intern",
		subtitle: "Traveloka",
		bullets: [
			<>Contributed to backend services with <strong>Java</strong> and <strong>Spring Boot 3</strong>, using <strong>AWS Aurora</strong>; tested with <strong>JUnit 5</strong>, <strong>TestNG</strong>, and <strong>Mockito</strong> in UNIX.</>,
			<>Contributed to <strong>25%</strong> of migration of outdated Spring Boot services with measurable performance gains.</>,
			<>Refactored <strong>51 repositories</strong> to align with engineering best practices.</>,
		],
		skills: ["Java", "Spring Boot", "AWS Aurora", "JUnit", "TestNG", "Mockito", "UNIX"],
	},
	{
		year: "August 2022 - June 2023",
		image: "/mulaicoding.png",
		title: "Software Engineer Intern",
		subtitle: "Mulai Coding Inc",
		bullets: [
			<>Built web apps with <strong>TypeScript</strong>, <strong>Next.js</strong> (frontend), and <strong>Express.js</strong> (backend); tested with <strong>Jest</strong> and deployed on <strong>GCP</strong>.</>,
			<>Increased site loading speed by <strong>270%</strong> by migrating from Wix to <strong>Next.js</strong>, <strong>Express.js</strong>, and <strong>BigQuery</strong>.</>,
		],
		skills: ["TypeScript", "Next.js", "Express.js", "Jest", "GCP", "BigQuery"],
	},
	{
		year: "August 2021 - August 2025",
		image: "/its.png",
		title: "Bachelor of Computer Science",
		subtitle: "Sepuluh Nopember Institute of Technology",
		bullets: [
			<>Cumulative GPA: <strong>3.72/4.0</strong></>,
			<>Expected graduation: <strong>August 2025</strong></>,
		],
		skills: []
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
					Work experiences and personal impact
				</p>
				<div className="relative mt-10">
					<div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden sm:block [mask-image:linear-gradient(to_bottom,transparent_0,white_12%,white_88%,transparent_100%)]" />
					<div className="flex flex-col gap-8">
						{TIMELINE.map((item, idx) => (
							<TimelineRow key={item.title} item={item} isLast={idx === TIMELINE.length - 1} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}



function TimelineRow({ item, isLast }: { item: TimelineItem; isLast: boolean }) {
	const { ref, controls } = useReveal();
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 24 }}
			animate={controls}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="relative sm:pl-12"
		>
			<div className="absolute left-5 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-accent shadow-[0_0_0_3px_var(--color-background)] hidden sm:block" />
			<motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="will-change-transform">
				<Card className="border-border/10 bg-card/50 p-5 shadow-xl backdrop-blur-sm">
				{/* Mobile Layout */}
				<div className="sm:hidden">
					<div className="flex items-center gap-3 mb-3">
						<div className="relative aspect-square w-12 shrink-0 overflow-hidden border border-border/10 bg-white rounded-full shadow-md">
							<Image src={item.image} alt="logo" fill className="object-contain p-2" />
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
						<Image src={item.image} alt="logo" fill className="object-contain p-2" />
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
			</motion.div>
		</motion.div>
	);
}


