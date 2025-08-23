export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/20 bg-gradient-to-r from-white/8 via-white/6 to-white/8 backdrop-blur-sm py-4 text-center text-sm text-muted-foreground transition-all duration-300 hover:from-white/12 hover:via-white/9 hover:to-white/12">
      <div className="container-px mx-auto relative">
        <p>© {year} Darren Prasetya. Built with <a className="underline-ltr transition-colors hover:text-foreground" href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a>, <a className="underline-ltr transition-colors hover:text-foreground" href="https://ui.shadcn.com/" target="_blank" rel="noreferrer">shadcn/ui</a>, and <a className="underline-ltr transition-colors hover:text-foreground" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>.</p>
      </div>
    </footer>
  );
}


