
import { NextResponse } from 'next/server'

interface ChatGPTResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
  error?: string; // Optional error field
}

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Ensure this variable is set in your environment
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // or any other model you want to use
        messages: [{ role: "user", content: message }],
      }),
    });

    const data: ChatGPTResponse = await response.json();

    if (response.ok) {
      return NextResponse.json({ reply: data.choices[0].message.content });
    } else {
      return NextResponse.json({ error: data.error || "Something went wrong." }, { status: response.status });
    }
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}