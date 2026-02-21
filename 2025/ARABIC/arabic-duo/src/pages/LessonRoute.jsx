import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sections } from '../data/sections';
import Lesson from '../components/Lesson';

const LessonRoute = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  // Scroll to top when lesson mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the requested lesson data
  const lessonData = useMemo(() => {
    for (const section of sections) {
      for (const unit of section.units) {
        const found = unit.lessons.find(l => l.id === lessonId);
        if (found) return found;
      }
    }
    return null;
  }, [lessonId]);

  if (!lessonData) {
    return (
      <div className="flex-center" style={{ minHeight: '100vh', color: 'white' }}>
        <h2>Lesson not found!</h2>
        <button className="btn-primary mt-4" onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  return (
    <Lesson 
      lesson={lessonData} 
      onClose={() => navigate(-1)} 
    />
  );
};

export default LessonRoute;