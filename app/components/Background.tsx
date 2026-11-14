export default function Background() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="orb orb-a w-[560px] h-[560px] -top-40 -left-32 bg-flow/35" />
      <div className="orb orb-b w-[520px] h-[520px] top-1/3 -right-40 bg-signal/20" />
      <div className="orb orb-a w-[480px] h-[480px] bottom-[-10%] left-1/4 bg-purple-500/25" />
      <div className="orb orb-b w-[360px] h-[360px] top-[60%] -left-24 bg-flow/20" />
    </div>
  );
}
