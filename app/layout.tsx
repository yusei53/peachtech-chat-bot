import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PeachTechチャットボット",
  description: "PeachTechに詳しいAIとお話ができます！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
