const stack = [
  { label: "AWS", sub: "Glue · Lambda · S3 · EventBridge · SNS" },
  { label: "PostgreSQL", sub: "3NF models · indexing · partitioning" },
  { label: "PySpark", sub: "Databricks · Delta Lake" },
  { label: "Azure", sub: "ADF · Databricks · ADLS Gen2" },
  { label: "Python & SQL", sub: "ETL · SQL-based APIs" },
  { label: "IaC & CI/CD", sub: "CloudFormation · Terraform · Docker" },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-4">About</p>
            <h2 className="font-display text-4xl font-bold text-white mb-6 leading-tight">
              A mechanical engineer who found the same problems in data.
            </h2>
            <p className="text-ash leading-relaxed mb-4">
              I started in mechanical engineering, where one weak component can fail a whole
              system. I now apply that thinking to data platforms: build for the next client,
              not only the current one.
            </p>
            <p className="text-ash leading-relaxed mb-4">
              At Stem Solutions, working for Verra Mobility through Cognizant, I grew a
              multi-tenant PostgreSQL warehouse from one client to five or six. Reusable
              models, SQL functions, and metadata-driven Glue pipelines meant each new
              client needed configuration rather than a rebuild.
            </p>
            <p className="text-ash leading-relaxed">
              I also care about what happens after the pipeline runs: automated validation,
              reconciliation, and monitoring keep client-facing reports at 99.9% accuracy
              without someone watching every job.
            </p>
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
                  <p className="text-ash-light font-medium text-sm">B.Tech, Mechanical Engineering</p>
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
