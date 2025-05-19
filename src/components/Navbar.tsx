import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Bell, Settings, Sun } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Civiora AI</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
              <Sun className="h-6 w-6" />
            </button>
            <Link to="/settings" className="p-2 rounded-full text-gray-500 hover:text-gray-700">
              <Settings className="h-6 w-6" />
            </Link>
            <button className="ml-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;