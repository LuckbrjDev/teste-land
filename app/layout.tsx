import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omega Software — Portfólio de sistemas e aplicações",
  description:
    "Portfólio da Omega Software: sistemas de gestão, ferramentas operacionais, automações e landing pages criadas para problemas reais.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
