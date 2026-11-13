const projects = [
  {
    title: "Real-Time Customer Analytics Platform",
    tag: "Featured",
    description:
      "A cloud-native streaming platform that takes events from ingestion to analytics-ready tables, with infrastructure defined in code.",
    points: [
      "Medallion architecture (bronze, silver, gold) for clean layering of raw and curated data",
      "Event-driven ingestion with Kafka feeding Databricks and Delta Lake",
      "Terraform-managed infrastructure and Airflow orchestration",
      "Automated data-quality checks built into the flow",
    ],
    tech: ["Kafka", "Databricks", "Delta Lake", "Airflow", "Terraform"],
    accent: "bg-flow",
    github: "https://github.com/keerthyp1999/real-time-customer-analytics-platform",
  },
  {
    title: "Spark Performance Lab",
    tag: "Featured",
    description:
      "A PySpark ETL lab on AWS Glue over 1M+ records, built to show how each tuning choice changes job behavior in the Spark UI.",
    points: [
      "Partitioning and repartitioning strategies compared on the same workload",
      "Broadcast versus sort-merge joins, plus caching",
      "Schema drift handling in the pipeline",
      "Tuning decisions driven by Spark UI metrics",
    ],
    tech: ["PySpark", "AWS Glue", "Spark UI"],
    accent: "bg-signal",
    github: "https://github.com/keerthyp1999/spark-performance-architecture-lab",
  },
  {
    title: "Weather-Risk Analytics Hackathon",
    tag: "Selected from ~2,000 applicants",
    description:
      "SQL models over five years of weather and infrastructure data, paired with Tableau risk maps that identify snowstorm-vulnerable zones.",
    points: [
      "Identified areas affecting roughly 15,000 residents",
      "Turned raw weather and infrastructure records into maps planners can read",
    ],
    tech: ["SQL", "Tableau", "Data analysis"],
    accent: "bg-purple-400",
    github: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-wire">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Projects</p>
        <h2 className="font-display text-4xl font-bold text-white mb-4 leading-tight">
          Pipelines built from scratch.
        </h2>
        <p className="text-ash mb-12 max-w-lg">
          Personal projects where I test architecture choices end to end. Two are open source on GitHub.
        </p>

        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative p-6 rounded-xl border border-wire bg-surface-raised card-hover">
              <span className="absolute top-5 right-5 text-xs font-mono px-2 py-0.5 rounded border border-wire text-ash">
                {p.tag}
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-2 pr-32">{p.title}</h3>
              <p className="text-ash text-sm leading-relaxed mb-5">{p.description}</p>

              <div className="mb-5 space-y-1.5">
                {p.points.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-ash">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.accent}`} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ash hover:text-ash-light transition-colors"
                >
                  View on GitHub
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
