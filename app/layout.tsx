import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractionEffects from "@/components/InteractionEffects";
import PageTransition from "@/components/PageTransition";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase: siteBase,
  alternates: siteBase ? { canonical: "/" } : undefined,
  title: {
    default: "ZIRO AI PATASHALA | Hands-On AI Education for Schools",
    template: "%s | ZIRO AI PATASHALA",
  },
  description: "Explore hands-on AI workshops, guided projects, and practical AI learning experiences for students through ZIRO AI PATASHALA.",
  openGraph: {
    type: "website",
    siteName: "ZIRO AI PATASHALA",
    title: "ZIRO AI PATASHALA — Learn AI by Exploring and Building",
    description: "Practical AI workshops for students, parents, and schools.",
    images: siteBase ? [new URL("/images/ziro-logo.png", siteBase).toString()] : undefined,
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#fbfaf8" };

const themeInitScript = `(()=>{try{const saved=localStorage.getItem("ziro-theme");const prefers=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.dataset.theme=saved==="dark"||(!saved&&prefers)?"dark":"light"}catch{document.documentElement.dataset.theme="light"}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: themeInitScript }} /></head>
    <body>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <InteractionEffects />
      <Header />
      <PageTransition><main id="main-content">{children}</main></PageTransition>
      <Footer />
    </body>
  </html>;
}
