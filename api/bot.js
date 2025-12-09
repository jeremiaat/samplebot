import { Bot, webhookCallback } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN);

// Check if BOT_TOKEN is set
if (!process.env.BOT_TOKEN) {
  console.error('BOT_TOKEN environment variable is not set. Please set it to your Telegram bot token.');
  process.exit(1);
}

// /start command
bot.command("start", (ctx) => {
  ctx.reply("Welcome to the Book Borrowing System Bot!");
});

// Start the bot in polling mode for local development
if (process.env.NODE_ENV !== 'production') {
  bot.start();
}

// Export Vercel handler
export const config = {
  runtime: "edge", // required for serverless
};

export default webhookCallback(bot, "edge");
