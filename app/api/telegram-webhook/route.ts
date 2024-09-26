import { NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

// Create a new instance of the Telegram Bot
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN!, { polling: false });

// Named export for POST method
export async function POST(req: Request) {
  const body = await req.json(); // Parse JSON body from request
  const { message } = body;

  if (message && typeof message === 'object' && 'chat' in message && 'id' in message.chat && 'text' in message) {
    const chatId = message.chat.id;
    const text = message.text;

    const response = await processMessage(text);
    await bot.sendMessage(chatId, response);

    return NextResponse.json({ status: 'success' });
  } else {
    return NextResponse.json({ status: 'error', message: 'Invalid message format' }, { status: 400 });
  }
}

// Optional GET method (if needed)
export async function GET() {
    
  return NextResponse.json({ status: 'success', message: 'GET request received.' });
}

// Process the received message
async function processMessage(text: string): Promise<string> {
  return `You said: ${text}`;
}