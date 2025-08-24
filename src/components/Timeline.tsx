"use client";

import { JSX } from "react";
import TimelineRow from "./TimelineRow";

export type TimelineItem = {
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
						{TIMELINE.map((item) => (
							<TimelineRow key={item.title} item={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}


