export type CourseOption = 
  | 'Nazra Quran with Tajweed'
  | 'Quran Translation (Tarjuma)'
  | 'Tafseer-ul-Quran'
  | 'Qirat & Tajweed Masterclass';

export type TimingSlot = 'Subah' | 'Dopehar' | 'Shaam' | 'Raat';

export type GenderPreference = 'Male Teacher' | 'Female Teacher' | 'Any';

export interface RegistrationFormData {
  course: CourseOption | '';
  studentName: string;
  studentAge: string;
  parentName: string;
  whatsappNumber: string;
  countryCode: string;
  timingSlot: TimingSlot | '';
  cityAddress: string;
  genderPreference: GenderPreference;
  previousEducation: string;
  notes: string;
}

export interface FormErrors {
  course?: string;
  studentName?: string;
  studentAge?: string;
  parentName?: string;
  whatsappNumber?: string;
  timingSlot?: string;
  cityAddress?: string;
}

export interface CourseDetail {
  id: string;
  title: CourseOption;
  arabicTitle: string;
  description: string;
  duration: string;
  recommendedAge: string;
  classType: string;
  highlights: string[];
  iconName: string;
  popular?: boolean;
}

export interface TimingSlotDetail {
  value: TimingSlot;
  label: string;
  urduLabel: string;
  timeRange: string;
  description: string;
  icon: string;
}
