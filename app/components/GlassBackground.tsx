export default function GlassBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="glass-orb orb-blue" />
      <div className="glass-orb orb-teal" />
      <div className="glass-orb orb-violet" />
      <div className="glass-orb orb-blue-2" />
      <div className="absolute inset-0 bg-ink/40" />
    </div>
  );
}
