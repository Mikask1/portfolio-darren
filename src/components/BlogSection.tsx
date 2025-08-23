"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard from "./BlogCardWrapper";
import { BLOG_POSTS, Post } from "@/lib/blogData";

export default function BlogSection() {
  // Show only the first 3 posts in the homepage section
  const displayPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="relative">
      <div className="container-px mx-auto max-w-6xl py-20">
        <div>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Blogs</h2>
            <Link href="/blogs" prefetch={false} className="text-sm text-primary underline-ltr whitespace-nowrap self-start">
              View all
            </Link>
          </div>
          <p className="mt-2 text-muted-foreground">Thoughts on various technical topics in AI.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayPosts.map((p: Post, i: number) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <BlogCard p={p} i={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


