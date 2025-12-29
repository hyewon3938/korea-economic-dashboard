type MetricCardProps = {
  type: 'bondShort' | 'bondLong' | 'spread' | 'fx';
  title: string;
  valueText: string;
  metaText?: string;
};
export default function MetricCard({
  type,
  title,
  valueText,
  metaText,
}: MetricCardProps) {
  const bgMap = {
    bondShort: 'bg-[#F2DE7A]', // 크림 옐로우
    bondLong: 'bg-[#E8A07A]', // 피치/살구
    spread: 'bg-[#BDEB74]', // 라임 그린
    fx: 'bg-[#9FD3F6]', // 파스텔 블루
  } as const;

  return (
    <div
      className={`rounded-xl p-4 shadow-sm ${bgMap[type]} border border-black/10`}
    >
      <div className="text-sm font-medium text-neutral-800">{title}</div>

      <div className="mt-2 text-2xl font-semibold text-neutral-950">
        {valueText}
      </div>

      {type === 'fx' && (
        <div className="mt-2 text-xs text-neutral-800/80">
          외환보유액 4,203.1 USD bn (2025.11 · BOK)
        </div>
      )}

      {type === 'spread' && (
        <span className="mt-2 inline-flex rounded bg-black/10 px-2 py-0.5 text-xs text-neutral-900">
          정상 상태
        </span>
      )}

      {metaText && (
        <div className="mt-3 text-xs text-neutral-800/70">{metaText}</div>
      )}
    </div>
  );
}
