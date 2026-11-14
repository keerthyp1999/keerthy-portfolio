"use client";
import { useState } from "react";

const jobs = [
  {
    id: "stem",
    title: "Data Engineer",
    company: "Stem Solutions LLC",
    client: "Client: Verra Mobility, via Cognizant",
    period: "Apr 2024 – Present",
    location: "Remote, US",
    current: true,
    highlights: [
      "Architected a multi-tenant PostgreSQL warehouse that grew from 1 to 5–6 clients on reusable data models, normalized schemas, and SQL functions for client-specific analytics.",
      "Built metadata-driven AWS Glue and PySpark pipelines so new clients onboard in 3–4 weeks through reusable configuration, processing millions of records twice daily.",
      "Delivered 20+ automated CSV report types per client with Glue, Lambda, and S3, giving clients self-service, on-demand reports with parameterized date filters.",
      "Cut SQL-based API response time from 350 ms to 150 ms using composite indexing, partitioning, and execution-plan analysis.",
      "Automated validation, reconciliation, and monitoring across ETL workflows, holding client-facing reports at 99.9% accuracy and reducing manual pipeline checks.",
      "Moved schema management from Hasura to Atlas, standardizing version-controlled migrations and contributing to roughly $50K in cost savings.",
      "Introduced AI-assisted SDLC workflows with Claude, MCP, VS Code, and Azure DevOps to speed up code generation, validation, and pull request preparation.",
    ],
    tags: ["AWS Glue", "PySpark", "PostgreSQL", "Lambda", "S3", "Atlas", "Azure DevOps", "MCP"],
  },
  {
    id: "tev",
    title: "Project Intern",
    company: "Third Estate Ventures",
    client: "",
    period: "Feb 2024 – Apr 2024",
    location: "Buffalo, NY",
    current: false,
    highlights: [
      "Analyzed demographic and household-income data in SQL to surface socioeconomic trends.",
      "Built interactive Power BI dashboards that supported affordable housing and community development planning.",
    ],
    tags: ["SQL", "Power BI"],
  },
  {
    id: "lt-de",
    title: "Azure Data Engineer",
    company: "L&T Technology Services",
    client: "",
    period: "May 2021 – Jun 2022",
    location: "India",
    current: false,
    highlights: [
      "Built Azure Data Factory and Databricks pipelines in PySpark, SQL, and Delta Lake, automating 10+ transformations for daily operations with 100% on-time SLA execution.",
      "Published analytics-ready Delta Lake datasets on ADLS Gen2 for Power BI, helping business teams reach insights 5× faster.",
      "Added automated data quality and schema validation checks that reduced inaccurate analytical outputs by 30%.",
      "Tuned Git-based CI/CD workflows across environments, cutting deployment errors by 40%+ and release turnaround by 30%.",
    ],
    tags: ["Azure Data Factory", "Databricks", "Delta Lake", "ADLS Gen2", "Power BI"],
  },
  {
    id: "lt-gt",
    title: "Graduate Engineer Trainee",
    company: "L&T Technology Services",
    client: "",
    period: "Jul 2020 – Apr 2021",
    location: "India",
    current: false,
    highlights: [
      "Developed predictive maintenance models for a hydraulic-unit digital twin from operational data, reducing equipment downtime by 8 hours per day and generating $1M in cost savings.",
    ],
    tags: ["Predictive modeling", "Digital twin"],
  },
];

export default function Experience() {
  const [active, setActive] = useState("stem");
  const job = jobs.find((j) => j.id === active)!;

  return (
    <section id="experience" className="py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Experience</p>
        <h2 className="font-display text-4xl font-bold text-white mb-12 leading-tight">
          Where the pipelines ran.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {jobs.map((j) => (
              <button
                key={j.id}
                onClick={() => setActive(j.id)}
                className={`text-left px-4 py-3 rounded-lg border transition-all duration-200 text-sm whitespace-nowrap md:whitespace-normal ${
                  active === j.id
                    ? "border-flow bg-flow/10 text-ash-light"
                    : "border-transparent text-ash hover:border-wire hover:text-ash-light"
                }`}
              >
                <p className="font-medium leading-tight">{j.company}</p>
                <p className="font-mono text-xs text-ash mt-0.5">{j.period}</p>
              </button>
            ))}
          </div>

          <div className="md:col-span-2 p-6 rounded-xl glass">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-6">
              <div>
                <h3 className="font-display text-xl font-bold text-white">{job.title}</h3>
                <p className="text-ash text-sm mt-0.5">{job.company} · {job.location}</p>
                {job.client && <p className="font-mono text-xs text-ash mt-1">{job.client}</p>}
              </div>
              <div className="flex items-center gap-2">
                {job.current && (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-signal/10 border border-signal/20 text-signal font-mono text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse-slow" />
                    Current
                  </span>
                )}
                <span className="font-mono text-xs text-ash">{job.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {job.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ash leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-flow flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
