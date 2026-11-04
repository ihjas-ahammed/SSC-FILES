import React, { useMemo, useState } from 'react';
import { FileText, ChevronDown, BookOpen } from 'lucide-react';
import { Course, Slide } from '../types';
import MathRenderer from '../components/MathRenderer';

interface Props {
  course: Course;
}

interface TheoryEntry {
  slide: Slide;
  unitTitle: string;
  lessonTitle: string;
}

interface SectionGroup {
  id: string;
  title: string;
  entries: TheoryEntry[];
}

const NotesTab: React.FC<Props> = ({ course }) => {
  const groups = useMemo<SectionGroup[]>(() => {
    return course.sections.map(section => {
      const entries: TheoryEntry[] = [];
      section.units.forEach(unit => {
        unit.lessons.forEach(lesson => {
          lesson.slides.forEach(slide => {
            if (slide.type === 'theory') {
              entries.push({ slide, unitTitle: unit.title, lessonTitle: lesson.title });
            }
          });
        });
      });
      return { id: section.id, title: section.title, entries };
    }).filter(g => g.entries.length > 0);
  }, [course]);

  const summary = course.chapterSummary?.filter(s => s.type === 'theory') ?? [];

  if (groups.length === 0 && summary.length === 0) {
    return (
      <div className="p-10 flex flex-col items-center text-center text-slate-500 mt-20 animate-in fade-in duration-300">
        <FileText className="w-16 h-16 text-slate-700 mb-4" />
        <h2 className="text-xl font-bold text-slate-300 mb-2">Reference Notes</h2>
        <p>No theory notes available for this module.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0b0f19] text-slate-200 p-5 pt-8 animate-in fade-in duration-300">
      <div className="flex flex-col items-center mb-8 text-center">
        <FileText className="w-10 h-10 text-duo-blue mb-3" />
        <h1 className="text-3xl font-black text-white">Reference Notes</h1>
        <p className="text-sm text-slate-400 font-medium mt-3 leading-relaxed max-w-[280px]">
          Theory recap from <br/><strong className="text-slate-300">{course.title}</strong>
        </p>
      </div>

      {summary.length > 0 && (
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-duo-green" />
            <span className="inline-block bg-duo-green/20 text-duo-green font-black py-1.5 px-4 rounded-xl text-sm uppercase tracking-widest">
              Chapter Summary
            </span>
          </div>
          <div className="space-y-3">
            {summary.map(s => (
              <NoteCard key={s.id} title={s.title} content={s.content} />
            ))}
          </div>
        </div>
      )}

      <div className="space-y-8">
        {groups.map(group => (
          <div key={group.id}>
            <div className="mb-4">
              <span className="inline-block bg-slate-800 text-white font-black py-1.5 px-4 rounded-xl text-sm shadow-sm border-b-2 border-slate-700 uppercase tracking-widest">
                {group.title}
              </span>
              <p className="text-xs text-slate-500 font-bold mt-2 px-1">
                {group.entries.length} theory note{group.entries.length === 1 ? '' : 's'}
              </p>
            </div>

            <div className="space-y-3">
              {group.entries.map((e, idx) => (
                <NoteCard
                  key={`${group.id}-${idx}`}
                  title={e.slide.title || e.lessonTitle}
                  subtitle={e.unitTitle}
                  content={e.slide.content}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const NoteCard: React.FC<{ title?: string; subtitle?: string; content: string }> = ({ title, subtitle, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-panel rounded-2xl overflow-hidden border-2 border-white/5 bg-[#121622]">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left p-4 flex justify-between items-start hover:bg-white/5 transition-colors"
      >
        <div className="flex-grow pr-4">
          {subtitle && (
            <div className="text-[10px] font-black uppercase tracking-widest text-duo-blue mb-1">
              {subtitle}
            </div>
          )}
          <div className="font-bold text-slate-100 leading-snug">
            {title || 'Theory'}
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="p-5 border-t border-white/5 bg-[#0b0f19] animate-in fade-in slide-in-from-top-2 duration-200">
          <MathRenderer content={content} className="text-slate-300 text-base" />
        </div>
      )}
    </div>
  );
};

export default NotesTab;
