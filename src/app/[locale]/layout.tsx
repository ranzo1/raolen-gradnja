import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

// ✅ Default site-wide metadata
export const metadata = {
  title:
    "Modern Apartments for Sale | Raolen Gradnja",
  description:
    "Find modern apartments for your needs in center of Indjija, Serbia. Explore listings with photos, prices, and details to discover your perfect home.",
  icons: {
    icon: "/favicon.ico", // standard favicon
    apple: "/apple-touch-icon.png", // Apple Touch Icon
  },
};

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
