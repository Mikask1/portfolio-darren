"use client";

import { Badge, badgeVariants } from "@/components/ui/badge";
import type { VariantProps } from "class-variance-authority";
import type { IconType } from "react-icons";
import {
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiSpringboot,
	SiExpress,
	SiPytorch,
	SiTensorflow,
	SiPostgresql,
	SiGooglecloud,
	SiAmazon,
	SiSelenium,
	SiJest,
	SiOpenai,
	SiNodedotjs,
	SiPandas,
	SiGooglebigquery,
	SiFramer,
	SiGoogle,
	SiMeta,
	SiAnthropic,
} from "react-icons/si";
import {
	LuCpu,
	LuSearch,
	LuTerminal,
	LuGitBranch,
	LuWand,
	LuTestTube,
	LuBox,
	LuMessageSquare,
	LuRoute,
	LuFileText,
	LuTrendingUp,
} from "react-icons/lu";
import { FaJava } from "react-icons/fa";
import { cn } from "@/lib/utils";

type SkillBadgeProps = {
	skill: string;
	variant?: VariantProps<typeof badgeVariants>["variant"];
	className?: string;
};

function getIconForSkill(skill: string): IconType | null {
	const s = skill.toLowerCase();

	const entries: Array<{ match: (v: string) => boolean; Icon: IconType }> = [
		{ match: (v) => v.includes("typescript") || v === "ts", Icon: SiTypescript },
		{ match: (v) => v.includes("javascript") || v === "js", Icon: SiJavascript },
		{ match: (v) => v.includes("react"), Icon: SiReact },
		{ match: (v) => v.includes("next"), Icon: SiNextdotjs },
		{ match: (v) => v.includes("tailwind"), Icon: SiTailwindcss },
		{ match: (v) => v.includes("framer"), Icon: SiFramer },
		{ match: (v) => v.includes("node"), Icon: SiNodedotjs },
		{ match: (v) => v.includes("express"), Icon: SiExpress },
		{ match: (v) => v.includes("java"), Icon: FaJava },
		{ match: (v) => v.includes("spring"), Icon: SiSpringboot },
		{ match: (v) => v.includes("postgres"), Icon: SiPostgresql },
		{ match: (v) => v.includes("aws") || v.includes("aurora"), Icon: SiAmazon },
		{ match: (v) => v.includes("gcp") || v.includes("google cloud"), Icon: SiGooglecloud },
		{ match: (v) => v.includes("bigquery"), Icon: SiGooglebigquery },
		{ match: (v) => v.includes("unix"), Icon: LuTerminal },
		{ match: (v) => v.includes("pytorch"), Icon: SiPytorch },
		{ match: (v) => v.includes("tensorflow"), Icon: SiTensorflow },
		{ match: (v) => v.includes("pandas"), Icon: SiPandas },
		{ match: (v) => v.includes("selenium"), Icon: SiSelenium },
		{ match: (v) => v.includes("jest"), Icon: SiJest },
		{ match: (v) => v.includes("junit") || v.includes("testng") || v.includes("mockito"), Icon: LuTestTube },
		{ match: (v) => v.includes("openai"), Icon: SiOpenai },
		{ match: (v) => v.includes("gemini"), Icon: SiGoogle },
		{ match: (v) => v.includes("llama"), Icon: SiMeta },
		{ match: (v) => v.includes("anthropic"), Icon: SiAnthropic },
		{ match: (v) => v.includes("deepseek") || v.includes("mixtral") || v.includes("moonshotai"), Icon: LuMessageSquare },
		// AI/ML tools and concepts
		{ match: (v) => v.includes("openrouter"), Icon: LuRoute },
		{ match: (v) => v.includes("prompt engineering"), Icon: LuFileText },
		{ match: (v) => v.includes("langgraph"), Icon: LuGitBranch },
		{ match: (v) => v.includes("langchain"), Icon: LuGitBranch },
		{ match: (v) => v.includes("rag"), Icon: LuSearch },
		{ match: (v) => v.includes("llmops"), Icon: LuCpu },
		{ match: (v) => v.includes("langsmith"), Icon: LuWand },
		{ match: (v) => v.includes("deeval") || v.includes("deepeval"), Icon: LuTestTube },
		// Optimization algorithms
		{ match: (v) => v.includes("adam") || v.includes("sgd") || v.includes("sharpness-aware"), Icon: LuTrendingUp },
	];

	for (const { match, Icon } of entries) {
		if (match(s)) return Icon;
	}
	return null;
}

export default function SkillBadge({ skill, variant = "secondary", className }: SkillBadgeProps) {
	const Icon = getIconForSkill(skill);
	return (
		<Badge variant={variant} className={cn("border border-border/10", className)}>
			{Icon ? <Icon aria-hidden /> : <LuBox aria-hidden />}
			{skill}
		</Badge>
	);
}


