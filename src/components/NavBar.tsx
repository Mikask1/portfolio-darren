import Link from "next/link";
import ThemeToggle from "./ThemeToggle"
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();
    return (
        <nav className="container-px mx-auto flex h-16 items-center justify-between">
            <Link href="/#home" prefetch={false} className="group inline-flex items-center gap-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-background font-bold shadow-[0_0_0_3px_var(--color-ring)]">
                    D
                </span>
                <span className="text-sm font-semibold tracking-wide opacity-90 group-hover:opacity-100">
                    Darren
                </span>
            </Link>
            <div className="flex items-center gap-4 sm:gap-6 text-sm">
                <Link
                    href="/#home"
                    prefetch={false}
                    className={`hover:opacity-100 underline-ltr ${pathname === "/" ? "opacity-100 underline-active" : "opacity-80"
                        }`}
                >
                    Home
                </Link>
                <Link
                    href="/blogs"
                    prefetch={false}
                    className={`hover:opacity-100 underline-ltr ${pathname === "/blogs" ? "opacity-100 underline-active" : "opacity-80"
                        }`}
                >
                    Blogs
                </Link>
                <Link
                    href="/website"
                    prefetch={false}
                    className={`hover:opacity-100 underline-ltr ${pathname === "/website" ? "opacity-100 underline-active" : "opacity-80"
                        }`}
                >
                    Website Generator
                </Link>
                <a
                    href="mailto:darrenprasetya40@gmail.com"
                    className="hover:opacity-100 opacity-80 underline-ltr"
                >
                    Contact
                </a>
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default NavBar