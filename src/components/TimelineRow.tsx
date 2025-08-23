import { motion, useAnimation, useInView } from "framer-motion";
import { TimelineItem } from "./Timeline";
import { useRef, useEffect } from "react";

function useReveal() {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });
	const controls = useAnimation();
	useEffect(() => {
		if (isInView) {
			controls.start({ opacity: 1, y: 0 });
		}
	}, [isInView, controls]);
	return { ref, controls } as const;
}

function TimelineRow({ item }: { item: TimelineItem }) {
	const { ref, controls } = useReveal();
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 24 }}
			animate={controls}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="relative sm:pl-12"
		>
			<div className="absolute left-5 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-accent shadow-[0_0_0_3px_var(--color-background)] hidden sm:block" />
			<motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="will-change-transform">
				
			</motion.div>
		</motion.div>
	);
}

export default TimelineRow;