import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Map, Ruler, Activity } from 'lucide-react';

const GreenSpaceOptimizer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Green Space Optimizer</h1>
        <p className="mt-1 text-sm text-gray-500">
          AI-powered suggestions for urban green space optimization
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Current Green Coverage</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <TreePine className="h-8 w-8 text-gray-400" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Optimization Suggestions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center">
                <Map className="h-5 w-5 text-green-600" />
                <span className="ml-2 font-medium text-green-900">Central Park Extension</span>
              </div>
              <p className="mt-1 text-sm text-green-700">Potential for 2.5 acres of new green space</p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center">
                <Ruler className="h-5 w-5 text-green-600" />
                <span className="ml-2 font-medium text-green-900">Riverside Development</span>
              </div>
              <p className="mt-1 text-sm text-green-700">Convert 1.8 acres of unused land</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center">
                <Activity className="h-5 w-5 text-green-600" />
                <span className="ml-2 font-medium text-green-900">Urban Forest Initiative</span>
              </div>
              <p className="mt-1 text-sm text-green-700">Plant 500 trees in identified locations</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GreenSpaceOptimizer;