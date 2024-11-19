// "use client";
// import { NextIntlClientProvider } from "next-intl";
// import { ThemeProvider } from "@/components/theme-provider";
// import { use } from "react";

// type LayoutProps = {
//   children: React.ReactNode;
//   params: { locale: string };
// };

// export default function LocaleLayout({ children, params }: LayoutProps) {
//   const messages = use(
//     import(`../../message/${params.locale}.json`).then((module) => module.default)
//   );

//   return (
//     <NextIntlClientProvider locale={params.locale} messages={messages}>
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
// app/[locale]/layout.tsx
"use client";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SUPPORTED_LOCALES = ['en', 'fr', 'ar', 'it', 'es'];
const DEFAULT_LOCALE = 'en';

export function LocaleRedirect() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
 
    const currentLocale = SUPPORTED_LOCALES.find(
      locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!currentLocale) {
     
      const browserLocale = navigator.language.split('-')[0];
      const redirectLocale = SUPPORTED_LOCALES.includes(browserLocale) 
        ? browserLocale 
        : DEFAULT_LOCALE;

      // Redirect to localized path
      const newPath = `/${redirectLocale}${pathname === '/' ? '' : pathname}`;
      router.replace(newPath);
    }
  }, [pathname, router]);

  return null;
}