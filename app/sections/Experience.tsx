"use client";
import { useState } from "react";

type Point = { lead: string; text: string };

const jobs: {
  id: string;
  title: string;
  company: string;
  client: string;
  period: string;
  location: string;
  current: boolean;
  highlights: Point[];
  tags: string[];
}[] = [
  {
    id: "stem",
    title: "Data Engineer",
    company: "Stem Solutions LLC",
    client: "Client: Verra Mobility, via Cognizant",
    period: "Apr 2024 – Present",
    location: "Remote, US",
    current: true,
    highlights: [
      {
        lead: "One warehouse, many clients.",
        text: "Designed the PostgreSQL warehouse so every new client reuses the same models, normalized schemas, and SQL functions. It has grown from one client to five or six on that shared design.",
      },
      {
        lead: "Onboarding by configuration.",
        text: "Wrote Glue and PySpark pipelines that take their instructions from metadata. A new client now means 3–4 weeks of setup instead of new pipeline code, while millions of records still flow through twice a day.",
      },
      {
        lead: "Reports on demand.",
        text: "Built 20+ CSV report types per client on Glue, Lambda, and S3. Clients choose a date range and pull what they need, with no ticket to the data team.",
      },
      {
        lead: "Faster APIs.",
        text: "Read the execution plans, found the slow paths, and fixed them with composite indexes and partitioning. SQL-backed API calls fell from 350 ms to 150 ms.",
      },
      {
        lead: "Numbers people can trust.",
        text: "Validation, reconciliation, and monitoring run inside the ETL workflows, which holds client-facing reports at 99.9% accuracy and removes most manual checking.",
      },
      {
        lead: "A cleaner migration path.",
        text: "Moved schema management from Hasura to Atlas, so every database change is version-controlled and reviewable. It was part of roughly $50K in savings.",
      },
      {
        lead: "AI in the daily loop.",
        text: "Use Claude, MCP, VS Code, and Azure DevOps to draft code, check it, and prepare pull requests faster.",
      },
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
      {
        lead: "Income data, explained.",
        text: "Dug into demographic and household-income datasets with SQL to find the socioeconomic patterns behind community needs.",
      },
      {
        lead: "Dashboards for planners.",
        text: "Turned those findings into interactive Power BI dashboards that supported affordable housing and community development planning.",
      },
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
      {
        lead: "Daily runs that never missed.",
        text: "Automated 10+ transformations across Azure Data Factory and Databricks (PySpark, SQL, Delta Lake) and met the SLA on time, every run.",
      },
      {
        lead: "Answers 5× sooner.",
        text: "Published analytics-ready Delta Lake datasets on ADLS Gen2 for Power BI, so business teams got their insights five times faster.",
      },
      {
        lead: "Bad data, caught early.",
        text: "Added schema and quality checks that cut inaccurate analytical output by 30%.",
      },
      {
        lead: "Safer releases.",
        text: "Streamlined the Git-based CI/CD flow across environments: 40%+ fewer deployment errors and releases out 30% faster.",
      },
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
      {
        lead: "Fixing machines before they fail.",
        text: "Built predictive maintenance models on a hydraulic unit's digital twin. Equipment downtime dropped by 8 hours a day, worth $1M in savings.",
      },
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

            <ul className="space-y-4 mb-6">
              {job.highlights.map((h) => (
                <li key={h.lead} className="flex items-start gap-3 text-sm text-ash leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-flow flex-shrink-0" />
                  <span>
                    <strong className="text-white font-semibold">{h.lead}</strong> {h.text}
                  </span>
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
