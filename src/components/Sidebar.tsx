import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  LineChart,
  TreePine,
  AlertTriangle,
  MessageSquare,
  Map,
  FileSpreadsheet,
  Settings,
  Brain,
  Users,
  Info
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Environmental Analytics', icon: LineChart, href: '/environmental-analytics' },
  { name: 'Green Space Optimizer', icon: TreePine, href: '/green-space-optimizer' },
  { name: 'Disaster Alerts', icon: AlertTriangle, href: '/disaster-alerts' },
  { name: 'Citizen Reports', icon: MessageSquare, href: '/citizen-reports' },
  { name: 'Interactive Map', icon: Map, href: '/map' },
  { name: 'AI Assistant', icon: Brain, href: '/ai-assistant' },
  { name: 'Reports', icon: FileSpreadsheet, href: '/reports' },
  { name: 'Community', icon: Users, href: '/community' },
  { name: 'Settings', icon: Settings, href: '/settings' },
  { name: 'About', icon: Info, href: '/about' }
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="h-full px-3 py-4">
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Main
            </p>
            {navigation.slice(0, 1).map((item) => (
              <SidebarItem key={item.name} {...item} />
            ))}
          </div>

          <div className="space-y-1">
            <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Analytics
            </p>
            {navigation.slice(1, 4).map((item) => (
              <SidebarItem key={item.name} {...item} />
            ))}
          </div>

          <div className="space-y-1">
            <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Community
            </p>
            {navigation.slice(4, 7).map((item) => (
              <SidebarItem key={item.name} {...item} />
            ))}
          </div>

          <div className="space-y-1">
            <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Other
            </p>
            {navigation.slice(7).map((item) => (
              <SidebarItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ name, icon: Icon, href }: {
  name: string;
  icon: React.ElementType;
  href: string;
}) => (
  <Link
    to={href}
    className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-50 group"
  >
    <Icon className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-indigo-600" />
    <span className="ml-3">{name}</span>
  </Link>
);

export default Sidebar;