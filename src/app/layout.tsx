import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";
import NavBar from "@/components/NavBarWrapper";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	display: "swap",
	preload: true,
});

export const metadata: Metadata = {
	title: "Darren Prasetya",
	description:
		"Portfolio of Darren Prasetya",
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
					<MotionProvider>
						<NavBar />
						<div className="pt-16 min-h-[calc(100vh-40px)]">{children}</div>
						<Footer />
					</MotionProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
