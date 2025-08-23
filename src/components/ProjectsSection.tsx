"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import SkillBadge from "@/components/SkillBadge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LuCode, LuExternalLink } from "react-icons/lu";
import { JSX } from "react";

type Project = {
	title: string;
	description: string | JSX.Element[];
	tags: string[];
	image?: string;
	github?: string;
	demo?: string;
};

const PROJECTS: Project[] = [
	{
		title: "Mixture of Experts CNN Model",
		description: [
			<>Achieved <strong>99.78% accuracy</strong> on MNIST; ~#7 on Papers with Code.</>,
			<><strong>2,247,151</strong> parameters; <strong>674,145</strong> effective parameters.</>,
			<>Staged training: <strong>Adam 0.001</strong> → <strong>SGD 0.01→0.001</strong> with SAM.</>,
		],
		tags: ["PyTorch", "Pandas", "Sharpness-Aware Minimization", "Adam", "SGD"],
		image: "/moe.png",
		github: "https://huggingface.co/Mikask/moe-cnn",
	},
	{
		title: "State-of-the-art Javanese to Indonesian Translation Model",
		description: [
			<>Team of 3; stack: <strong>TensorFlow</strong>, <strong>SentenceTransformers</strong>.</>,
			<><strong>BLEU 20.31</strong> vs Google <strong>9.04</strong>, DeepL <strong>9.49</strong>, ChatGPT-3.5 Turbo <strong>11.71</strong>.</>,
			<>Data via Selenium from Google Translate; benchmarked vs DeepL.</>,
		],
		tags: ["TensorFlow", "SentenceTransformers", "Selenium", "BLEU"],
		image: "/translate.png",
		github: "http://Mikask/indobart-indonlg-nusax-500-jv-id",
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
							<Card className="group relative overflow-hidden border-border/20 p-4 shadow-lg glass-hover-scale glass-glow">
								<div className="relative aspect-video overflow-hidden rounded-md border border-border/10 bg-accent-foreground shadow-sm">
									{p.image ? (
										<Image src={p.image} alt={p.title} fill className="object-contain p-6 dark:invert" />
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
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}


