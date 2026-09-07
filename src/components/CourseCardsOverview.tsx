import React from 'react';
import { COURSES_DATA } from '../data/courses';
import { CourseOption } from '../types';
import { BookOpen, Languages, ScrollText, Award, Check } from 'lucide-react';

interface CourseCardsOverviewProps {
  selectedCourse: CourseOption | '';
  onSelectCourse: (course: CourseOption) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-5 h-5 text-[#0d5c3a]" />,
  Languages: <Languages className="w-5 h-5 text-[#0d5c3a]" />,
  ScrollText: <ScrollText className="w-5 h-5 text-[#0d5c3a]" />,
  Award: <Award className="w-5 h-5 text-[#0d5c3a]" />,
};

export const CourseCardsOverview: React.FC<CourseCardsOverviewProps> = ({
  selectedCourse,
  onSelectCourse,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <div>
          <h3 className="text-lg font-bold text-slate-800 font-display">
            Offered Quranic Programs
          </h3>
          <p className="text-xs text-slate-500">
            Click on any course below to select it for registration:
          </p>
        </div>
        <span className="text-xs text-[#0d5c3a] font-semibold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full self-start sm:self-auto">
          Online 1-on-1 Worldwide
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {COURSES_DATA.map((c) => {
          const isSelected = selectedCourse === c.title;
          return (
            <div
              key={c.id}
              onClick={() => onSelectCourse(c.title)}
              className={`group relative p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-emerald-50/90 border-[#0d5c3a] shadow-md ring-2 ring-[#0d5c3a]/20'
                  : 'bg-white border-slate-200 hover:border-[#d4af37] hover:shadow-md'
              }`}
            >
              {c.popular && (
                <span className="absolute -top-2.5 right-3 bg-gradient-to-r from-[#d4af37] to-[#b8901e] text-[#0d5c3a] font-bold text-[10px] uppercase px-2 py-0.5 rounded-full shadow-sm">
                  Most Selected
                </span>
              )}

              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-100/60 border border-emerald-200 group-hover:scale-105 transition-transform">
                    {ICON_MAP[c.iconName] || <BookOpen className="w-5 h-5 text-[#0d5c3a]" />}
                  </div>
                  <div className="text-right">
                    <span className="font-arabic text-base text-[#0d5c3a] font-bold block">
                      {c.arabicTitle}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">{c.duration}</span>
                  </div>
                </div>

                <h4 className="font-bold text-slate-800 text-sm group-hover:text-[#0d5c3a] transition-colors">
                  {c.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                  {c.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px] font-medium">{c.recommendedAge}</span>
                <span
                  className={`flex items-center gap-1 font-semibold text-xs transition-colors ${
                    isSelected ? 'text-[#0d5c3a]' : 'text-slate-500 group-hover:text-[#0d5c3a]'
                  }`}
                >
                  {isSelected ? (
                    <>
                      <Check className="w-4 h-4 text-[#0d5c3a]" /> Selected
                    </>
                  ) : (
                    'Select Course →'
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
