import React from 'react';
import { Course } from '../types';
import { Book, Check } from 'lucide-react';

interface Props {
  courses: Course[];
  activeCourseId: string;
  onSelectCourse: (courseId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const CourseSelector: React.FC<Props> = ({ courses, activeCourseId, onSelectCourse, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div 
        className="flex-grow" 
        onClick={onClose} 
      />
      
      {/* Dropdown Menu */}
      <div className="bg-white absolute top-16 left-4 right-4 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300 max-w-md mx-auto">
        <div className="p-4 border-b border-gray-100 bg-gray-50">
           <h2 className="text-lg font-extrabold text-slate-700 uppercase tracking-wide">Select Course</h2>
        </div>

        <div className="p-2 max-h-[60vh] overflow-y-auto">
           <div className="space-y-2">
             {courses.map((course) => {
               const isActive = course.id === activeCourseId;
               
               return (
                 <button
                   key={course.id}
                   onClick={() => { onSelectCourse(course.id); onClose(); }}
                   className={`w-full text-left rounded-xl border-2 transition-all relative overflow-hidden group p-4 flex items-center
                     ${isActive 
                       ? 'bg-blue-50 border-blue-500' 
                       : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'
                     }
                   `}
                 >
                   <div className={`p-3 rounded-xl mr-4 ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <Book className="w-6 h-6" />
                   </div>

                   <div className="flex-grow">
                       <h3 className={`font-bold text-base ${isActive ? 'text-blue-700' : 'text-slate-700'}`}>
                         {course.title}
                       </h3>
                       <p className="text-xs font-medium text-slate-400 mt-0.5 line-clamp-1">
                         {course.description}
                       </p>
                   </div>
                   
                   {isActive && (
                     <div className="text-blue-500">
                       <Check className="w-6 h-6" strokeWidth={3} />
                     </div>
                   )}
                 </button>
               );
             })}
           </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSelector;