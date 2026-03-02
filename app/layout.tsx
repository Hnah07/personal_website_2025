import type { Metadata } from "next";
import { Poppins, Pirata_One } from "next/font/google";
import "./globals.css";
// import ThemeContext from "./context/ThemeContext";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const pirata = Pirata_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pirata",
});

export const metadata: Metadata = {
  title: "Hannah Casier",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${pirata.variable} font-poppins antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
