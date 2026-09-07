import React from 'react';
import { Tag, ShieldAlert, Sparkles, Gift } from 'lucide-react';

interface FeeBannerProps {
  className?: string;
}

export const FeeBanner: React.FC<FeeBannerProps> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d5c3a] via-[#09472d] to-[#0d5c3a] text-white p-5 sm:p-6 shadow-xl border-2 border-[#d4af37] ${className}`}>
      {/* Background Decorative Graphic Pattern */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-[#d4af37]/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left Side: Main Amount & Title */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/20 text-[#f3e5ab] text-xs font-semibold border border-[#d4af37]/40">
            <Tag className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Admission Special Offer</span>
          </div>
          
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-xs sm:text-sm text-emerald-200 font-medium">One-Time Registration Fee:</span>
            <span className="text-2xl sm:text-3xl font-black text-[#f3e5ab] font-display tracking-wide drop-shadow">
              PKR 1,000/-
            </span>
            <span className="text-xs bg-emerald-900/90 text-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-700">
              Only
            </span>
          </div>

          <p className="text-xs text-emerald-100/90 leading-relaxed pt-0.5">
            Includes registration, initial student portal setup, placement assessment & course material access.
          </p>
        </div>

        {/* Right Side: Key Benefits List */}
        <div className="w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-emerald-700/80 md:pl-6 space-y-1.5 text-xs text-emerald-100">
          <div className="flex items-center gap-2 font-medium">
            <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>Guaranteed 1-on-1 Dedicated Teacher</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <Gift className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>Official Completion Certificate Provided</span>
          </div>
        </div>
      </div>

      {/* Footer hint */}
      <div className="mt-4 pt-3 border-t border-emerald-800/80 flex items-center justify-between text-[11px] text-emerald-200/80">
        <span className="flex items-center gap-1">
          <ShieldAlert className="w-3.5 h-3.5 text-[#d4af37]" />
          Pay fee only after satisfaction from the 3-day trial class.
        </span>
        <span className="font-semibold text-[#f3e5ab] hidden sm:inline">
          Ummul Qura Official
        </span>
      </div>
    </div>
  );
};
