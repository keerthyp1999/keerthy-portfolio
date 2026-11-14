const groups = [
  { category: "Languages", items: ["SQL (Advanced)", "Python", "PySpark (Apache Spark)", "Bash"] },
  {
    category: "Data engineering",
    items: ["ETL/ELT", "Incremental Loads", "Metadata-Driven Pipelines", "Data Warehousing", "3NF Data Modeling", "Data Quality", "Reconciliation", "Data Analysis", "Delta Lake", "Medallion Architecture"],
  },
  {
    category: "Cloud and databases",
    items: ["PostgreSQL", "AWS Glue", "AWS Lambda", "S3", "EventBridge", "SNS", "CloudFormation", "Azure Data Factory", "Azure Databricks", "ADLS Gen2"],
  },
  { category: "DevOps and BI", items: ["Git", "CI/CD", "Docker", "Terraform", "Airflow", "Kafka", "Atlas (Schema Migrations)", "Power BI", "Tableau"] },
  { category: "AI-assisted engineering", items: ["Model Context Protocol (MCP)", "Claude", "GitHub Copilot"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Technical skills</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-12 leading-tight">
          The toolbox behind the pipelines.
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {groups.map((g) => (
            <div key={g.category} className="p-5 rounded-xl glass card-hover">
              <p className="font-mono text-sm text-white tracking-wide uppercase font-bold mb-4">
                {g.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
