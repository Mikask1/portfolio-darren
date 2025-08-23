"use client";

import { motion } from "framer-motion";
import { JSX } from "react";
import ProjectsSectionCard from "./ProjectsSectionCard";

export type Project = {
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
							whileHover={{ scale: 1.02 }}
							className="will-change-transform"
						>
							<ProjectsSectionCard p={p} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}


