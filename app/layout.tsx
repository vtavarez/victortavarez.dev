import { ThemeProvider } from "@/lib/providers/next-theme";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "@/styles/globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Victor Tavarez",
  description:
    "Hi — I'm Victor. I enjoy building dynamic and engaging user experiences on the web.",
};

export default function RootLayout({
  header,
  children,
  footer,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative min-h-screen bg-background px-6 pb-80 font-sans antialiased xl:px-16",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {header}
          {children}
          {footer}
        </ThemeProvider>
      </body>
    </html>
  );
}
