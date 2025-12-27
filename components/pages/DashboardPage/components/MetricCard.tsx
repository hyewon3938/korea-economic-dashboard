type MetricCardProps = {
  type: 'bond' | 'spread' | 'fx';
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
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4">
      <div className="text-sm text-neutral-600">{title}</div>

      <div className="mt-2 text-2xl font-semibold text-neutral-900">
        {valueText}
      </div>

      {/* 타입별 추가 표현 */}
      {type === 'fx' && (
        <div className="mt-2 text-xs text-neutral-500">
          외환보유액 4,203.1 USD bn (2025.11 · BOK)
        </div>
      )}

      {type === 'spread' && (
        <span className="inline-flex items-center rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700">
          정상 상태
        </span>
      )}

      {/* {type === 'spread' && (
        <span className="inline-flex items-center rounded bg-neutral-200 px-2 py-0.5 text-xs text-neutral-800">
          역전 상태
        </span>
      )} */}

      {metaText && (
        <div className="mt-3 text-xs text-neutral-500">{metaText}</div>
      )}
    </div>
  );
}
