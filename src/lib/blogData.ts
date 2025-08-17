export interface Post {
    slug?: string; // For internal blog posts
    title: string;
    desc: string;
    link?: string; // For external links
    isExternal?: boolean;
}

export const BLOG_POSTS: Post[] = [
    {
        title: "You only use 10% of your neurons",
        desc: `"You only use 10% of your brain"

We've all heard this misleading "fact".

While it might be untrue for our feeble human flesh, that's not the case for our clanker overlords (LLMs)`,
        link: "https://www.linkedin.com/pulse/you-only-use-10-your-neurons-darren-prasetya-dpavc",
        isExternal: true,
    },
];