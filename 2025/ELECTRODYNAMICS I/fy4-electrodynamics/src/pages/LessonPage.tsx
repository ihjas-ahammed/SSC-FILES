import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { PRACTICE_COURSE } from '../data/practice'; // Import practice data
import { UserProgress, Lesson, Course } from '../types';
import LessonView from '../components/LessonView';
import LessonCompleteScreen from '../components/LessonCompleteScreen';

interface Props {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

const LessonPage: React.FC<Props> = ({ progress, setProgress }) => {
  const { courseId, unitId, lessonId } = useParams<{ courseId: string; unitId: string; lessonId: string }>();
  const navigate = useNavigate();
  
  const [showCompletion, setShowCompletion] = useState(false);
  const [lessonStats, setLessonStats] = useState({ timeSpent: 0, accuracy: 100, xpEarned: 0 });

  // Check if it's practice mode
  let course: Course | undefined;
  if (courseId === 'practice-mode') {
    course = PRACTICE_COURSE;
  } else {
    course = COURSES.find(c => c.id === courseId);
  }

  let activeLesson: Lesson | undefined;

  if (course && course.sections) {
    for (const section of course.sections) {
      const unit = section.units.find(u => u.id === unitId);
      if (unit) {
        activeLesson = unit.lessons.find(l => l.id === lessonId);
        if (activeLesson) break;
      }
    }
  }

  const handleFinishLesson = (stats: { timeSpent: number, accuracy: number }) => {
    if (lessonId) {
      const isNewCompletion = !progress.completedLessons.includes(lessonId);
      const xpEarned = isNewCompletion ? 20 : 5;
      
      setProgress(prev => ({
        ...prev,
        completedLessons: isNewCompletion 
          ? [...prev.completedLessons, lessonId] 
          : prev.completedLessons,
        xp: prev.xp + xpEarned
      }));
      
      setLessonStats({ ...stats, xpEarned });
      
      if (isNewCompletion && courseId !== 'practice-mode') {
         localStorage.setItem('recently_completed', lessonId);
      }
      
      setShowCompletion(true);
    }
  };

  const handleExitLesson = () => {
    navigate('/');
  };

  if (showCompletion) {
    return (
       <LessonCompleteScreen 
          xp={lessonStats.xpEarned} 
          timeSpent={lessonStats.timeSpent} 
          accuracy={lessonStats.accuracy} 
          onContinue={handleExitLesson} 
       />
    );
  }

  if (!activeLesson) {
    return (
      <div className="p-10 text-center text-slate-500 mt-20">
        <p>Lesson not found.</p>
        <button onClick={() => navigate('/')} className="mt-4 text-duo-blue underline">Go Back</button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen lg:max-w-3xl lg:mx-auto">
      <LessonView
        lesson={activeLesson}
        onFinishLesson={handleFinishLesson}
        onExit={handleExitLesson}
      />
    </div>
  );
};

export default LessonPage;