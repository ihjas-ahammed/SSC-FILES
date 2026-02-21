import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './SectionSummary.css';

const SectionSummary = ({ events, onClose }) => {
  return (
    <div className="summary-container route-transition">
      <div className="summary-header">
        <button className="close-btn" onClick={onClose} aria-label="Go back">
          <ArrowLeft size={28} />
        </button>
        <h2>Journey Summary</h2>
      </div>

      <div className="timeline">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title-ar" dir="rtl">{event.titleAr}</h3>
                <h4 className="timeline-title-en">{event.titleEn}</h4>
                <p className="timeline-desc-ar" dir="rtl">{event.descAr}</p>
                <p className="timeline-desc-en">{event.descEn}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex-center p-6 text-dim text-center">
            <p>Summary for this section is currently unavailable.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionSummary;