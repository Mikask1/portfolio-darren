"use client";

import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { useEffect, useState } from "react";

const titles = [
	"Hi, my name is Darren",
	"I am an AI Software Engineer",
	"LLMOps Engineer",
	"Full-Stack Developer",
];

export default function Hero() {
	const [index, setIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	useEffect(() => {
		if (isHovered) return;
		const id = setInterval(() => setIndex((i) => (i + 1) % titles.length), 2000);
		return () => clearInterval(id);
	}, [isHovered]);

	return (
		<section id="home" className="relative">
			<div className="container-px mx-auto max-w-6xl py-16 pt-8 sm:py-24">
				<div className="grid items-center gap-10 md:grid-cols-2">
					<div className="relative">
						<div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card px-3 py-1 text-[12px] text-muted-foreground shadow-sm">
							<span className="size-2 rounded-full bg-green-400" />
							Available for work
						</div>
						<h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
							<span className="text-foreground">Darren Prasetya</span>
						</h1>
						<div
							className="mt-3 relative h-[44px] overflow-hidden text-2xl font-semibold sm:h-[52px] sm:text-3xl"
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							<AnimatePresence mode="sync" initial={false}>
								<motion.span
									key={index}
									initial={{ y: "100%", opacity: 0 }}
									animate={{ y: "0%", opacity: 1 }}
									exit={{ y: "-100%", opacity: 0 }}
									transition={{ duration: 0.6, ease: "easeInOut" }}
									className="absolute inset-0 text-primary"
								>
									{titles[index]}
								</motion.span>
							</AnimatePresence>
						</div>
						<p className="mt-4 max-w-prose text-foreground">
							Building agentic systems, production LLM pipelines, and polished user experiences. I blend solid software engineering with ML tooling to ship fast, reliable AI products.
						</p>
						<div className="mt-6 flex items-center gap-4">
							<TooltipProvider>
								{[
									{ href: "https://github.com/Mikask1", label: "GitHub", Icon: LuGithub },
									{ href: "https://linkedin.com/in/darren-prasetya/", label: "LinkedIn", Icon: LuLinkedin },
								].map(({ href, label, Icon }) => (
									<Tooltip key={label}>
										<TooltipTrigger asChild>
											<a
												href={href}
												className="inline-flex size-10 items-center justify-center rounded-full border border-border/50 bg-card text-foreground shadow-sm transition-colors hover:border-border"
												target={href.startsWith("http") ? "_blank" : undefined}
												rel={href.startsWith("http") ? "noreferrer" : undefined}
											>
												<Icon size={18} />
											</a>
										</TooltipTrigger>
										<TooltipContent side="top">{label}</TooltipContent>
									</Tooltip>
								))}
							</TooltipProvider>
							<Button asChild className="ml-2">
								<a href="mailto:darrenprasetya40@gmail.com">Contact me</a>
							</Button>
							<Button asChild variant="outline">
								<a href="https://docs.google.com/document/d/1j2mMwVqBXA0Xe8mZLh0Ozkv-rJcuz31LMBWSD5SqAbo/edit?usp=sharing" target="_blank" rel="noreferrer">View CV</a>
							</Button>
						</div>

						<div className="pointer-events-none absolute -left-24 -top-24 -z-10 size-72 rounded-full bg-accent/30 blur-3xl" />
					</div>
					<div className="relative">
						<div
							className="group relative mx-auto aspect-[3/4] w-full max-w-[360px] overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-card to-background p-2 shadow-xl"
							onMouseMove={(e) => {
								const { left, top } = e.currentTarget.getBoundingClientRect();
								mouseX.set(e.clientX - left);
								mouseY.set(e.clientY - top);
							}}
						>
							<motion.div
								className="pointer-events-none absolute -inset-2 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								style={{
									background: useMotionTemplate`
						radial-gradient(
							350px circle at ${mouseX}px ${mouseY}px,
							rgba(14, 165, 233, 0.15),
							transparent 80%
						)
					`,
								}}
							/>
							<div className="absolute -inset-16 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent" />
							<div className="relative h-full w-full rounded-xl bg-card/70">
								<Image
									src="/darren.jpg"
									alt="Darren full-body"
									fill
									className="object-contain rounded-xl"
									priority
									onError={(e) => {
										// Hide image if not provided
										(e.target as HTMLImageElement).style.display = "none";
									}}
								/>
								<div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-10 [mask-image:radial-gradient(white,transparent_70%)]" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(80%_50%_at_50%_0%,_var(--color-accent),_transparent_70%)]" />
			<div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-primary/25 to-transparent dark:hidden" />
		</section>
	);
}


