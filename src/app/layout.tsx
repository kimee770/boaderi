import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forme — a good place to start",
  description: "A considered collection of the pieces that make your product feel like yours.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
