import React, { useState } from 'react';
import { Header } from './components/Header';
import { RegistrationForm } from './components/RegistrationForm';
import { AcademyBenefitsSection } from './components/AcademyBenefitsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { RegistrationReceipt } from './components/RegistrationReceipt';
import { DEFAULT_ACADEMY_PHONE } from './data/courses';
import { RegistrationFormData } from './types';

export default function App() {
  const [academyPhone, setAcademyPhone] = useState<string>(DEFAULT_ACADEMY_PHONE);
  const [submittedData, setSubmittedData] = useState<{
    formData: RegistrationFormData;
    targetPhone: string;
  } | null>(null);

  const handleScrollToForm = () => {
    const el = document.getElementById('registration-form-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const courseSelect = document.getElementById('course-select');
        if (courseSelect) {
          courseSelect.focus({ preventScroll: true });
        }
      }, 400);
    }
  };

  const handleFormSuccess = (formData: RegistrationFormData, targetPhone: string) => {
    setSubmittedData({ formData, targetPhone });
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    handleScrollToForm();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans bg-islamic-pattern selection:bg-[#d4af37]/30 selection:text-[#0d5c3a]">
      {/* Header Section */}
      <Header
        onScrollToForm={handleScrollToForm}
        academyPhone={academyPhone}
      />

      {/* Main Registration Area */}
      <main className="flex-1 py-6">
        {/* Core Form Component */}
        <RegistrationForm
          academyPhone={academyPhone}
          onUpdateAcademyPhone={(newPhone) => setAcademyPhone(newPhone)}
          onSuccessSubmit={handleFormSuccess}
        />

        {/* Benefits & Value Proposition */}
        <AcademyBenefitsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer academyPhone={academyPhone} />

      {/* Registration Receipt Modal (When Form Submitted) */}
      {submittedData && (
        <RegistrationReceipt
          formData={submittedData.formData}
          targetPhone={submittedData.targetPhone}
          onClose={() => setSubmittedData(null)}
          onReset={handleResetForm}
        />
      )}
    </div>
  );
}
