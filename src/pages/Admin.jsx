// App.jsx
import React from 'react';
import { Menu, LayoutDashboard, User, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4 space-y-6 hidden md:block">
      <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
      <nav className="space-y-4">
        <a href="#" className="flex items-center gap-2 hover:text-blue-400">
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-blue-400">
          <User className="w-5 h-5" />
          Users
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-blue-400">
          <Settings className="w-5 h-5" />
          Settings
        </a>
      </nav>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="bg-white shadow-md flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <Menu className="md:hidden w-6 h-6" />
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
      <div className="text-sm text-gray-600">Welcome, Admin</div>
    </div>
  );
};

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <div className="bg-white shadow-md p-6 rounded-2xl">
        <h3 className="text-lg font-semibold">Total Users</h3>
        <p className="text-2xl mt-2">1,234</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-2xl">
        <h3 className="text-lg font-semibold">New Orders</h3>
        <p className="text-2xl mt-2">567</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-2xl">
        <h3 className="text-lg font-semibold">Pending Tasks</h3>
        <p className="text-2xl mt-2">42</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />
        <main className="p-6">
          <DashboardCards />
          {/* More admin content here */}
        </main>
      </div>
    </div>
  );
};

export default App;
