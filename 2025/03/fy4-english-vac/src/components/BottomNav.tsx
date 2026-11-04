import React from 'react';
import { NavLink } from 'react-router-dom';
import { Map, BookOpenCheck, FileText, PenTool } from 'lucide-react';

const BottomNav: React.FC = () => {
  const navItems = [
    { to: '/', icon: Map, label: 'Path' },
    { to: '/practice', icon: PenTool, label: 'Practice' },
    { to: '/exam', icon: BookOpenCheck, label: 'Questions' },
    { to: '/notes', icon: FileText, label: 'Notes' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto z-50 glass-bottom-nav">
      <div className="flex justify-around items-center p-2 sm:p-3">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `bottom-nav-item flex flex-col items-center p-2 rounded-2xl transition-all duration-300 ${
                isActive ? 'text-duo-blue scale-110 active' : 'text-slate-500 hover:text-slate-300'
              }`
            }
          >
            <item.icon className="w-5 h-5 sm:w-6 sm:h-6 mb-1" strokeWidth={2.5} />
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;