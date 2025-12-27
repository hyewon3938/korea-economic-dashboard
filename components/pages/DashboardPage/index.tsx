import DashboardHeader from './components/DashboardHeader';
import DashboardMetrics from './components/DashboardMetrics';

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />
      <section>
        <DashboardMetrics />
      </section>
    </>
  );
}
