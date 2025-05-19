import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Send } from 'lucide-react';

const AIAssistant = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">AI Assistant</h1>
        <p className="mt-1 text-sm text-gray-500">
          Get instant answers about your city
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="h-[500px] p-6 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Brain className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="ml-3 bg-gray-100 rounded-lg p-3">
                <p className="text-gray-700">Hello! How can I help you understand your city better today?</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-100">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Ask me anything about the city..."
              className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIAssistant;