export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/10 py-4 text-center text-sm text-muted-foreground">
      <div className="container-px mx-auto">
        <p>© {year} Darren Prasetya. Built with <a className="underline-ltr" href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a>, <a className="underline-ltr" href="https://ui.shadcn.com/" target="_blank" rel="noreferrer">shadcn/ui</a>, and <a className="underline-ltr" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>.</p>
      </div>
    </footer>
  );
}


