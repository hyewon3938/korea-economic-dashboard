import MetricCard from './MetricCard';

export default function DashboardMetrics() {
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <MetricCard
          type="bondShort"
          title="국고채 3년"
          valueText="3.42 %"
          metaText="기준 2025.12.26 · KRX"
        />
        <MetricCard
          type="bondLong"
          title="국고채 10년"
          valueText="3.35 %"
          metaText="기준 2025.12.26 · KRX"
        />
        <MetricCard
          type="spread"
          title="국채 장단기 금리차"
          valueText="+0.45 %p"
          metaText="기준 2025.12.26 · derived"
        />
        <MetricCard
          type="fx"
          title="원/달러 환율"
          valueText="1,324 원"
          metaText="기준 2025.12.27 13:00 · (출처)"
        />
      </div>

      <p className="text-xs leading-relaxed text-neutral-500">
        ※ 본 지표는 경제 관측용 참고 정보입니다. 개별 수치는 산출 기준과 갱신
        주기가 다르므로, 종합적으로 해석하십시오.
      </p>
    </section>
  );
}
