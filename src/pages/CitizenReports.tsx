import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, MapPin, Camera, Send } from 'lucide-react';

const CitizenReports = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Citizen Reports</h1>
        <p className="mt-1 text-sm text-gray-500">
          Submit and track community issues
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Submit New Report</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Issue Type</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option>Infrastructure</option>
                <option>Environmental</option>
                <option>Safety</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Describe the issue..."
              />
            </div>

            <div className="flex space-x-4">
              <button type="button" className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                <MapPin className="h-4 w-4 mr-2" />
                Add Location
              </button>
              <button type="button" className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Camera className="h-4 w-4 mr-2" />
                Add Photo
              </button>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Send className="h-4 w-4 mr-2" />
              Submit Report
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Reports</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-gray-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Broken Street Light</p>
                  <p className="text-xs text-gray-500">2 hours ago • In Progress</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-gray-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Water Leakage</p>
                  <p className="text-xs text-gray-500">5 hours ago • Under Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CitizenReports;