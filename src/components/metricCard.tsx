import { motion } from 'framer-motion';
import { Wind, Droplets, Thermometer, Volume2 } from 'lucide-react';

const MetricCard = ({ title, value, change, icon: Icon }: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        <p className="mt-2 text-sm text-green-600">{change}</p>
      </div>
      <div className="p-3 bg-indigo-100 rounded-full">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
    </div>
  </motion.div>
);

export default MetricCard;
