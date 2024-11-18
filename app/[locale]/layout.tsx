"use client";

import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

function useMessages(locale: string) {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    async function loadMessages() {
      try {
        const importedMessages = (await import(`../../messages/${locale}.json`))
          .default;
        setMessages(importedMessages);
      } catch (error) {
        notFound();
      }
    }

    loadMessages();
  }, [locale]);

  return messages;
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages(locale);

  // Si les messages ne sont pas encore chargés, vous pouvez retourner un chargeur ou null
  if (!messages) {
    return null; // ou un composant de chargement
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
