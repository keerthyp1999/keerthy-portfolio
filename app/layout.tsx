import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keerthy Priya Vanam · Data Engineer",
  description: "Cloud-native data engineer specializing in AWS/Azure pipelines, distributed systems, and high-throughput ETL at enterprise scale.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
