import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeColorProvider } from "@/components/theme-context";
import { Navbar } from "@/components/header/navbar";
import { Footer } from "@/components/footer/footer";
import { FooterBrandText } from "@/components/footer/footer-brand-text";
import { GridLinesSection } from "@/components/ui/grid-lines";
import ClickSpark from "@/components/ui/react-bits/ClickSpark";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Multilat - Your One-Stop Digital, Creative & Technology Solution Provider",
  description:
    "Multilat is a full-service digital, creative, and technology solutions provider. Specializing in web & mobile app development, graphic design, 3D modeling, and digital marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${beVietnamPro.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeColorProvider>
            <ClickSpark sparkRadius={50} sparkCount={10} duration={500}>
              <Navbar />
              <main className="pt-16">{children}</main>
              <GridLinesSection linePositions={[0, 100]}>
                <Footer />
              </GridLinesSection>
              <GridLinesSection
                showBottomIntersections={false}
                linePositions={[0, 100]}
              >
                <FooterBrandText />
              </GridLinesSection>
            </ClickSpark>
          </ThemeColorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
