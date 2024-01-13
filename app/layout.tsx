import { Header, Footer } from "@/components/theme";
import { ThemeProvider } from "@/lib/provider/next-theme";
import { ReCaptchaProvider } from "@/lib/provider/recaptcha";
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
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ReCaptchaProvider>
            <Header />
            {children}
            <Footer />
          </ReCaptchaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
