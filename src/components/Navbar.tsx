import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, BarChart3, Home, Video, Target, Users, Bot, ClipboardList, Package } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/market-research', icon: BarChart3, label: 'Market Research' },
    { path: '/strategy', icon: Brain, label: 'Strategy Creation' },
    { path: '/content', icon: Video, label: 'Content Creation' },
    { path: '/campaigns', icon: Target, label: 'Ad Campaigns' },
    { path: '/creators', icon: Users, label: 'Creators Matching' },
    { path: '/copilot', icon: Bot, label: 'Live Co-pilot' },
    { path: '/crm', icon: ClipboardList, label: 'CRM' },
    { path: '/inventory', icon: Package, label: 'Inventory' }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">BorderX AI</span>
          </Link>
          
          <div className="flex space-x-4 overflow-x-auto">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                  location.pathname === path
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}