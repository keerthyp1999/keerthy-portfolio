const skillGroups = [
  {
    category: "Cloud & Infrastructure",
    icon: "☁",
    skills: [
      { name: "AWS (Glue, Redshift, EMR, S3, KMS, IAM, VPC)", level: 95 },
      { name: "Azure (ADF, Synapse, ADLS Gen2)", level: 85 },
      { name: "Terraform / CloudFormation", level: 80 },
      { name: "Docker / CI/CD Pipelines", level: 80 },
    ],
  },
  {
    category: "Data Engineering",
    icon: "⚙",
    skills: [
      { name: "PySpark / Databricks / Delta Lake", level: 92 },
      { name: "ETL/ELT Pipeline Design", level: 95 },
      { name: "Data Warehousing (Redshift, PostgreSQL)", level: 90 },
      { name: "Data Modeling (3NF, Lakehouse Medallion)", level: 88 },
    ],
  },
  {
    category: "Programming & Query",
    icon: "</>",
    skills: [
      { name: "Python (ETL, APIs, automation)", level: 90 },
      { name: "SQL (complex queries, optimization)", level: 93 },
      { name: "Scala (Spark)", level: 65 },
      { name: "Shell Scripting", level: 70 },
    ],
  },
  {
    category: "Data Quality & Observability",
    icon: "◎",
    skills: [
      { name: "Data Quality Frameworks", level: 88 },
      { name: "Monitoring, Logging & Alerting", level: 87 },
      { name: "Governance & Reconciliation", level: 85 },
      { name: "CDC / Incremental Processing", level: 82 },
    ],
  },
  {
    category: "Visualization & Analytics",
    icon: "▦",
    skills: [
      { name: "Tableau", level: 78 },
      { name: "Power BI", level: 75 },
    ],
  },
  {
    category: "Streaming & Orchestration",
    icon: "⇌",
    skills: [
      { name: "Apache Kafka", level: 75 },
      { name: "Apache Airflow", level: 78 },
      { name: "Workflow Scheduling & Event-Driven Design", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-wire">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Technical Skills</p>
        <h2 className="font-display text-4xl font-bold text-white mb-12 leading-tight">
          The toolbox behind the pipelines.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-xl border border-wire bg-surface-raised card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-lg text-flow">{group.icon}</span>
                <p className="font-mono text-xs text-ash-light tracking-wide uppercase font-medium">
                  {group.category}
                </p>
              </div>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-ash text-xs">{skill.name}</span>
                      <span className="font-mono text-xs text-ash">{skill.level}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-wire overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          background: "linear-gradient(90deg, #3B6FFF, #00D9A3)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-10 p-5 rounded-xl border border-wire bg-surface-raised">
          <p className="font-mono text-xs text-ash-light tracking-wide uppercase font-medium mb-4">Languages</p>
          <div className="flex flex-wrap gap-3">
            {["English (Full Professional)", "Telugu (Full Professional)", "Hindi (Full Professional)"].map((l) => (
              <span key={l} className="chip chip-signal">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
