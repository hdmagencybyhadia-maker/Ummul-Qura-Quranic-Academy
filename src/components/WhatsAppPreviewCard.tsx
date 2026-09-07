import React, { useState } from 'react';
import { RegistrationFormData } from '../types';
import { formatWhatsAppMessage } from '../utils/whatsapp';
import { Copy, Check, Eye, EyeOff, MessageSquareText } from 'lucide-react';

interface WhatsAppPreviewCardProps {
  formData: RegistrationFormData;
}

export const WhatsAppPreviewCard: React.FC<WhatsAppPreviewCardProps> = ({ formData }) => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const formattedText = formatWhatsAppMessage(formData);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-xs font-bold text-[#0d5c3a] hover:text-emerald-900 transition-colors cursor-pointer"
        >
          <MessageSquareText className="w-4 h-4 text-[#0d5c3a]" />
          <span>Live WhatsApp Message Preview</span>
          {isOpen ? (
            <EyeOff className="w-3.5 h-3.5 text-slate-400" />
          ) : (
            <Eye className="w-3.5 h-3.5 text-slate-400" />
          )}
        </button>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:border-emerald-500 rounded-md shadow-xs transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-600 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-500" />
              <span>Copy Text</span>
            </>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="relative">
          <pre className="whitespace-pre-wrap font-sans text-xs text-slate-700 bg-white/90 p-3.5 rounded-lg border border-emerald-100 shadow-inner max-h-60 overflow-y-auto leading-relaxed">
            {formattedText}
          </pre>
          <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between">
            <span>✨ Automatically sent when clicking "Register via WhatsApp"</span>
            <span className="font-mono text-[10px] text-emerald-700">Format: Structured WhatsApp</span>
          </div>
        </div>
      )}
    </div>
  );
};
