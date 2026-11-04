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
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0b0f19]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="flex-grow" onClick={onClose} />
      
      <div className="glass-panel absolute top-16 left-4 right-4 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300 max-w-md mx-auto">
        <div className="p-4 border-b border-white/5 bg-black/20">
           <h2 className="text-lg font-extrabold text-white uppercase tracking-wide">Select Course</h2>
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
                       ? 'bg-blue-900/30 border-blue-500' 
                       : 'bg-white/5 border-transparent hover:bg-white/10'
                     }
                   `}
                 >
                   <div className={`p-3 rounded-xl mr-4 ${isActive ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      <Book className="w-6 h-6" />
                   </div>

                   <div className="flex-grow">
                       <h3 className={`font-bold text-base ${isActive ? 'text-blue-400' : 'text-slate-200'}`}>
                         {course.title}
                       </h3>
                       <p className="text-xs font-medium text-slate-500 mt-0.5 line-clamp-1">
                         {course.description}
                       </p>
                   </div>
                   
                   {isActive && (
                     <div className="text-blue-400">
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