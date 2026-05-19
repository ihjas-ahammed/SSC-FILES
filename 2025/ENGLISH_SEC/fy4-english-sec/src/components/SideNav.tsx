import React from 'react';
import { NavLink } from 'react-router-dom';
import { Map, FileText, PenTool, Sparkles, BookOpen } from 'lucide-react';

const navItems = [
  { to: '/', icon: Map, label: 'Learning Path' },
  { to: '/practice', icon: PenTool, label: 'Practice' },
  { to: '/summary', icon: Sparkles, label: 'Summary' },
  { to: '/notes', icon: FileText, label: 'Notes' },
];

const SideNav: React.FC = () => (
  <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-60 bg-[#0d1120] border-r border-white/[0.06] z-40">
    {/* Brand */}
    <div className="px-5 pt-6 pb-5 flex items-center gap-3">
      <div className="w-9 h-9 bg-duo-blue rounded-xl flex items-center justify-center shrink-0">
        <BookOpen className="w-5 h-5 text-white" strokeWidth={2.5} />
      </div>
      <div className="min-w-0">
        <p className="text-white font-black text-sm tracking-tight leading-none">English</p>
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">
          Science Secondary
        </p>
      </div>
    </div>

    <div className="h-px bg-white/[0.06] mx-4 mb-3" />

    {/* Nav links */}
    <nav className="flex flex-col gap-0.5 px-3 flex-grow">
      {navItems.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${
              isActive
                ? 'bg-duo-blue/15 text-duo-blue'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Icon className="w-5 h-5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-sm font-bold">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>

    {/* Footer hint */}
    <div className="px-5 py-5 border-t border-white/[0.06]">
      <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
        FY4 · English
      </p>
    </div>
  </aside>
);

export default SideNav;
