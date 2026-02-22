import React from 'react';
import './ActivitySlide.css';

const ActivitySlide = ({ slide }) => {
  return (
    <div className="slide-content activity-slide">
      <h2 className="activity-title arabic-text" dir="rtl">{slide.title}</h2>
      <ul className="activity-list" dir="rtl">
        {slide.items.map((item, idx) => (
          <li key={idx} className="activity-item arabic-text">{item}</li>
        ))}
      </ul>
      <p className="text-dim mt-4 text-center">Take a moment to discuss these points.</p>
    </div>
  );
};

export default ActivitySlide;