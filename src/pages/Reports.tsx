import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Filter } from 'lucide-react';

const Reports = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
          <p className="mt-1 text-sm text-gray-500">
            Generate and view city analytics reports
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <FileText className="h-4 w-4 mr-2" />
          Generate Report
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Reports</h2>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
            <Filter className="h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-gray-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Environmental Report - March 2024</p>
                <p className="text-xs text-gray-500">Generated on March 15, 2024</p>
              </div>
            </div>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <Download className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-gray-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Green Space Analysis - Q1 2024</p>
                <p className="text-xs text-gray-500">Generated on March 10, 2024</p>
              </div>
            </div>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reports;