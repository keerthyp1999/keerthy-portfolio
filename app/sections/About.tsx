const stack = [
  { label: "AWS", sub: "Glue · Lambda · S3 · EventBridge · SNS" },
  { label: "PostgreSQL", sub: "3NF models · indexing · partitioning" },
  { label: "PySpark", sub: "Databricks · Delta Lake" },
  { label: "Azure", sub: "ADF · Databricks · ADLS Gen2" },
  { label: "Python & SQL", sub: "ETL · SQL-based APIs" },
  { label: "IaC & CI/CD", sub: "CloudFormation · Terraform · Docker" },
];

const traits = [
  {
    title: "Calm under pressure",
    proof: "Reports that clients rely on hold at 99.9% accuracy, run after run.",
  },
  {
    title: "Deadlines met",
    proof: "Every scheduled pipeline run landed inside its SLA window at L&T.",
  },
  {
    title: "Any problem, fully owned",
    proof: "Pipelines, reports, migrations, dashboards: I pick it up and see it through.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Hand me the problem. I&apos;ll see it through.
            </h2>
            <p className="text-ash leading-relaxed mb-4">
              I&apos;m the teammate you give the hard, unglamorous task to and then stop worrying
              about. Building pipelines, untangling a slow query, migrating a schema tool,
              designing a dashboard for planners: whatever the work is, I take it seriously,
              learn what I need to learn, and finish it properly.
            </p>
            <p className="text-ash leading-relaxed mb-4">
              Pressure doesn&apos;t change how I work. When clients read reports that my pipelines
              produce, the job is the same on a quiet day and on a tight deadline: stay steady,
              check the work twice, and deliver on time.
            </p>
            <p className="text-ash leading-relaxed mb-8">
              Today that means multi-tenant data platforms on AWS Glue, PySpark, and PostgreSQL
              at Stem Solutions, where each new client goes live through configuration instead
              of a rebuild.
            </p>

            <div className="grid sm:grid-cols-3 gap-3">
              {traits.map((t) => (
                <div key={t.title} className="p-4 rounded-xl glass card-hover">
                  <p className="font-display text-base font-extrabold text-white mb-1.5">{t.title}</p>
                  <p className="text-xs text-ash leading-relaxed">{t.proof}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl glass">
              <p className="font-mono text-xs text-flow mb-4 tracking-widest uppercase">Core stack</p>
              <div className="grid grid-cols-2 gap-3">
                {stack.map((item) => (
                  <div key={item.label} className="p-3 rounded-lg glass-soft">
                    <div className="font-mono text-sm text-ash-light font-medium">{item.label}</div>
                    <div className="font-mono text-xs text-ash mt-0.5 leading-tight">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl glass">
              <p className="font-mono text-xs text-flow mb-4 tracking-widest uppercase">Education</p>
              <div className="space-y-4">
                <div>
                  <p className="text-ash-light font-medium text-sm">M.S. Engineering Science (Data Science)</p>
                  <p className="text-ash text-xs mt-0.5">University at Buffalo, SUNY · GPA 3.7 / 4.0 · 2022–2024</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-ash-light font-medium text-sm">Bachelor of Technology</p>
                  <p className="text-ash text-xs mt-0.5">Jawaharlal Nehru Technological University · GPA 3.78 / 4.0 · 2016–2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
