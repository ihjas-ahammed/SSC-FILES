import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h1 className="logo-text">duoFY</h1>
      </div>
      <nav className="sidebar-nav">
        <button className="nav-item active">
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Learn</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">🛡️</span>
          <span className="nav-label">Leaderboard</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">📖</span>
          <span className="nav-label">Review</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">👤</span>
          <span className="nav-label">Profile</span>
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;