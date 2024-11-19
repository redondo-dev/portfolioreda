// layout.tsx
"use client";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/theme-provider";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = require(`../../message/§{params.locale}.json`);

  if (!messages) {
    return null;
  }

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
