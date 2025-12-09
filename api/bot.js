import { Bot, webhookCallback } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN);

// /start command
bot.command("start", (ctx) => {
  ctx.reply("Welcome to the Book Borrowing System Bot!");
});

// Export Vercel handler
export const config = {
  runtime: "edge", // required for serverless
};

export default webhookCallback(bot, "edge");
