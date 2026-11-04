import React from 'react';
import { NavLink } from 'react-router-dom';
import { Map, BookOpenCheck, FileText } from 'lucide-react';

const navItems = [
  { to: '/', icon: Map, label: 'Path' },
  { to: '/exam', icon: BookOpenCheck, label: 'Questions' },
  { to: '/notes', icon: FileText, label: 'Notes' },
];

const SideNav: React.FC = () => {
  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-60 flex-col bg-black/40 backdrop-blur-md border-r border-white/10 px-4 py-6 z-40">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Map className="w-7 h-7 text-duo-blue" />
        <div className="flex flex-col leading-tight">
          <span className="font-black text-white tracking-tight text-base">DuoFY4</span>
          <span className="font-bold text-slate-400 text-[10px] uppercase tracking-widest">Modern Physics</span>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 rounded-xl font-bold uppercase text-sm tracking-wider transition-colors ${
                isActive
                  ? 'bg-duo-blue/15 text-duo-blue'
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
              }`
            }
          >
            <Icon size={22} strokeWidth={2.5} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SideNav;
