import React from 'react';
import { BookOpen, BookCheck, FileText, Zap } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserProgress } from '../types';

interface Props {
  progress: UserProgress;
}

const items: { path: 'learn' | 'questions' | 'notes'; label: string; Icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }> }[] = [
  { path: 'learn', label: 'Learn', Icon: BookOpen },
  { path: 'questions', label: 'Questions', Icon: BookCheck },
  { path: 'notes', label: 'Notes', Icon: FileText },
];

const SideNav: React.FC<Props> = ({ progress }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const active = (location.pathname.replace('/', '') || 'learn') as 'learn' | 'questions' | 'notes';

  const handleNav = (path: string) => {
    if (active !== path) {
      navigate(`/${path}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-60 flex-col bg-black/40 backdrop-blur-md border-r border-white/10 px-4 py-6 z-40">
      <div className="flex items-center gap-2 mb-8 px-2">
        <BookOpen className="w-7 h-7 text-duo-blue" />
        <div className="flex flex-col leading-tight">
          <span className="font-black text-white tracking-tight text-base">DuoFY4</span>
          <span className="font-bold text-slate-400 text-[10px] uppercase tracking-widest">Electrodynamics</span>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {items.map(({ path, label, Icon }) => {
          const isActive = active === path;
          return (
            <button
              key={path}
              onClick={() => handleNav(path)}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl font-bold uppercase text-sm tracking-wider transition-colors ${
                isActive
                  ? 'bg-duo-green/15 text-duo-green'
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
              }`}
            >
              <Icon size={22} strokeWidth={2.5} />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto px-2">
        <div className="flex items-center gap-2 bg-black/30 rounded-xl px-3 py-2.5 font-bold">
          <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-amber-400 text-sm">{progress.xp} XP</span>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
