import React, { useState } from 'react';
import { RegistrationFormData } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';
import { formatWhatsAppMessage, buildWhatsAppUrl } from '../utils/whatsapp';
import { CheckCircle2, Copy, Check, ExternalLink, RefreshCw, X, ShieldCheck, Printer } from 'lucide-react';

interface RegistrationReceiptProps {
  formData: RegistrationFormData;
  targetPhone: string;
  onClose: () => void;
  onReset: () => void;
}

export const RegistrationReceipt: React.FC<RegistrationReceiptProps> = ({
  formData,
  targetPhone,
  onClose,
  onReset,
}) => {
  const [copied, setCopied] = useState(false);
  const formattedMsg = formatWhatsAppMessage(formData);
  const waUrl = buildWhatsAppUrl(targetPhone, formattedMsg);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Generate a mock reference ID
  const refId = `UQQA-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0d5c3a] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#d4af37] text-[#0d5c3a]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs text-[#f3e5ab] font-bold tracking-wider uppercase">
                WhatsApp Redirect Sent
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                Registration Request Submitted!
              </h3>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1">
          {/* Status Alert Banner */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#0d5c3a] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-[#0d5c3a]">Next Step to Finalize Admission:</p>
              <p className="mt-0.5 text-emerald-800">
                A new WhatsApp window should have opened. Simply press <strong>"Send"</strong> in WhatsApp to dispatch your registration application to our admission team.
              </p>
            </div>
          </div>

          {/* Receipt Data Box */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-xs">
              <span className="text-slate-500">Ref ID:</span>
              <span className="font-mono font-bold text-[#0d5c3a]">{refId}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px]">Student Name:</span>
                <span className="font-bold text-slate-800">{formData.studentName}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Course:</span>
                <span className="font-bold text-slate-800">{formData.course}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Timing Slot:</span>
                <span className="font-semibold text-slate-700">{formData.timingSlot}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Registration Fee:</span>
                <span className="font-bold text-[#0d5c3a]">PKR 1,000/-</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Target Contact:</span>
                <span className="font-mono text-slate-700">{targetPhone}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Free Trial:</span>
                <span className="font-semibold text-emerald-700">3 Days Included</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Re-open WhatsApp Chat</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="py-2.5 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copied ? 'Copied Text' : 'Copy Message'}</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="py-2.5 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Print Slip</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[#0d5c3a] transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Register Another Student</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
