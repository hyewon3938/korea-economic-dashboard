import MetricCard from './MetricCard';

export default function DashboardMetrics() {
  return (
    <section className="grid grid-cols-2 gap-3">
      <MetricCard />
      <MetricCard />
      <MetricCard />
      <MetricCard />
    </section>
  );
}
