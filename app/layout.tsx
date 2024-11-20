import type { Metadata } from "next";

const siteName = "PeachTechチャットボット";
const description = "PeachTechに詳しいAIとお話ができます！";

export const metadata: Metadata = {
  title: siteName,
  description: description,
  openGraph: {
    type: "website",
    url: "https://peachtech-chat-bot.vercel.app/",
    title: siteName,
    description: description,
    siteName: siteName,
  },
  twitter: {
    title: siteName,
    description: description,
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="u-journal" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
