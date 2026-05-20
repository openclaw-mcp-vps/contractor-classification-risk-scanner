import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contractor Classification Risk Scanner",
  description: "Scan contractor agreements for misclassification risks. AI-powered analysis based on IRS/DOL criteria."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e513b500-58ce-419b-8353-6908b3871f55"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
