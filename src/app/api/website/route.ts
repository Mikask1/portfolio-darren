import { GoogleGenAI } from '@google/genai'

function buildPrompt(query: string): string {
  return (
    `Generate me an HTML website with this query: ${query}\n\n` +
    `Imagine the website in a dark frosted theme\n` +
    `Only return HTML, CSS, JS all with inline tags.\n` +
    `Make sure its renderable as html\n\n`
  )
}

function stripCodeFences(input: string): string {
  let s = input.trim()
  if (s.startsWith('```')) {
    s = s.replace(/^```[a-zA-Z]*\n?/, '')
    s = s.replace(/```\s*$/, '')
  }
  return s.trim()
}

async function generateHtmlFromGemini(prompt: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY || ''
  if (!apiKey) {
    throw new Error('Missing GEMINI_API_KEY')
  }

  const ai = new GoogleGenAI({ apiKey })
  const model = 'gemini-2.5-flash'
  const config = { responseModalities: ['TEXT'], systemInstruction: `# INSTRUCTIONS
You are a website generation agent that generates websites in a dark frosted theme. Do not generate headers and footers. Do not use body and html tags since we'll be using dangerouslySetInnerHTML to render the website. Do not set the max-width of the parent div, let it be width: 100% (not 100vw).

# THEME
--background: oklch(0.12 0.008 240); /* Deeper navy for better contrast
--foreground: #F8F9FA; /* Slightly brighter white for better readability

--card: oklch(0.18 0.015 240); /* Enhanced charcoal navy
--card-foreground: #F1F3F4; /* Brighter text on cards

--popover: oklch(0.18 0.015 240); /* Enhanced charcoal navy
--popover-foreground: #F1F3F4; /* Brighter text

--primary-foreground: #1A2530; /* Darker navy for contrast

--secondary: #7A8FA4; /* Enhanced steel gray
--secondary-foreground: #F8F9FA; /* Bright white

--accent: #E8F4F8; /* Enhanced ice blue
--accent-foreground: #1A2530; /* Darker navy for contrast` }

  const stream = await ai.models.generateContentStream({
    model,
    config,
    contents: [
      {
        role: 'user',
        parts: [{ text: prompt }],
      },
    ],
  })

  let output = ''
  for await (const chunk of stream) {
    if (typeof chunk?.text === 'string') {
      output += chunk.text
      continue
    }
    const parts = chunk?.candidates?.[0]?.content?.parts
    if (Array.isArray(parts)) {
      for (const part of parts) {
        if (typeof part?.text === 'string') output += part.text
      }
    }
  }
  return stripCodeFences(output)
}

export async function POST(req: Request) {
  try {
    const { query } = await req.json()
    if (!query || typeof query !== 'string') {
      return new Response('Invalid query', { status: 400 })
    }
    const prompt = buildPrompt(query)
    const html = await generateHtmlFromGemini(prompt)
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const message = err?.message || 'Internal Server Error'
    return new Response(message, { status: 500 })
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q') || searchParams.get('query') || ''
  if (!q) {
    return new Response('Missing query', { status: 400 })
  }
  try {
    const prompt = buildPrompt(q)
    const html = await generateHtmlFromGemini(prompt)
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const message = err?.message || 'Internal Server Error'
    return new Response(message, { status: 500 })
  }
}



