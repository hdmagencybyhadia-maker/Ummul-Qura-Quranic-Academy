import React, { useState } from 'react';
import { RegistrationFormData, FormErrors, CourseOption, TimingSlot } from '../types';
import { COURSES_DATA, TIMING_SLOTS_DATA } from '../data/courses';
import { FeeBanner } from './FeeBanner';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CourseCardsOverview } from './CourseCardsOverview';
import { WhatsAppPreviewCard } from './WhatsAppPreviewCard';
import { formatWhatsAppMessage, buildWhatsAppUrl } from '../utils/whatsapp';
import { 
  User, 
  Calendar, 
  Users, 
  Phone, 
  MapPin, 
  Clock, 
  BookOpen, 
  ShieldCheck, 
  Settings, 
  AlertCircle,
  Sparkles,
  GraduationCap
} from 'lucide-react';

interface RegistrationFormProps {
  academyPhone: string;
  onUpdateAcademyPhone: (newPhone: string) => void;
  onSuccessSubmit: (formData: RegistrationFormData, targetPhone: string) => void;
}

const COUNTRY_CODES = [
  { code: '+92', flag: '🇵🇰', label: 'Pakistan (+92)' },
  { code: '+971', flag: '🇦🇪', label: 'UAE (+971)' },
  { code: '+966', flag: '🇸🇦', label: 'Saudi Arabia (+966)' },
  { code: '+1', flag: '🇺🇸', label: 'USA / Canada (+1)' },
  { code: '+44', flag: '🇬🇧', label: 'UK (+44)' },
  { code: '+974', flag: '🇶🇦', label: 'Qatar (+974)' },
  { code: '+968', flag: '🇴🇲', label: 'Oman (+968)' },
  { code: '+965', flag: '🇰🇼', label: 'Kuwait (+965)' },
  { code: '+61', flag: '🇦🇺', label: 'Australia (+61)' },
  { code: '+60', flag: '🇲🇾', label: 'Malaysia (+60)' },
];

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  academyPhone,
  onUpdateAcademyPhone,
  onSuccessSubmit,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    course: '',
    studentName: '',
    studentAge: '',
    parentName: '',
    whatsappNumber: '',
    countryCode: '+92',
    timingSlot: '',
    cityAddress: '',
    genderPreference: 'Any',
    previousEducation: '',
    notes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showSettings, setShowSettings] = useState(false);
  const [tempPhone, setTempPhone] = useState(academyPhone);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCourseSelect = (courseTitle: CourseOption) => {
    setFormData((prev) => ({ ...prev, course: courseTitle }));
    if (errors.course) {
      setErrors((prev) => ({ ...prev, course: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.course) {
      newErrors.course = 'Please select a Quranic course.';
    }
    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required.';
    }
    if (!formData.studentAge || Number(formData.studentAge) <= 0 || Number(formData.studentAge) > 99) {
      newErrors.studentAge = 'Valid age is required (1-99).';
    }
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent / Guardian name is required.';
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp contact number is required.';
    } else if (formData.whatsappNumber.trim().length < 7) {
      newErrors.whatsappNumber = 'Please enter a valid phone number.';
    }
    if (!formData.timingSlot) {
      newErrors.timingSlot = 'Please select a preferred timing slot.';
    }
    if (!formData.cityAddress.trim()) {
      newErrors.cityAddress = 'City / Address is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to top of form smoothly to show errors
      const formElement = document.getElementById('registration-form-card');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Format WhatsApp message
    const formattedMessage = formatWhatsAppMessage(formData);
    const waUrl = buildWhatsAppUrl(academyPhone, formattedMessage);

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Trigger success callback
    onSuccessSubmit(formData, academyPhone);
  };

  const handleSavePhoneSetting = () => {
    onUpdateAcademyPhone(tempPhone);
    setShowSettings(false);
  };

  return (
    <div id="registration-form-card" className="max-w-4xl mx-auto my-8 px-4 sm:px-6">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Form Card Header */}
        <div className="bg-emerald-900 text-white p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/20 text-[#f3e5ab] text-xs font-semibold mb-2 border border-[#d4af37]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                Online Admission Form
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
                Student Admission Registration
              </h2>
              <p className="text-emerald-100 text-xs sm:text-sm mt-1">
                Fill in the details below to complete your enrollment request for Ummul Qura Quranic Academy.
              </p>
            </div>

            {/* Recipient Number Setting Toggle Button */}
            <button
              type="button"
              onClick={() => setShowSettings(!showSettings)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-800/80 hover:bg-emerald-800 border border-emerald-700 text-xs font-medium text-emerald-100 hover:text-white transition-colors cursor-pointer"
              title="Configure target WhatsApp recipient number"
            >
              <Settings className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Target WhatsApp</span>
            </button>
          </div>

          {/* Settings Drawer / Box */}
          {showSettings && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-950/90 border border-[#d4af37]/40 text-xs text-emerald-100 space-y-2 animate-fadeIn">
              <div className="flex items-center justify-between font-semibold text-[#f3e5ab]">
                <span>Academy WhatsApp Recipient Number:</span>
                <span className="text-[10px] text-emerald-300">Target for registration messages</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tempPhone}
                  onChange={(e) => setTempPhone(e.target.value)}
                  placeholder="+923001234567"
                  className="flex-1 px-3 py-1.5 rounded-md bg-emerald-900 border border-emerald-700 text-white font-mono text-xs focus:outline-none focus:border-[#d4af37]"
                />
                <button
                  type="button"
                  onClick={handleSavePhoneSetting}
                  className="px-3 py-1.5 rounded-md bg-[#d4af37] text-[#0d5c3a] font-bold hover:brightness-110 cursor-pointer"
                >
                  Save
                </button>
              </div>
              <p className="text-[11px] text-emerald-200/80">
                Current active target: <strong className="font-mono text-[#f3e5ab]">{academyPhone}</strong>. Change this to test with your own WhatsApp phone number!
              </p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
          {/* Prominent Fee Highlight Banner */}
          <FeeBanner />

          {/* SECTION 1: Course Selection Overview & Dropdown */}
          <div className="space-y-4">
            <CourseCardsOverview
              selectedCourse={formData.course}
              onSelectCourse={handleCourseSelect}
            />

            {/* Course Dropdown */}
            <div className="pt-2">
              <label htmlFor="course-select" className="block text-sm font-bold text-slate-800 mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#0d5c3a]" />
                  1. Select Course <span className="text-red-500">*</span>
                </span>
                {formData.course && (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    Selected: {formData.course}
                  </span>
                )}
              </label>

              <select
                id="course-select"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-slate-50 text-slate-800 font-medium text-sm focus:bg-white focus:outline-none transition-all ${
                  errors.course
                    ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-slate-200 focus:border-[#0d5c3a] focus:ring-2 focus:ring-[#0d5c3a]/20'
                }`}
              >
                <option value="">-- Choose Course --</option>
                {COURSES_DATA.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title} ({c.arabicTitle}) - {c.duration}
                  </option>
                ))}
              </select>

              {errors.course && (
                <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.course}
                </p>
              )}
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* SECTION 2: Student & Parent Information */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-slate-800 font-display flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0d5c3a] text-white text-xs font-sans">
                2
              </span>
              Student & Parent Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Student Name */}
              <div>
                <label htmlFor="studentName" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Student Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="e.g. Muhammad Ibrahim"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm text-slate-800 bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                      errors.studentName
                        ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-slate-200 focus:border-[#0d5c3a] focus:ring-2 focus:ring-[#0d5c3a]/20'
                    }`}
                  />
                </div>
                {errors.studentName && (
                  <p className="mt-1 text-xs text-red-600 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.studentName}
                  </p>
                )}
              </div>

              {/* Student Age */}
              <div>
                <label htmlFor="studentAge" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Student Age (Years) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="number"
                    id="studentAge"
                    name="studentAge"
                    min="3"
                    max="99"
                    value={formData.studentAge}
                    onChange={handleChange}
                    placeholder="e.g. 8"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm text-slate-800 bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                      errors.studentAge
                        ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-slate-200 focus:border-[#0d5c3a] focus:ring-2 focus:ring-[#0d5c3a]/20'
                    }`}
                  />
                </div>
                {errors.studentAge && (
                  <p className="mt-1 text-xs text-red-600 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.studentAge}
                  </p>
                )}
              </div>

              {/* Parent / Guardian Name */}
              <div>
                <label htmlFor="parentName" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Parent / Guardian Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Mehmood"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm text-slate-800 bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                      errors.parentName
                        ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-slate-200 focus:border-[#0d5c3a] focus:ring-2 focus:ring-[#0d5c3a]/20'
                    }`}
                  />
                </div>
                {errors.parentName && (
                  <p className="mt-1 text-xs text-red-600 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.parentName}
                  </p>
                )}
              </div>

              {/* WhatsApp / Contact Number */}
              <div>
                <label htmlFor="whatsappNumber" className="block text-xs font-bold text-slate-700 mb-1.5">
                  WhatsApp / Contact Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-28 sm:w-32 px-2.5 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 focus:bg-white focus:outline-none focus:border-[#0d5c3a]"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>

                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      placeholder="300 1234567"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm text-slate-800 bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                        errors.whatsappNumber
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                          : 'border-slate-200 focus:border-[#0d5c3a] focus:ring-2 focus:ring-[#0d5c3a]/20'
                      }`}
                    />
                  </div>
                </div>
                {errors.whatsappNumber && (
                  <p className="mt-1 text-xs text-red-600 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.whatsappNumber}
                  </p>
                )}
              </div>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* SECTION 3: Preferred Timing & City Address */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-slate-800 font-display flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0d5c3a] text-white text-xs font-sans">
                3
              </span>
              Schedule & Location Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Preferred Timing Slot */}
              <div>
                <label htmlFor="timingSlot" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Preferred Timing Slot <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    id="timingSlot"
                    name="timingSlot"
                    value={formData.timingSlot}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm text-slate-800 bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                      errors.timingSlot
                        ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-slate-200 focus:border-[#0d5c3a] focus:ring-2 focus:ring-[#0d5c3a]/20'
                    }`}
                  >
                    <option value="">-- Select Preferred Timing --</option>
                    {TIMING_SLOTS_DATA.map((ts) => (
                      <option key={ts.value} value={ts.value}>
                        {ts.label} - {ts.timeRange}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.timingSlot && (
                  <p className="mt-1 text-xs text-red-600 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.timingSlot}
                  </p>
                )}

                {/* Timing slot hint badge */}
                {formData.timingSlot && (
                  <p className="mt-1.5 text-xs text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    💡 {TIMING_SLOTS_DATA.find((t) => t.value === formData.timingSlot)?.description}
                  </p>
                )}
              </div>

              {/* City / Address */}
              <div>
                <label htmlFor="cityAddress" className="block text-xs font-bold text-slate-700 mb-1.5">
                  City / Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="cityAddress"
                    name="cityAddress"
                    value={formData.cityAddress}
                    onChange={handleChange}
                    placeholder="e.g. Lahore / Islamabad / Dubai"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm text-slate-800 bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                      errors.cityAddress
                        ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-slate-200 focus:border-[#0d5c3a] focus:ring-2 focus:ring-[#0d5c3a]/20'
                    }`}
                  />
                </div>
                {errors.cityAddress && (
                  <p className="mt-1 text-xs text-red-600 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.cityAddress}
                  </p>
                )}
              </div>
            </div>

            {/* Additional Preferences: Tutor Gender & Previous Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#0d5c3a]" />
                  Tutor Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Male Teacher', 'Female Teacher', 'Any'] as const).map((pref) => (
                    <button
                      key={pref}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, genderPreference: pref }))}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                        formData.genderPreference === pref
                          ? 'bg-[#0d5c3a] text-white border-[#0d5c3a] shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="previousEducation" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Previous Quranic Learning (Optional)
                </label>
                <input
                  type="text"
                  id="previousEducation"
                  name="previousEducation"
                  value={formData.previousEducation}
                  onChange={handleChange}
                  placeholder="e.g. Completed Qaida / Basic Arabic"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-[#0d5c3a]"
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* SECTION 4: Live WhatsApp Message Preview */}
          <WhatsAppPreviewCard formData={formData} />

          {/* SUBMISSION ACTION AREA */}
          <div className="pt-2 space-y-3">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg shadow-lg hover:shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
              <span>Register via WhatsApp</span>
            </button>

            <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 px-2 gap-2">
              <span className="flex items-center gap-1 text-emerald-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#0d5c3a]" />
                Direct Official Admissions Desk
              </span>
              <span>
                Target recipient: <strong className="font-mono text-slate-700">{academyPhone}</strong>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
