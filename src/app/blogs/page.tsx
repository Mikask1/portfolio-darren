"use client";

import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS, Post } from "@/lib/blogData";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

export default function BlogsPage() {
  const [featuredPost, ...otherPosts] = BLOG_POSTS;

  return (
    <main className="container-px mx-auto max-w-5xl py-16">
      <motion.h1 initial="hidden" animate="show" variants={container} className="text-3xl font-bold">
        {`Blog`.split(" ").map((word, i) => (
          <motion.span variants={item} key={i} className="inline-block">
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-2 text-muted-foreground"
      >
        Notes on AI, agents, LLMOps, and engineering craft.
      </motion.p>
      <div className="mt-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-semibold"
        >
          Featured Post
        </motion.h2>
        <motion.div variants={container} initial="hidden" animate="show" className="mt-4">
          <BlogCard p={featuredPost} i={0} />
        </motion.div>
      </div>
      <div className="mt-12">
        {otherPosts.length > 0 && <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-semibold"
        >
          Other Posts
        </motion.h2>}
        <motion.div variants={container} initial="hidden" animate="show" className="mt-4 grid gap-4 sm:grid-cols-2">
          {otherPosts.map((p: Post, i: number) => (
            <BlogCard p={p} i={i + 1} key={p.slug || p.title} />
          ))}
        </motion.div>
      </div>
    </main>
  );
}


