import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';
import '../styles/layout.css';

const MainLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-slate-200 flex flex-col">
       <Outlet />
       <BottomNav />
    </div>
  );
};

export default MainLayout;