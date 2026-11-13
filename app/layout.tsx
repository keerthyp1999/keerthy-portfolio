import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keerthy Priya Vanam · Data Engineer",
  description:
    "Data engineer building metadata-driven, multi-tenant pipelines on AWS Glue, PySpark, PostgreSQL, and Databricks.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
