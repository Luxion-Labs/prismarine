import type { Metadata } from "next";
import "./globals.scss";
import Shell from "@/components/layout/Shell";

export const metadata: Metadata = {
  title: "Prismarine",
  description: "Production-grade desktop application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
