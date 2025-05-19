import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Brain, Shield, Users, TreePine } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
  >
    <div className="flex items-center space-x-4">
      <div className="p-2 bg-indigo-100 rounded-lg">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Landing = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Welcome to Civiora AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600"
        >
          Empowering smart cities with intelligence and sustainability
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        <FeatureCard
          icon={Brain}
          title="AI-Powered Insights"
          description="Advanced analytics and predictions for better urban planning"
        />
        <FeatureCard
          icon={Shield}
          title="Disaster Resilience"
          description="Early warning systems and real-time disaster monitoring"
        />
        <FeatureCard
          icon={Users}
          title="Community Engagement"
          description="Direct citizen participation in urban development"
        />
        <FeatureCard
          icon={TreePine}
          title="Environmental Focus"
          description="Green space optimization and sustainability metrics"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <button
          onClick={() => navigate('/dashboard')}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Start Exploring
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Landing;