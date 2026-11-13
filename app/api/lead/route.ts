import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim().slice(0, 80) : "";
    const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 30) : "";

    if (name.length < 2 || phone.length < 6) {
      return NextResponse.json({ error: "Укажите имя и корректный телефон" }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      return NextResponse.json({ error: "Приём заявок ещё не настроен" }, { status: 503 });
    }

    const message = [
      "🚘 Новая заявка с сайта Fresh Auto",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
    ].join("\n");

    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message }),
      cache: "no-store",
    });

    if (!telegramResponse.ok) {
      const details = await telegramResponse.text();
      console.error("Telegram sendMessage failed", {
        status: telegramResponse.status,
        response: details.slice(0, 1000),
        chatIdConfigured: Boolean(chatId),
        tokenConfigured: Boolean(token),
      });
      return NextResponse.json({ error: "Telegram отклонил отправку заявки", code: "TELEGRAM_SEND_FAILED" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead API failed", error);
    return NextResponse.json({ error: "Внутренняя ошибка при отправке заявки" }, { status: 500 });
  }
}
