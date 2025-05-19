import React from 'react';
import { motion } from 'framer-motion';
import { Map as MapIcon, Layers, Filter } from 'lucide-react';

const InteractiveMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Interactive Map</h1>
          <p className="mt-1 text-sm text-gray-500">
            Explore city data through interactive layers
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
            <Layers className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="h-[600px] bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapIcon className="h-12 w-12 text-gray-400 mx-auto" />
            <p className="mt-2 text-sm text-gray-500">Interactive map coming soon...</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveMap;