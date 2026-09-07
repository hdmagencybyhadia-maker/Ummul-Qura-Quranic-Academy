import React from 'react';
import { ACADEMY_BENEFITS } from '../data/courses';
import { ShieldCheck, Video, Users, GraduationCap, Award, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const AcademyBenefitsSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 my-12">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0d5c3a] text-xs font-bold border border-emerald-200">
          <Award className="w-3.5 h-3.5 text-[#d4af37]" />
          Why Choose Ummul Qura Academy?
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
          Excellence in Quranic Education
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm">
          We blend authentic Islamic scholarship with modern online teaching methodologies for students of all ages across Pakistan, Middle East, Europe & USA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {ACADEMY_BENEFITS.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#d4af37] transition-all group space-y-2"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#0d5c3a] group-hover:bg-[#0d5c3a] group-hover:text-white transition-colors">
              {index === 0 && <Users className="w-5 h-5" />}
              {index === 1 && <GraduationCap className="w-5 h-5" />}
              {index === 2 && <Sparkles className="w-5 h-5 text-[#d4af37]" />}
              {index === 3 && <Clock className="w-5 h-5" />}
            </div>
            <h3 className="font-bold text-slate-800 text-sm group-hover:text-[#0d5c3a] transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Feature Badges Grid */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-900 via-[#0d5c3a] to-emerald-900 text-white shadow-lg border-2 border-[#d4af37]/40 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div>
          <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#f3e5ab]">100%</span>
          <span className="block text-xs text-emerald-100 font-medium mt-0.5">1-on-1 Individual Classes</span>
        </div>
        <div>
          <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#f3e5ab]">3 Days</span>
          <span className="block text-xs text-emerald-100 font-medium mt-0.5">Free Trial Period</span>
        </div>
        <div>
          <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#f3e5ab]">24 / 7</span>
          <span className="block text-xs text-emerald-100 font-medium mt-0.5">Global Class Timings</span>
        </div>
        <div>
          <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#f3e5ab]">Certified</span>
          <span className="block text-xs text-emerald-100 font-medium mt-0.5">Alim & Hafiz Tutors</span>
        </div>
      </div>
    </section>
  );
};
