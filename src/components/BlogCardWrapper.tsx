"use client";

import { motion } from "framer-motion";
import { Post } from "@/lib/blogData";
import BlogCard from "./BlogCard";

interface BlogCardWrapperProps {
    p: Post;
    i: number;
}

const item = {
    hidden: {
        opacity: 0,
        y: 12,
    },
    show: {
        opacity: 1,
        y: 0,
    },
};

export default function BlogCardWrapper({ p, i }: BlogCardWrapperProps) {
    return (
        <motion.div
            variants={item}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group relative glass-glow"
        >
            <BlogCard p={p} />
        </motion.div>
    );
}

