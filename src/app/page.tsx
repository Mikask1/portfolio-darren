import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import ProjectsSection from "@/components/ProjectsSection";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="font-sans min-h-screen relative">
             {/* Unified frosted glass texture wrapper - scrolls naturally with content */}
       <div className="pointer-events-none absolute inset-0 -z-10 min-h-full">
         {/* Base texture overlay - optimized for both themes */}
         <div className="absolute inset-0 min-h-full opacity-20 texture-overlay dark:opacity-15" />
         {/* Gradient layers for depth - light mode uses subtle shadows, dark mode uses subtle highlights */}
         <div className="absolute inset-0 min-h-full bg-gradient-to-br from-black/2 via-transparent to-black/1.5 backdrop-blur-[0.5px] dark:from-white/1 dark:to-white/0.5" />
         <div className="absolute inset-0 min-h-full bg-gradient-to-tl from-black/1 via-transparent to-black/2 dark:from-white/0.5 dark:to-white/1" />
         {/* Dynamic light effects distributed throughout the page */}
         <div className="absolute inset-0 min-h-full bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.08),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.05),transparent_30%),radial-gradient(circle_at_40%_60%,rgba(0,0,0,0.06),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.04),transparent_30%),radial-gradient(circle_at_30%_90%,rgba(0,0,0,0.07),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.03),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.02),transparent_30%),radial-gradient(circle_at_40%_60%,rgba(255,255,255,0.025),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.015),transparent_30%),radial-gradient(circle_at_30%_90%,rgba(255,255,255,0.028),transparent_30%)]" />
         {/* Subtle animated elements distributed throughout the scroll area */}
         <div className="absolute top-[15%] left-1/4 w-32 h-32 rounded-full bg-primary/6 blur-3xl animate-pulse dark:bg-accent/3" />
         <div className="absolute top-[45%] right-1/4 w-24 h-24 rounded-full bg-accent/5 blur-2xl animate-pulse dark:bg-primary/2" style={{animationDelay: '1s'}} />
         <div className="absolute top-[75%] left-1/3 w-28 h-28 rounded-full bg-secondary/4 blur-2xl animate-pulse dark:bg-secondary/2" style={{animationDelay: '2s'}} />
         <div className="absolute top-[90%] right-1/3 w-20 h-20 rounded-full bg-primary/3 blur-xl animate-pulse dark:bg-accent/1.5" style={{animationDelay: '0.5s'}} />
       </div>
      
      <Hero />
      <Timeline />
      <ProjectsSection />
      <BlogSection />
    </main>
  );
}
