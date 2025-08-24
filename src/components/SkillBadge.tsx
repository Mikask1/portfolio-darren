import { Badge, badgeVariants } from "@/components/ui/badge";
import type { VariantProps } from "class-variance-authority";
import type { JSX, SVGProps } from "react";
import {
	Cpu,
	Search,
	Wand,
	TestTube,
	Box,
	MessageSquare,
	Route,
	FileText,
	TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

import {
	siTypescript,
	siJavascript,
	siReact,
	siNextdotjs,
	siTailwindcss,
	siFramer,
	siNodedotjs,
	siExpress,
	siSpringboot,
	siPostgresql,
	siPytorch,
	siTensorflow,
	siPandas,
	siSelenium,
	siOpenai,
	siGoogle,
	siMeta,
	siAnthropic,
	siGooglebigquery,
	siGooglecloud,
	siOpenjdk,
	siIcloud,
	siLangchain,
	siLanggraph,
	siLinux,
	siJest,
} from "simple-icons/icons";	

type IconType = React.ComponentType<SVGProps<SVGSVGElement>>;

function fromSimpleIcon(icon: { path: string; title: string }): IconType {
	return function SimpleIconSvg(props: SVGProps<SVGSVGElement>) {
		const { path } = icon;
		return (
			<svg
				viewBox="0 0 24 24"
				width="1em"
				height="1em"
				fill="currentColor"
				aria-hidden
				{...props}
			>
				<path d={path} />
			</svg>
		);
	};
}

type SkillBadgeProps = {
	skill: string;
	variant?: VariantProps<typeof badgeVariants>["variant"];
	className?: string;
};

function getIconForSkill(skill: string): IconType | null {
	const s = skill.toLowerCase();

	const entries: Array<{ match: (v: string) => boolean; Icon: IconType }> = [
		{ match: (v) => v.includes("typescript") || v === "ts", Icon: fromSimpleIcon(siTypescript) },
		{ match: (v) => v.includes("javascript") || v === "js", Icon: fromSimpleIcon(siJavascript) },
		{ match: (v) => v.includes("react"), Icon: fromSimpleIcon(siReact) },
		{ match: (v) => v.includes("next"), Icon: fromSimpleIcon(siNextdotjs) },
		{ match: (v) => v.includes("tailwind"), Icon: fromSimpleIcon(siTailwindcss) },
		{ match: (v) => v.includes("framer"), Icon: fromSimpleIcon(siFramer) },
		{ match: (v) => v.includes("node"), Icon: fromSimpleIcon(siNodedotjs) },
		{ match: (v) => v.includes("express"), Icon: fromSimpleIcon(siExpress) },
		{ match: (v) => v.includes("java"), Icon: fromSimpleIcon(siOpenjdk) },
		{ match: (v) => v.includes("spring"), Icon: fromSimpleIcon(siSpringboot) },
		{ match: (v) => v.includes("postgres"), Icon: fromSimpleIcon(siPostgresql) },
		{ match: (v) => v.includes("aws") || v.includes("aurora"), Icon: fromSimpleIcon(siIcloud) },
		{ match: (v) => v.includes("gcp") || v.includes("google cloud"), Icon: fromSimpleIcon(siGooglecloud) },
		{ match: (v) => v.includes("bigquery"), Icon: fromSimpleIcon(siGooglebigquery) },
		{ match: (v) => v.includes("unix"), Icon: fromSimpleIcon(siLinux) },
		{ match: (v) => v.includes("pytorch"), Icon: fromSimpleIcon(siPytorch) },
		{ match: (v) => v.includes("tensorflow"), Icon: fromSimpleIcon(siTensorflow) },
		{ match: (v) => v.includes("pandas"), Icon: fromSimpleIcon(siPandas) },
		{ match: (v) => v.includes("selenium"), Icon: fromSimpleIcon(siSelenium) },
		{ match: (v) => v.includes("jest"), Icon: fromSimpleIcon(siJest) },
		{ match: (v) => v.includes("junit") || v.includes("testng") || v.includes("mockito"), Icon: TestTube },
		{ match: (v) => v.includes("openai"), Icon: fromSimpleIcon(siOpenai) },
		{ match: (v) => v.includes("gemini"), Icon: fromSimpleIcon(siGoogle) },
		{ match: (v) => v.includes("llama"), Icon: fromSimpleIcon(siMeta) },
		{ match: (v) => v.includes("anthropic"), Icon: fromSimpleIcon(siAnthropic) },
		{ match: (v) => v.includes("deepseek") || v.includes("mixtral") || v.includes("moonshotai"), Icon: MessageSquare },
		// AI/ML tools and concepts
		{ match: (v) => v.includes("openrouter"), Icon: Route },
		{ match: (v) => v.includes("prompt engineering"), Icon: FileText },
		{ match: (v) => v.includes("langgraph"), Icon: fromSimpleIcon(siLanggraph) },
		{ match: (v) => v.includes("langchain"), Icon: fromSimpleIcon(siLangchain) },
		{ match: (v) => v.includes("rag"), Icon: Search },
		{ match: (v) => v.includes("llmops"), Icon: Cpu },
		{ match: (v) => v.includes("langsmith"), Icon: Wand },
		{ match: (v) => v.includes("deepeval") || v.includes("deepeval"), Icon: TestTube },
		// Optimization algorithms
		{ match: (v) => v.includes("adam") || v.includes("sgd") || v.includes("sharpness-aware"), Icon: TrendingUp },
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
			{Icon ? <Icon aria-hidden /> : <Box aria-hidden />}
			{skill}
		</Badge>
	);
}


