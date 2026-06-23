const certs = [
  "Databricks Certified Data Engineer Associate",
  "Microsoft Certified: Azure Data Engineer Associate",
  "The Complete SQL Bootcamp",
  "Introduction to Data Engineering",
  "INTRODUCTION TO MATLAB",
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-wire">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: narrative */}
          <div>
            <p className="section-label mb-4">About</p>
            <h2 className="font-display text-4xl font-bold text-white mb-6 leading-tight">
              A mechanical engineer who fell in love with data infrastructure.
            </h2>
            <p className="text-ash leading-relaxed mb-4">
              My background in mechanical engineering gave me an obsession with system reliability —
              a single weak link breaks everything. I applied that same mindset to data ecosystems,
              where a flawed pipeline can silently corrupt decisions across an entire organization.
            </p>
            <p className="text-ash leading-relaxed mb-4">
              Today I architect multi-tenant cloud warehouses, build metadata-driven frameworks that
              cut onboarding time from weeks to hours, and embed observability deep enough that the
              team knows <em className="text-ash-light not-italic">why</em> something failed before the on-call alert fires.
            </p>
            <p className="text-ash leading-relaxed">
              I bridge the gap between raw infrastructure and business outcomes — from writing
              optimized SQL at 3 a.m. to walking a stakeholder through a Tableau dashboard the
              next morning.
            </p>
          </div>

          {/* Right: stack + certs */}
          <div className="space-y-8">
            {/* Core stack */}
            <div className="p-6 rounded-xl border border-wire bg-surface-raised">
              <p className="font-mono text-xs text-flow mb-4 tracking-widest uppercase">Core Stack</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "AWS", sub: "Glue · Redshift · EMR · KMS" },
                  { label: "Azure", sub: "ADF · Synapse · ADLS Gen2" },
                  { label: "PySpark", sub: "Databricks · Delta Lake" },
                  { label: "PostgreSQL", sub: "3NF modeling · indexing" },
                  { label: "Python", sub: "ETL · REST APIs · automation" },
                  { label: "Terraform", sub: "CloudFormation · CI/CD" },
                ].map((item) => (
                  <div key={item.label} className="p-3 rounded-lg border border-wire/50 bg-ink/40">
                    <div className="font-mono text-sm text-ash-light font-medium">{item.label}</div>
                    <div className="font-mono text-xs text-ash mt-0.5 leading-tight">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-xl border border-wire bg-surface-raised">
              <p className="font-mono text-xs text-flow mb-4 tracking-widest uppercase">Certifications</p>
              <ul className="space-y-2">
                {certs.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-signal flex-shrink-0" />
                    <span className="text-ash text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="p-6 rounded-xl border border-wire bg-surface-raised">
              <p className="font-mono text-xs text-flow mb-4 tracking-widest uppercase">Education</p>
              <div className="space-y-4">
                <div>
                  <p className="text-ash-light font-medium text-sm">M.S. Engineering Science — Data Science</p>
                  <p className="text-ash text-xs mt-0.5">University at Buffalo, SUNY · GPA 3.7 · 2022–2024</p>
                </div>
                <div className="border-t border-wire pt-4">
                  <p className="text-ash-light font-medium text-sm">B.Tech — Mechanical Engineering</p>
                  <p className="text-ash text-xs mt-0.5">JNTU India · GPA 3.78 · 2016–2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
