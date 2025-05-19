import React from 'react';
import { 
  Wind, 
  Droplets, 
  Thermometer, 
  TreePine, 
  AlertTriangle,
  Users,
  ArrowUp,
  ArrowDown,
  Activity
} from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }: {
  title: string;
  value: string;
  icon: React.ElementType;
  trend?: 'up' | 'down';
  trendValue?: string;
  color: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-100 transition-colors">
    <div className="flex items-center">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="ml-4 flex-1">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="flex items-baseline justify-between mt-1">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          {trend && trendValue && (
            <div className={`flex items-center text-sm ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {trend === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
              <span className="ml-1">{trendValue}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ActivityCard = ({ title, time, description, icon: Icon, color }: {
  title: string;
  time: string;
  description: string;
  icon: React.ElementType;
  color: string;
}) => (
  <div className="flex items-center p-4 bg-white rounded-lg border border-gray-100">
    <div className={`p-2 rounded-lg ${color}`}>
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div className="ml-4">
      <div className="flex items-center">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <span className="ml-2 text-xs text-gray-500">{time}</span>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">City Overview</h1>
        <p className="mt-1 text-sm text-gray-500">
          Real-time environmental metrics and city health indicators
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Air Quality Index"
          value="42 AQI"
          icon={Wind}
          trend="down"
          trendValue="-8% this week"
          color="bg-blue-500"
        />
        <StatCard
          title="Water Quality"
          value="95%"
          icon={Droplets}
          trend="up"
          trendValue="+2.3%"
          color="bg-cyan-500"
        />
        <StatCard
          title="Temperature"
          value="24°C"
          icon={Thermometer}
          trend="up"
          trendValue="+1.5°C"
          color="bg-orange-500"
        />
        <StatCard
          title="Green Coverage"
          value="32%"
          icon={TreePine}
          trend="up"
          trendValue="+2%"
          color="bg-emerald-500"
        />
        <StatCard
          title="Active Alerts"
          value="2"
          icon={AlertTriangle}
          color="bg-red-500"
        />
        <StatCard
          title="Citizen Reports"
          value="156"
          icon={Users}
          trend="up"
          trendValue="+24 today"
          color="bg-indigo-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <ActivityCard
              title="Flash Flood Warning"
              time="2 hours ago"
              description="Eastern District - Moderate to heavy rainfall expected"
              icon={AlertTriangle}
              color="bg-red-500"
            />
            <ActivityCard
              title="Air Quality Alert"
              time="4 hours ago"
              description="Central Zone - AQI levels exceeding safety threshold"
              icon={Wind}
              color="bg-yellow-500"
            />
            <ActivityCard
              title="System Update"
              time="6 hours ago"
              description="New environmental sensors deployed in North Zone"
              icon={Activity}
              color="bg-blue-500"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Green Space Analysis</h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center h-48 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
              <div className="text-center">
                <TreePine className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">Interactive map visualization coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;