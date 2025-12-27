export default function MetricCard() {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4">
      {/* 지표 이름 */}
      <div className="text-sm text-neutral-600">국고채 10년</div>

      {/* 지표 값 */}
      <div className="mt-2 flex items-end gap-1">
        <span className="text-2xl font-semibold text-neutral-900">3.35</span>
        <span className="text-sm text-neutral-500">%</span>
      </div>

      {/* 기준 시각 / 출처 */}
      <div className="mt-3 text-xs text-neutral-500">기준 2025.12.26 · KRX</div>
    </div>
  );
}
