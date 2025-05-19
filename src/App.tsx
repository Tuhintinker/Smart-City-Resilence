import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import EnvironmentalAnalytics from './pages/EnvironmentalAnalytics';
import GreenSpaceOptimizer from './pages/GreenSpaceOptimizer';
import DisasterAlerts from './pages/DisasterAlerts';
import CitizenReports from './pages/CitizenReports';
import InteractiveMap from './pages/InteractiveMap';
import AIAssistant from './pages/AIAssistant';
import Reports from './pages/Reports';
import Community from './pages/Community';
import Settings from './pages/Settings';
import About from './pages/About';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/environmental-analytics" element={<EnvironmentalAnalytics />} />
                <Route path="/green-space-optimizer" element={<GreenSpaceOptimizer />} />
                <Route path="/disaster-alerts" element={<DisasterAlerts />} />
                <Route path="/citizen-reports" element={<CitizenReports />} />
                <Route path="/map" element={<InteractiveMap />} />
                <Route path="/ai-assistant" element={<AIAssistant />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/community" element={<Community />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;