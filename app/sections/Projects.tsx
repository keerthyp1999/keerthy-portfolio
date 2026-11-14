type Point = { lead: string; text: string };

const projects: {
  title: string;
  tag: string;
  description: string;
  points: Point[];
  tech: string[];
  accent: string;
  github: string;
}[] = [
  {
    title: "Real-Time Customer Analytics Platform",
    tag: "Featured",
    description:
      "Events in, decisions out. A streaming platform that carries customer events from Kafka through Databricks into analytics-ready tables, with every piece of infrastructure created from code.",
    points: [
      { lead: "Layered on purpose.", text: "A medallion design keeps raw events, cleaned data, and analytics tables in separate layers." },
      { lead: "Event-driven from the start.", text: "Kafka feeds Delta Lake on Databricks as events arrive, with no waiting for a nightly batch." },
      { lead: "Rebuildable on demand.", text: "Terraform defines the environment and Airflow schedules the work, so the whole platform can be recreated from the repo." },
      { lead: "Quality gates built in.", text: "Automated data-quality checks run as part of the flow instead of after the fact." },
    ],
    tech: ["Kafka", "Databricks", "Delta Lake", "Airflow", "Terraform"],
    accent: "bg-flow",
    github: "https://github.com/keerthyp1999/real-time-customer-analytics-platform",
  },
  {
    title: "Spark Performance Lab",
    tag: "Featured",
    description:
      "A lab built around one question: why is my Spark job slow? It runs 1M+ records through AWS Glue and uses the Spark UI to prove whether each fix worked.",
    points: [
      { lead: "Partitioning experiments.", text: "Tested different partitioning and repartitioning setups on the same workload and read the results in the Spark UI." },
      { lead: "Join strategy showdown.", text: "Broadcast and sort-merge joins, plus caching, compared side by side." },
      { lead: "Built to survive schema drift.", text: "The pipeline keeps running when incoming columns change instead of failing." },
      { lead: "Evidence over guesswork.", text: "Every tuning decision is backed by a metric, not a hunch." },
    ],
    tech: ["PySpark", "AWS Glue", "Spark UI"],
    accent: "bg-signal",
    github: "https://github.com/keerthyp1999/spark-performance-architecture-lab",
  },
  {
    title: "Weather-Risk Analytics Hackathon",
    tag: "Selected from ~2,000 applicants",
    description:
      "Which neighborhoods are hit hardest when a snowstorm lands? Five years of weather and infrastructure data, modeled in SQL and mapped in Tableau.",
    points: [
      { lead: "Picked from a crowded field.", text: "Selected from roughly 2,000 applicants." },
      { lead: "Risk you can see.", text: "Tableau maps highlight the zones most vulnerable to snowstorms, covering about 15,000 residents." },
    ],
    tech: ["SQL", "Tableau", "Data analysis"],
    accent: "bg-purple-400",
    github: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Projects</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          Pipelines built from scratch.
        </h2>
        <p className="text-ash mb-12 max-w-lg">
          Personal projects where I test architecture choices end to end. Two are open source on GitHub.
        </p>

        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative p-6 rounded-xl glass card-hover">
              <span className="absolute top-5 right-5 text-xs font-mono px-2 py-0.5 rounded border border-white/15 text-ash">
                {p.tag}
              </span>
              <h3 className="font-display text-2xl font-extrabold text-white mb-2 pr-32">{p.title}</h3>
              <p className="text-ash text-sm leading-relaxed mb-5">{p.description}</p>

              <div className="mb-5 space-y-2">
                {p.points.map((item) => (
                  <div key={item.lead} className="flex items-start gap-2 text-sm text-ash leading-relaxed">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.accent}`} />
                    <span>
                      <strong className="text-white font-semibold">{item.lead}</strong> {item.text}
                    </span>
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
