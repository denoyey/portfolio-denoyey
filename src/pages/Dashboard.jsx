import GithubStats from '../components/GithubStats';

const Dashboard = () => {
    return (
        <div className="flex flex-col items-start gap-8 min-h-screen p-2 text-slate-100">
            <DashboardHeader />
            <GithubStats />
        </div>
    );
};

const DashboardHeader = () => {
  return (
    <section className="space-y-2 w-full">
      <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
      <p className="text-slate-300 text-sm">
        Monitoring my coding activity, GitHub contributions, and personal development statistics in one centralized space.
      </p>
      <hr className="w-full border border-dashed mt-6 border-slate-700" />
    </section>
  );
};

export default Dashboard;