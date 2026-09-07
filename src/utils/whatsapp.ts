import { RegistrationFormData } from '../types';

export function formatWhatsAppMessage(data: RegistrationFormData): string {
  const lines: string[] = [];

  lines.push('🕌 *UMMUL QURA QURANIC ACADEMY* 🕌');
  lines.push('📖 *New Admission & Student Registration*');
  lines.push('──────────────────────────────');
  
  if (data.course) {
    lines.push(`📚 *Selected Course:* ${data.course}`);
  } else {
    lines.push('📚 *Selected Course:* [Not Selected]');
  }

  lines.push(`👤 *Student Name:* ${data.studentName || '[Pending]'}`);
  lines.push(`🎂 *Student Age:* ${data.studentAge ? `${data.studentAge} years` : '[Pending]'}`);
  lines.push(`👨‍👩‍👦 *Parent / Guardian:* ${data.parentName || '[Pending]'}`);
  
  const phone = data.whatsappNumber ? `${data.countryCode} ${data.whatsappNumber}` : '[Pending]';
  lines.push(`📱 *WhatsApp / Contact:* ${phone}`);
  
  lines.push(`⏰ *Preferred Timing:* ${data.timingSlot || '[Pending]'}`);
  lines.push(`📍 *City / Address:* ${data.cityAddress || '[Pending]'}`);
  lines.push(`🎓 *Tutor Preference:* ${data.genderPreference || 'Any'}`);

  if (data.previousEducation) {
    lines.push(`📜 *Previous Learning:* ${data.previousEducation}`);
  }

  lines.push('──────────────────────────────');
  lines.push('💵 *Registration Fee:* PKR 1,000/-');
  lines.push('🎁 *Trial Status:* 3-Day Free Trial Session Requested');
  lines.push('──────────────────────────────');
  
  if (data.notes) {
    lines.push(`💬 *Additional Notes:* ${data.notes}`);
  }

  lines.push('Assalamu Alaikum! I would like to enroll in the course mentioned above at Ummul Qura Quranic Academy. Please guide me with the next steps and trial class schedule. JazakAllah Khair! 🌸');

  return lines.join('\n');
}

export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanedPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
}
