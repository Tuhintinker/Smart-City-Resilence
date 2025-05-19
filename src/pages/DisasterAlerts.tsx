import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CloudRain, Thermometer, Wind } from 'lucide-react';

const DisasterAlerts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Disaster Alerts</h1>
        <p className="mt-1 text-sm text-gray-500">
          Real-time monitoring and early warning system
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800">High Priority Alert</h3>
              <p className="text-sm text-red-700">Flash Flood Warning in Eastern District</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
          <div className="flex items-center">
            <Thermometer className="h-6 w-6 text-yellow-600" />
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800">Heat Wave Alert</h3>
              <p className="text-sm text-yellow-700">Expected temperatures above 38°C</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Active Monitoring</h2>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <CloudRain className="h-5 w-5 text-gray-600" />
              <span className="ml-2 text-gray-700">Rainfall Intensity: Normal</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Wind className="h-5 w-5 text-gray-600" />
              <span className="ml-2 text-gray-700">Wind Speed: 15 km/h</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Risk Assessment Map</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Interactive map coming soon...</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DisasterAlerts;