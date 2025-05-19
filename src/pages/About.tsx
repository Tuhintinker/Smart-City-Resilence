import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Users, TreePine, Github } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6 max-w-4xl mx-auto"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">About Civiora AI</h1>
        <p className="mt-2 text-lg text-gray-600">
          Empowering smart cities with intelligence and sustainability
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-600">
            To revolutionize urban management through AI-powered insights, making cities smarter, safer, and more sustainable for everyone.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-900">Our Vision</h2>
          </div>
          <p className="text-gray-600">
            Creating resilient cities that adapt to challenges while maintaining harmony between urban development and nature.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <TreePine className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-medium text-gray-900">Environmental Analytics</h3>
              <p className="text-sm text-gray-600">Real-time monitoring of air quality, water quality, and green spaces</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Shield className="h-6 w-6 text-red-600" />
            <div>
              <h3 className="font-medium text-gray-900">Disaster Resilience</h3>
              <p className="text-sm text-gray-600">Early warning systems and disaster management tools</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Users className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="font-medium text-gray-900">Community Engagement</h3>
              <p className="text-sm text-gray-600">Platform for citizens to report and track urban issues</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Brain className="h-6 w-6 text-purple-600" />
            <div>
              <h3 className="font-medium text-gray-900">AI Assistant</h3>
              <p className="text-sm text-gray-600">Intelligent chatbot for city-related queries</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Open Source</h2>
        <div className="flex items-center space-x-4">
          <Github className="h-6 w-6 text-gray-700" />
          <div>
            <p className="text-gray-600">
              Civiora AI is open source and available on GitHub. Contributions are welcome!
            </p>
            <a
              href="https://github.com/your-repo/civiora-ai"
              className="inline-flex items-center mt-2 text-indigo-600 hover:text-indigo-700"
            >
              View on GitHub
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;