import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { timelineEvents } from '../data/timelineEvents';
import SectionSummary from '../components/SectionSummary';

const SummaryRoute = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = timelineEvents[sectionId] || [];

  return (
    <SectionSummary 
      events={events}
      onClose={() => navigate(-1)} 
    />
  );
};

export default SummaryRoute;