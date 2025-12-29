import DashboardHeader from './components/DashboardHeader';
import DashboardMetrics from './components/DashboardMetrics';

export default function DashboardPage() {
  return (
    <div className="h-full w-full space-y-6 px-4 py-6">
      <DashboardHeader />
      <DashboardMetrics />
    </div>
  );
}
