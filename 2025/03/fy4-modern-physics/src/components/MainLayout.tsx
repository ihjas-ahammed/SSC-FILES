import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';
import SideNav from './SideNav';
import '../styles/layout.css';

const MainLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-slate-200 flex flex-col lg:pl-60">
       <SideNav />
       <div className="flex-grow flex flex-col lg:max-w-3xl lg:w-full lg:mx-auto lg:px-2">
         <Outlet />
       </div>
       <BottomNav />
    </div>
  );
};

export default MainLayout;