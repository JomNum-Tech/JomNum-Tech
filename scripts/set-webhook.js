import fetch from 'node-fetch';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const WEBHOOK_URL = 'https://https://e5fa-136-228-158-126.ngrok-free.app/api/telegram-webhook'

async function setWebhook() {
  const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${WEBHOOK_URL}`)
  const data = await response.json()
  console.log(data)
}

setWebhook()