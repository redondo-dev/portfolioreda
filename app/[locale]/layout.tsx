// 'use client';

// import { Inter } from "next/font/google";
// import { notFound } from "next/navigation";
// import { NextIntlClientProvider } from "next-intl";
// import { ThemeProvider } from "@/components/theme-provider";
// import type { Metadata } from 'next';

// const inter = Inter({ subsets: ["latin"] });

// // Séparez la partie metadata dans un autre fichier car elle ne peut pas être utilisée avec 'use client'
// export const metadata: Metadata = {
//   icons: {
//     icon: '/favicon.ico',
//   }
// };

// export async function generateStaticParams() {
//   return [
//     { locale: "en" },
//     { locale: "fr" },
//     { locale: "ar" },
//     { locale: "it" },
//     { locale: "es" },
//   ];
// }

// // Créez un composant séparé pour le Providers
// function Providers({ children, locale, messages }: { 
//   children: React.ReactNode; 
//   locale: string;
//   messages: any;
// }) {
//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       <ThemeProvider
//         attribute="class"
//         defaultTheme="dark"
//         enableSystem
//         disableTransitionOnChange
//       >
//         {children}
//       </ThemeProvider>
//     </NextIntlClientProvider>
//   );
// }

// export default async function LocaleLayout({
//   children,
//   params: { locale },
// }: {
//   children: React.ReactNode;
//   params: { locale: string };
// }) {
//   let messages;
//   try {
//     messages = (await import(`/../../messages/${locale}.json`)).default;
//   } catch (error) {
//     notFound();
//     return null;
//   }

//   return (
//     <html lang={locale} suppressHydrationWarning>
//       <body className={inter.className}>
//         <Providers locale={locale} messages={messages}>
//           {children}
//         </Providers>
//       </body>
//     </html>
//   );
// }
'use client';

import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

// Déplacez la logique d'import des messages dans un hook personnalisé
function useMessages(locale: string) {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    async function loadMessages() {
      try {
        const importedMessages = (await import(`/../../messages/${locale}.json`)).default;
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

// Déplacez generateStaticParams dans un fichier séparé côté serveur si nécessaire
export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "fr" },
    { locale: "ar" },
    { locale: "it" },
    { locale: "es" },
  ];
}