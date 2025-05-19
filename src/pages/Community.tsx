import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, ThumbsUp, Share2 } from 'lucide-react';

const Community = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Community</h1>
        <p className="mt-1 text-sm text-gray-500">
          Connect with other citizens and share ideas
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Just participated in the weekend tree planting drive. Great to see so many community members coming together!
            </p>
            <div className="flex items-center space-x-4 text-gray-500">
              <button className="flex items-center space-x-1 hover:text-gray-700">
                <ThumbsUp className="h-4 w-4" />
                <span>24</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-gray-700">
                <MessageSquare className="h-4 w-4" />
                <span>12</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-gray-700">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Jane Smith</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              New bike lanes in the downtown area are making commuting so much easier and safer!
            </p>
            <div className="flex items-center space-x-4 text-gray-500">
              <button className="flex items-center space-x-1 hover:text-gray-700">
                <ThumbsUp className="h-4 w-4" />
                <span>18</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-gray-700">
                <MessageSquare className="h-4 w-4" />
                <span>8</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-gray-700">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Active Members</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">Environmental Advocate</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jane Smith</p>
                  <p className="text-xs text-gray-500">Urban Planner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900">Tree Planting Drive</p>
                <p className="text-xs text-gray-500">March 20, 2024 • 9:00 AM</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900">Community Cleanup</p>
                <p className="text-xs text-gray-500">March 25, 2024 • 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Community;