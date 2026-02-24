import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { UserProgress, Lesson } from '../types';
import LessonView from '../components/LessonView';
import { Trophy } from 'lucide-react';

interface Props {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

const LessonPage: React.FC<Props> = ({ progress, setProgress }) => {
  const { courseId, unitId, lessonId } = useParams<{ courseId: string; unitId: string; lessonId: string }>();
  const navigate = useNavigate();
  const [showCompletion, setShowCompletion] = useState(false);

  const course = COURSES.find(c => c.id === courseId);
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

  const handleFinishLesson = () => {
    if (lessonId) {
      const isNewCompletion = !progress.completedLessons.includes(lessonId);
      setProgress(prev => ({
        ...prev,
        completedLessons: isNewCompletion 
          ? [...prev.completedLessons, lessonId] 
          : prev.completedLessons,
        xp: prev.xp + (isNewCompletion ? 20 : 5)
      }));
      setShowCompletion(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  const handleExitLesson = () => {
    navigate('/');
  };

  if (showCompletion) {
    return (
      <div className="fixed inset-0 bg-duo-green flex flex-col items-center justify-center text-white z-50 animate-in fade-in duration-300 max-w-md mx-auto">
        <Trophy className="w-32 h-32 mb-6 text-yellow-300 drop-shadow-lg" />
        <h1 className="text-4xl font-extrabold mb-2 text-center px-4">Lesson Complete!</h1>
        <p className="text-xl opacity-90">+20 XP earned</p>
      </div>
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
    <LessonView 
      lesson={activeLesson}
      onFinishLesson={handleFinishLesson}
      onExit={handleExitLesson}
    />
  );
};

export default LessonPage;