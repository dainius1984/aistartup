import React, { useState } from 'react';
import {
  Cloud,
  Cpu,
  Database,
  ChevronDown,
  Settings,
  Users,
  FileText
} from 'lucide-react';

const Toolbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      label: 'AI Services',
      icon: <Cpu className="w-4 h-4" />,
      items: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      label: 'Solutions',
      icon: <Cloud className="w-4 h-4" />,
      items: ['Enterprise AI', 'Custom Development', 'AI Consulting', 'System Integration']
    },
    {
      label: 'Resources',
      icon: <Database className="w-4 h-4" />,
      items: ['Documentation', 'API Access', 'Case Studies', 'Pricing']
    },
    {
      label: 'Company',
      icon: <Users className="w-4 h-4" />,
      items: ['About Us', 'Team', 'Careers', 'Contact']
    }
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cloud className="w-8 h-8 text-white" />
            <span className="text-white font-bold text-xl">AI Poland</span>
          </div>
          
          <div className="flex space-x-6">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-2 text-white hover:text-gray-200 py-2">
                  {item.icon}
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <button className="text-white hover:text-gray-200">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
