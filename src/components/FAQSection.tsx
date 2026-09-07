import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'How do online classes at Ummul Qura Quranic Academy work?',
    a: 'Classes are conducted 1-on-1 via Zoom, Skype, or Google Meet with a live teacher. The student and tutor connect at the agreed timing slot using screen sharing for Quranic Tajweed textbooks and audio interaction.',
  },
  {
    q: 'Is the PKR 1,000/- registration fee required before the trial class?',
    a: 'No! You get 3 Days of Free Trial Classes without any advance payment. The PKR 1,000/- registration fee is only payable when you are completely satisfied with the trial classes and decide to confirm regular monthly admission.',
  },
  {
    q: 'Can female students request female Quran teachers?',
    a: 'Yes, absolutely. We have a dedicated staff of qualified female Alimas and Qarias for female students and young children.',
  },
  {
    q: 'What equipment is needed to take classes?',
    a: 'All you need is a smartphone, tablet, laptop, or desktop computer with a stable internet connection and headphones.',
  },
  {
    q: 'How do I pay the registration fee and monthly dues?',
    a: 'Fee payments can be easily made via JazzCash, EasyPaisa, Bank Transfer (Pakistan), or PayPal / Stripe for international students.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 my-12">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 rounded-xl bg-emerald-100 text-[#0d5c3a]">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Frequently Asked Questions (FAQs)
            </h3>
            <p className="text-xs text-slate-500">
              Common questions from parents and students about admissions and trial classes.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 bg-slate-50 hover:bg-emerald-50/50 flex items-center justify-between gap-3 text-sm font-bold text-slate-800 transition-colors cursor-pointer"
                >
                  <span className="flex-1">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0d5c3a] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
