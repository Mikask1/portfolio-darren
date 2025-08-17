"use client";

import { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

type MotionProviderProps = {
	children: ReactNode;
};

export default function MotionProvider({ children }: MotionProviderProps) {
	return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}


