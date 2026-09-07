import React from 'react';
import { BookOpen, Phone, Mail, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  academyPhone: string;
}

export const Footer: React.FC<FooterProps> = ({ academyPhone }) => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t-4 border-[#d4af37] pt-12 pb-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-[#0d5c3a] rounded-lg border border-[#d4af37]">
                <BookOpen className="w-5 h-5 text-[#d4af37]" />
              </div>
              <span className="font-extrabold text-lg text-white font-display">
                Ummul Qura Quranic Academy
              </span>
            </div>
            <p className="font-arabic text-lg text-[#f3e5ab]">
              رَبِّ زِدْنِي عِلْمًا
            </p>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              Dedicated to delivering world-class, authentic 1-on-1 online Quran learning experience for children and adults across the globe with certified tutors.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm font-display text-[#f3e5ab]">
              Contact & Admission Support
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/90">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>WhatsApp / Call: <strong className="font-mono text-white">{academyPhone}</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <a href="mailto:ummalqura008@gmail.com" className="hover:underline hover:text-white transition-colors">
                  ummalqura008@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>Rahim Yar Khan, Punjab, Pakistan (Worldwide Online Classes)</span>
              </li>
            </ul>
          </div>

          {/* Quick Courses List */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm font-display text-[#f3e5ab]">
              Programs Offered
            </h4>
            <ul className="space-y-1.5 text-xs text-emerald-200/80">
              <li>• Nazra Quran with Tajweed Rules</li>
              <li>• Quran Translation (Tarjuma & Vocabulary)</li>
              <li>• Tafseer-ul-Quran (Scholarly Commentary)</li>
              <li>• Qirat & Tajweed Vocal Masterclass</li>
              <li>• Daily Duas, Kalmas & Islamic Studies</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300/70 gap-3">
          <p>© 2026 Ummul Qura Quranic Academy. All rights reserved.</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with reverence for Quranic learners</span>
            <Heart className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
