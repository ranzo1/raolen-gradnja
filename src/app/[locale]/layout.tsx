// app/[locale]/layout.tsx or app/layout.tsx depending on your structure

import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Metadata } from "next";

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

// ✅ Dynamic Metadata Translation
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
