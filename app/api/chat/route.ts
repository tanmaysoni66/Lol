import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `You are a helpful, expert AI assistant. Your job is to answer user queries based on the website's context.
Guidelines:
- Be polite, extremely concise, and highly encouraging.
- Keep responses short (1-2 sentences maximum) for ultra-fast chat speed.
- If asked about something not provided, politely clarify what we offer.`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, history } = body;
    
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    let fullPrompt = `System: ${SYSTEM_PROMPT}\n\n`;
    for (const msg of history || []) {
      fullPrompt += `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.text}\n`;
    }
    fullPrompt += `User: ${message}\nAssistant:`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: fullPrompt,
      config: {
        maxOutputTokens: 800,
        temperature: 0.5,
      }
    });

    return NextResponse.json({ text: response.text });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ error: 'An error occurred while communicating with the AI.' }, { status: 500 });
  }
}
