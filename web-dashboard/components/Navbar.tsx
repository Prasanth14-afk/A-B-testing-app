'use client';

import { Calendar, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-64 z-10">
      <div className="h-full px-8 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            A/B Testing Results Overview
          </h1>
          <p className="text-sm text-gray-500">Cookie Cats Experiment Analysis</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">Last 30 days</span>
          </button>

          <div className="w-px h-8 bg-gray-200"></div>

          <button className="flex items-center gap-3 hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
