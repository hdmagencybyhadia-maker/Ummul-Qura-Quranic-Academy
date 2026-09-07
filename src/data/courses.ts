import { CourseDetail, TimingSlotDetail } from '../types';

export const COURSES_DATA: CourseDetail[] = [
  {
    id: 'nazra-tajweed',
    title: 'Nazra Quran with Tajweed',
    arabicTitle: 'ناظرة القرآن مع التجويد',
    description: 'Learn fluent Quran recitation with proper Makharij (pronunciation) and foundational Tajweed rules under expert guidance.',
    duration: '3 to 6 Months',
    recommendedAge: 'Age 5+',
    classType: '1-on-1 Personalized Classes',
    highlights: [
      'Correct Makharij & Articulation Points',
      'Basic to Advanced Tajweed Rules',
      'Daily Kalmas & Essential Duas',
      'Flexible Scheduling for Kids & Adults'
    ],
    iconName: 'BookOpen',
    popular: true,
  },
  {
    id: 'quran-translation',
    title: 'Quran Translation (Tarjuma)',
    arabicTitle: 'ترجمة القرآن الكريم',
    description: 'Word-by-word and contextual Urdu/English translation of the Holy Quran to deeply understand Allah’s divine message.',
    duration: '6 to 12 Months',
    recommendedAge: 'Age 10+',
    classType: 'Interactive Live Sessions',
    highlights: [
      'Word-by-Word Translation & Grammar',
      'Understanding Surah Contexts & Themes',
      'Daily Life Lessons from Verses',
      'Comprehensive Course Material Provided'
    ],
    iconName: 'Languages',
  },
  {
    id: 'tafseer-ul-quran',
    title: 'Tafseer-ul-Quran',
    arabicTitle: 'تفسير القرآن الكريم',
    description: 'In-depth explanation and scholarly commentary of the Holy Quran, uncovering spiritual wisdom, historical background, and jurisprudence.',
    duration: '1 Year Program',
    recommendedAge: 'Age 12+',
    classType: 'Scholarly Guided Course',
    highlights: [
      'Asbab-un-Nuzul (Reasons of Revelation)',
      'Authentic Hadith-backed Explanations',
      'Answers to Modern Contemporary Questions',
      'Weekly Interactive Q&A Discussions'
    ],
    iconName: 'ScrollText',
  },
  {
    id: 'qirat-masterclass',
    title: 'Qirat & Tajweed Masterclass',
    arabicTitle: 'إتقان القراءة والتجويد',
    description: 'Advanced vocal training, melodic recitation (Maqamat), and perfection of classic Qirat styles for aspiring Qaris.',
    duration: '6 Months Specialization',
    recommendedAge: 'Age 8+',
    classType: 'Advanced Masterclass',
    highlights: [
      'Maqamat & Breath Control Techniques',
      'Recitation Styles of Renowned Qaris',
      'Ijazah Preparation Support',
      'Live Vocal Pitch & Tone Guidance'
    ],
    iconName: 'Award',
    popular: true,
  },
];

export const TIMING_SLOTS_DATA: TimingSlotDetail[] = [
  {
    value: 'Subah',
    label: 'Subah (Morning)',
    urduLabel: 'صبح',
    timeRange: '08:00 AM – 12:00 PM (PKT)',
    description: 'Fresh morning schedule ideal for early risers & kids before school.',
    icon: 'SunMedium',
  },
  {
    value: 'Dopehar',
    label: 'Dopehar (Afternoon)',
    urduLabel: 'دوپہر',
    timeRange: '12:00 PM – 04:00 PM (PKT)',
    description: 'Convenient mid-day slot for housewives, students & shift workers.',
    icon: 'Sun',
  },
  {
    value: 'Shaam',
    label: 'Shaam (Evening)',
    urduLabel: 'شام',
    timeRange: '04:00 PM – 08:00 PM (PKT)',
    description: 'Post-school and college hours perfect for children & youth.',
    icon: 'Sunset',
  },
  {
    value: 'Raat',
    label: 'Raat (Night)',
    urduLabel: 'رات',
    timeRange: '08:00 PM – 11:30 PM (PKT)',
    description: 'Quiet night slot tailored for working professionals & overseas students.',
    icon: 'Moon',
  },
];

export const ACADEMY_BENEFITS = [
  {
    title: '1-on-1 Live Online Classes',
    desc: 'Dedicated individual attention tailored to student pace.',
    icon: 'Users',
  },
  {
    title: 'Male & Female Qualified Tutors',
    desc: 'Certified Alims and Qaris available for male and female students.',
    icon: 'GraduationCap',
  },
  {
    title: '3-Day Free Trial Class',
    desc: 'Experience our teaching methodology with zero commitment.',
    icon: 'Sparkles',
  },
  {
    title: 'Flexible Class Timings',
    desc: 'Customizable time slots accommodating worldwide timezones.',
    icon: 'Clock',
  },
];

export const DEFAULT_ACADEMY_PHONE = '+923296838371'; // Default WhatsApp recipient number
