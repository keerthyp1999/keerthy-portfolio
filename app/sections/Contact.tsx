const links = [
  { label: "Email", value: "vanamkeerthy1@gmail.com", href: "mailto:vanamkeerthy1@gmail.com" },
  { label: "Phone", value: "+1 716-923-5453", href: "tel:+17169235453" },
  { label: "LinkedIn", value: "linkedin.com/in/keerthy-priya-vanam", href: "https://linkedin.com/in/keerthy-priya-vanam" },
  { label: "GitHub", value: "github.com/keerthyp1999", href: "https://github.com/keerthyp1999" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-wire">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Contact</p>
        <h2 className="font-display text-4xl font-bold text-white mb-4 leading-tight">
          Let&apos;s build something reliable.
        </h2>
        <p className="text-ash mb-12 max-w-lg">
          I&apos;m open to data engineering roles where multi-tenant platforms, pipeline
          reliability, and report accuracy matter. Email is the fastest way to reach me.
        </p>

        <div className="grid md:grid-cols-2 gap-5 max-w-2xl">
          {links.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <a
                key={l.label}
                href={l.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="p-5 rounded-xl border border-wire bg-surface-raised card-hover group"
              >
                <p className="font-mono text-xs text-flow mb-1">{l.label}</p>
                <p className="text-ash-light text-sm font-medium group-hover:text-white transition-colors break-all">
                  {l.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
