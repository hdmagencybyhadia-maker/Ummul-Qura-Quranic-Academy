import React from 'react';
import { BookOpen, Sparkles, Phone, ShieldCheck, Award } from 'lucide-react';

interface HeaderProps {
  onScrollToForm?: () => void;
  academyPhone: string;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToForm, academyPhone }) => {
  return (
    <header className="relative bg-[#0d5c3a] text-white overflow-hidden shadow-xl border-b-4 border-[#d4af37]">
      {/* Decorative Gold Radial Gradients & Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle Geometric Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #d4af37 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 relative z-10">
        {/* Top Mini Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-emerald-800/80 mb-8 text-xs sm:text-sm">
          <div className="flex items-center space-x-2 text-[#e5c158]">
            <Award className="w-4 h-4 text-[#d4af37]" />
            <span className="font-medium tracking-wide">Registered & Certified Islamic Online Academy</span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`https://wa.me/${academyPhone.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-100 hover:text-[#f3e5ab] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-mono text-xs">Helpdesk: {academyPhone}</span>
            </a>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#d4af37]/20 text-[#f3e5ab] border border-[#d4af37]/40">
              Admissions Open 2026
            </span>
          </div>
        </div>

        {/* Central Brand Identity */}
        <div className="text-center space-y-4">
          {/* Bismillah Calligraphy Header */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-black/20 border border-[#d4af37]/30 backdrop-blur-sm">
            <p className="font-arabic text-xl sm:text-2xl text-[#f3e5ab] tracking-wider leading-relaxed">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          </div>

          <div className="flex items-center justify-center space-x-3 pt-2">
            <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent hidden sm:block" />
            <div className="p-3 bg-[#084229] rounded-2xl border-2 border-[#d4af37] shadow-lg shadow-black/30 transform hover:scale-105 transition-transform">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37]" />
            </div>
            <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent hidden sm:block" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white drop-shadow-md">
            <span className="text-[#f3e5ab]">Ummul Qura</span> Quranic Academy
          </h1>

          <p className="max-w-2xl mx-auto text-emerald-100 text-sm sm:text-base md:text-lg font-light leading-relaxed">
            Illuminating minds through authentic Quranic education. Online 1-on-1 Nazra, Tajweed, Translation & Tafseer classes for kids and adults worldwide.
          </p>

          {/* Key Feature Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/80 border border-[#d4af37]/30 text-emerald-100 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              Male & Female Certified Tutors
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/80 border border-[#d4af37]/30 text-emerald-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Flexible Time Slots
            </span>
          </div>

          {onScrollToForm && (
            <div className="pt-4">
              <button
                type="button"
                onClick={onScrollToForm}
                aria-label="Scroll down to registration form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b8901e] text-[#0d5c3a] font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:brightness-105 active:scale-95 transition-all cursor-pointer group"
              >
                <span>Fill Registration Form</span>
                <span className="text-lg transition-transform group-hover:translate-y-0.5">↓</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
