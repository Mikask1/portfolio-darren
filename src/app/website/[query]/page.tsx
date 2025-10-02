import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'

async function fetchGeneratedHtml(query: string): Promise<string> {
  const hdrs = await headers()
  const host = hdrs.get('x-forwarded-host') || hdrs.get('host') || ''
  const protocol = (hdrs.get('x-forwarded-proto') || 'http').split(',')[0]
  const baseUrl = host ? `${protocol}://${host}` : ''
  const endpoint = `${baseUrl}/api/website`
  const res = await fetch(endpoint, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || 'Failed to generate website')
  }
  return await res.text()
}

export default async function WebsitePage({ params }: { params: Promise<{ query: string }> }) {

  const decodedQuery = decodeURIComponent((await params).query || '')
  const html = await fetchGeneratedHtml(decodedQuery)
  return (
    <div 
      className="h-full w-full"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}



