const projects = [
  {
    featured: true,
    title: "Real-Time Customer Analytics Platform",
    description:
      "End-to-end cloud-native analytics platform engineered for event-driven ingestion and sub-minute latency insights. Built on a medallion lakehouse architecture with full infrastructure-as-code automation.",
    impact: [
      "Kafka-powered ingestion handles burst loads without data loss",
      "Medallion architecture (bronze → silver → gold) enforces clean data contracts",
      "Airflow DAGs orchestrate 12 independent pipeline stages",
      "Terraform provisions the entire infrastructure in under 8 minutes",
    ],
    tech: ["Apache Kafka", "Databricks", "Delta Lake", "Airflow", "Terraform", "PySpark"],
    github: "https://github.com/keerthyp1999",
    color: "blue",
  },
  {
    featured: true,
    title: "Spark Performance Architecture Lab",
    description:
      "Production-style PySpark performance lab processing 1M+ synthetic records on AWS Glue. A deep-dive into distributed computing optimization with Spark UI-driven tuning, validated at each stage.",
    impact: [
      "Demonstrated 4× speed improvement via partition tuning and broadcast joins",
      "Compared repartition vs. coalesce strategies across shuffle-heavy joins",
      "Schema drift handling and idempotent reprocessing built in from the start",
      "Analyzed GC pressure and executor memory across job stages via Spark UI",
    ],
    tech: ["PySpark", "AWS Glue", "Delta Lake", "Spark UI", "S3"],
    github: "https://github.com/keerthyp1999",
    color: "teal",
  },
  {
    featured: true,
    title: "GoodNeighUBors — Buffalo Blizzard Needs Monitoring System",
    description:
      "Hackathon project: A full-stack community resilience platform combining 5+ years of historical blizzard and power outage data with live weather feeds to surface neighborhood-level vulnerability. Helps emergency planners identify at-risk zones before a storm hits, paired with a Next.js front-end delivering real-time alerts to residents most in need.",
    impact: [
      "Analyzed 5+ years of NOAA blizzard and utility outage records using Python and SQL to model compounded power outage risk by census tract",
      "Built interactive Tableau dashboards pinpointing vulnerable communities — enabling faster identification of high-risk zones for 15,000+ residents",
      "Designed optimized SQL analytical data models supporting exploratory analysis across large-scale regional weather and infrastructure datasets",
      "Delivered real-time blizzard alerts and a community needs registry via a Next.js web application with seamless UX",
    ],
    tech: ["Tableau", "SQL", "Python", "Next.js", "Data Management"],
    github: "https://opportunity.census.gov/showcase/?year=2023",
    color: "teal",
  },
];

const colorMap: Record<string, { badge: string; glow: string; dot: string }> = {
  blue: {
    badge: "bg-flow/10 border-flow/20 text-flow-bright",
    glow: "hover:shadow-flow/10",
    dot: "bg-flow",
  },
  teal: {
    badge: "bg-signal/10 border-signal/20 text-signal",
    glow: "hover:shadow-signal/10",
    dot: "bg-signal",
  },
  purple: {
    badge: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    glow: "hover:shadow-purple-500/10",
    dot: "bg-purple-400",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-wire">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Projects</p>
        <h2 className="font-display text-4xl font-bold text-white mb-4 leading-tight">
          Pipelines built from scratch.
        </h2>
        <p className="text-ash mb-12 max-w-lg">
          Side projects that explore the edges of what distributed data systems can do — with production-quality code and real performance benchmarks.
        </p>

        <div className="space-y-6">
          {projects.map((p) => {
            const c = colorMap[p.color];
            return (
              <div
                key={p.title}
                className={`group relative p-6 rounded-xl border border-wire bg-surface-raised card-hover hover:shadow-2xl ${c.glow} transition-shadow`}
              >
                {p.featured && (
                  <span className={`absolute top-5 right-5 text-xs font-mono px-2 py-0.5 rounded border ${c.badge}`}>
                    Featured
                  </span>
                )}

                <h3 className="font-display text-xl font-bold text-white mb-2 pr-20">{p.title}</h3>
                <p className="text-ash text-sm leading-relaxed mb-5">{p.description}</p>

                {/* Impact bullets */}
                <div className="mb-5 space-y-1.5">
                  {p.impact.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-ash">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ash hover:text-ash-light transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
