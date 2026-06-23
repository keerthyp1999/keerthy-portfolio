export default function Footer() {
  return (
    <footer className="border-t border-wire py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ash">
          © {new Date().getFullYear()} Keerthy Priya Vanam · Built to last, like a good pipeline.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/keerthyp1999" target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-ash hover:text-ash-light transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/keerthy-priya-vanam" target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-ash hover:text-ash-light transition-colors">LinkedIn</a>
          <a href="mailto:vanamkeerthy1@gmail.com"
            className="font-mono text-xs text-ash hover:text-ash-light transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
