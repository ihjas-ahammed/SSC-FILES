import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { UserProgress, Course } from '../types';
import BottomNav, { Tab } from '../components/BottomNav';
import SideNav from '../components/SideNav';
import LearnTab from '../components/LearnTab';
import QuestionsTab from '../components/QuestionsTab';
import NotesTab from '../components/NotesTab';

interface Props {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  currentSectionIndex: number;
  setCurrentSectionIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Dashboard: React.FC<Props> = ({ progress, setProgress, currentSectionIndex, setCurrentSectionIndex }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<Tab>('learn');

  const currentCourse: Course = COURSES.find(c => c.id === progress.currentCourseId) || COURSES[0];

  // Sync URL path with activeTab state
  useEffect(() => {
    const path = location.pathname.substring(1); // remove leading slash
    if (path === 'learn' || path === 'questions' || path === 'notes') {
      setActiveTab(path as Tab);
    } else if (path === '') {
      // should be handled by router redirect but just in case
      setActiveTab('learn');
    }
  }, [location.pathname]);

  // Restore scroll when switching tabs via bottom nav (handled in BottomNav click mostly, but ensures sync)
  useEffect(() => {
    // Optional: could save scroll position per tab here
  }, [activeTab]);

  const handleStartLesson = (unitId: string, lessonId: string) => {
    navigate(`/lesson/${currentCourse.id}/${unitId}/${lessonId}`);
  };

  const handleGoToSummary = () => {
    navigate(`/summary/${currentCourse.id}`);
  };

  const handleCourseChange = (courseId: string) => {
    window.scrollTo(0, 0);
    setProgress(prev => ({ ...prev, currentCourseId: courseId }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'learn':
        return (
          <LearnTab 
            progress={progress}
            setProgress={setProgress}
            currentSectionIndex={currentSectionIndex}
            setCurrentSectionIndex={setCurrentSectionIndex}
            currentCourse={currentCourse}
            courses={COURSES}
            handleCourseChange={handleCourseChange}
            handleStartLesson={handleStartLesson}
            handleGoToSummary={handleGoToSummary}
          />
        );
      case 'questions':
        return <QuestionsTab currentCourseId={currentCourse.id} />;
      case 'notes':
        return <NotesTab 
          course={currentCourse} 
          courses={COURSES} 
          onChangeCourse={handleCourseChange} 
        />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-20 overflow-x-hidden border-x border-white/5 lg:pb-0 lg:pl-60 lg:border-x-0">
      <SideNav progress={progress} />
      <div className="flex flex-col flex-grow lg:max-w-3xl lg:w-full lg:mx-auto lg:px-2">
        {renderContent()}
      </div>
      <BottomNav activeTab={activeTab} />
    </div>
  );
};

export default Dashboard;