const Dashboard = () => {
    return (
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Your Dashboard</h2>
  
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Project Status</h3>
            <p className="text-gray-700">Track your team's progress and manage tasks here.</p>
          </div>
  
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Team Members</h3>
            <p className="text-gray-700">View and manage your teammates working on this hackathon.</p>
          </div>
  
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Submissions</h3>
            <p className="text-gray-700">Submit your final project before the deadline.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Dashboard;
  