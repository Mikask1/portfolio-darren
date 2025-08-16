import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Darren Prasetya — AI Software Engineer",
	description:
		"Portfolio of Darren Prasetya: Agentic AI Engineer, LLMOps Engineer, and Software Developer.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${openSans.variable} antialiased bg-background text-foreground`}> 
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<NavBar />
					<div className="pt-16 min-h-[calc(100vh-40px)]">{children}</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
