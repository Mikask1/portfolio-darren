"use client";

import SkillBadge from "@/components/SkillBadge";
import { Card } from "@/components/ui/card";

const SKILL_GROUPS: { title: string; skills: string[] }[] = [
    {
        title: "AI/LLM & MLOps",
        skills: [
            "LangChain",
            "LangGraph",
            "RAG",
            "DeepEval",
            "LangSmith",
            "LLMOps",
            "Prompt Engineering",
            "OpenRouter",
            "OpenAI",
            "Anthropic",
            "Gemini",
            "DeepSeek",
            "Llama",
        ],
    },
    {
        title: "ML & Data",
        skills: [
            "PyTorch",
            "TensorFlow",
            "Pandas",
            "Sharpness-Aware Minimization",
            "Adam",
            "SGD",
        ],
    },
    {
        title: "Backend & Infra",
        skills: [
            "Java",
            "Spring Boot",
            "FastAPI",
            "Express.js",
            "PostgreSQL",
            "AWS Aurora",
            "GCP",
            "Load Balancing",
            "UNIX",
        ],
    },
    {
        title: "Frontend & UI",
        skills: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    },
    { title: "Testing", skills: ["JUnit 5", "TestNG", "Mockito", "Jest"] },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="relative">
            <div className="container-px mx-auto max-w-6xl py-20">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Skills</h2>
                <p className="mt-2 text-muted-foreground">
                    Consolidated overview of tools and technologies across roles and projects.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {SKILL_GROUPS.map((group) => (
                        <Card key={group.title} className="border-border/10 bg-card/70 p-4 shadow-lg">
                            <h3 className="text-base font-semibold">{group.title}</h3>
                            <div className="flex flex-wrap gap-1.5">
                                {group.skills.map((s) => (
                                    <SkillBadge key={s} skill={s} />
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}


