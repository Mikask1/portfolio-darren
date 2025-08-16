import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Timeline from "@/components/Timeline";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main className="font-sans min-h-screen">
      <Hero />
      <Timeline />
      <ProjectsSection />
      <BlogSection />
    </main>
  );
}
