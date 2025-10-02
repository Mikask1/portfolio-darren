"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function WebsiteLandingPage() {
    const router = useRouter()
    const [query, setQuery] = useState('')

    function go(value: string) {
        const trimmed = value.trim()
        if (!trimmed) return
        router.push(`/website/${encodeURIComponent(trimmed)}`)
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        go(query)
    }

    return (
        <main className="font-sans min-h-[calc(100vh-128px)] relative flex items-center justify-center w-full">
            <Card className="mx-auto min-w-4xl">
                <CardHeader className="border-b">
                    <CardTitle className="text-2xl">Describe your idea</CardTitle>
                    <CardDescription>Generate any website you want in /website</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit} className="flex flex-col gap-3 md:flex-row md:items-center">
                        <input
                            className="flex-1 h-12 rounded-md border border-white/20 bg-gradient-to-r from-white/10 to-white/5 px-4 text-sm outline-none backdrop-blur-sm transition-all focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring dark:from-white/5 dark:to-white/2"
                            placeholder="e.g., /contact-me, /dashboard, /about-me"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            aria-label="Website prompt"
                        />
                        <Button type="submit" className="md:h-12 glass-glow transition-transform font-semibold cursor-pointer">Generate</Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}


