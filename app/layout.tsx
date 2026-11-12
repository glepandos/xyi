import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fresh Auto — Защита автомобиля плёнкой в Уфе",
  description: "Профессиональная оклейка автомобилей полиуретановой защитной плёнкой в Уфе. Fresh Auto, Айская 79.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}