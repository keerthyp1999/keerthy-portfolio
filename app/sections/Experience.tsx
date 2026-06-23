"use client";
import { useState } from "react";

const jobs = [
  {
    id: "cognizant",
    title: "Data Engineer",
    company: "Stem Solutions (Client: Cognizant)",
    period: "Apr 2024 – Present",
    location: "Remote, USA",
    current: true,
    highlights: [
      "Designed a multi-tenant AWS Redshift warehouse integrating 15+ source systems, achieving sub-2-minute refresh times via query optimization, partitioning, and incremental loading.",
      "Built a metadata-driven PostgreSQL onboarding framework that cut cross-tenant dependency by 90%+, compressing client onboarding from days to hours.",
      "Engineered AWS Glue (PySpark) ETL pipelines for complex nested JSON at scale, increasing ingestion throughput by 6× while improving fault tolerance.",
      "Implemented an enterprise data quality and governance layer that reduced defect rates and reprocessing effort by 25%, directly improving reliability of business-critical reporting.",
      "Deployed end-to-end structured logging and alerting, cutting mean time-to-resolution by 480 minutes across production pipelines.",
      "Developed REST APIs with optimized pagination, reducing client application response latency by 200ms.",
      "Automated CI/CD pipelines, Docker deployments, schema migrations, and CloudFormation infrastructure provisioning.",
      "Implemented zero-trust cloud security via IAM, VPC Endpoints, and AWS KMS encryption without compromising performance SLAs.",
    ],
    tags: ["AWS Glue", "Redshift", "PySpark", "PostgreSQL", "CloudFormation", "KMS", "CI/CD", "Docker"],
  },
  {
    id: "doe",
    title: "Data Analyst",
    company: "Department of Energy",
    period: "Aug 2023 – Jan 2024",
    location: "Buffalo, NY",
    current: false,
    highlights: [
      "Built analytical models over 5+ years of weather and infrastructure data using SQL and Tableau.",
      "Identified high-risk infrastructure zones that informed preparedness initiatives for 15,000+ residents.",
    ],
    tags: ["SQL", "Tableau", "Risk Modeling"],
  },
  {
    id: "lt",
    title: "Data Engineer",
    company: "Larsen & Toubro Group",
    period: "Sept 2020 – July 2022",
    location: "Bangalore, India",
    current: false,
    highlights: [
      "Designed and operated scalable ETL pipelines using Azure Data Factory and Databricks, processing 500+ daily operational records within SLA windows.",
      "Built analytics-ready warehouse tables in ADLS Gen2 supporting SQL-based reporting across business units.",
      "Introduced Git-based branching workflows that reduced deployment errors by 40%+ and improved release turnaround by 30%.",
      "Delivered a PySpark and Delta Lake data quality framework that cut incorrect Power BI analytical output by ~30%.",
    ],
    tags: ["Azure ADF", "Databricks", "PySpark", "Delta Lake", "ADLS Gen2", "Power BI"],
  },
  {
    id: "dae",
    title: "Data & Process Optimization Intern",
    company: "Department of Atomic Energy",
    period: "Apr 2018 – Aug 2018",
    location: "Hyderabad, India",
    current: false,
    highlights: [
      "Developed data processing workflows and KPI identification models using Excel, MATLAB, and R for process optimization.",
    ],
    tags: ["MATLAB", "R", "Excel"],
  },
];

export default function Experience() {
  const [active, setActive] = useState("cognizant");
  const job = jobs.find((j) => j.id === active)!;

  return (
    <section id="experience" className="py-24 border-t border-wire">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Experience</p>
        <h2 className="font-display text-4xl font-bold text-white mb-12 leading-tight">
          Where the pipelines ran.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tab list */}
          <div className="flex md:flex-col gap-2">
            {jobs.map((j) => (
              <button
                key={j.id}
                onClick={() => setActive(j.id)}
                className={`text-left px-4 py-3 rounded-lg border transition-all duration-200 text-sm ${
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

          {/* Detail panel */}
          <div className="md:col-span-2 p-6 rounded-xl border border-wire bg-surface-raised">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-6">
              <div>
                <h3 className="font-display text-xl font-bold text-white">{job.title}</h3>
                <p className="text-ash text-sm mt-0.5">{job.company} · {job.location}</p>
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
