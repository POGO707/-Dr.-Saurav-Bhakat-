import React from 'react';
import { Activity, HeartPulse, Stethoscope, Thermometer, UserPlus, Phone, MapPin } from 'lucide-react';
import { Service, Testimonial, FAQItem } from './types';

export const DOCTOR_NAME = "Dr. Saurav Bhakat";
export const DOCTOR_TITLE = "MBBS, DNB (PGT) - Emergency Medicine";
export const DOCTOR_QUALIFICATIONS = [
  "MBBS, DNB (PGT)",
  "Certified Emergency Physician (CCEPC)",
  "PGCDM - Diabetes (Indore)",
  "Certified Advanced Diabetes Management - ADA (USA)",
  "Certified - Integrated Kidney Failure Program"
];

export const ADDRESS = "State Bank, Paul Pharmacy, Old Calcutta Rd, beside Anandapuri, Barrackpore, West Bengal 700123";
export const PHONE_NUMBER = "+919876543210"; // Placeholder for demo
export const WHATSAPP_NUMBER = "919876543210"; // Placeholder for demo
export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.378954789012!2d88.3698!3d22.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ1JzAwLjAiTiA4OMKwMjInMTAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin";

export const SERVICES: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency & Acute Care',
    description: 'Rapid assessment and treatment for critical health situations when every second matters. 24/7 emergency consultation available.',
    icon: <Activity className="w-8 h-8 text-white" />,
    features: ['Breathing issues & Asthma', 'Chest pain & Heart attack signs', 'Accidents, Trauma & Fractures', 'Stroke warning symptoms']
  },
  {
    id: 'diabetes',
    title: 'Advanced Diabetes Management',
    description: 'Expert diabetes evaluation and treatment using global-standard diabetic care guidelines to prevent long-term complications.',
    icon: <UserPlus className="w-8 h-8 text-white" />,
    features: ['Type 1 & Type 2 Diabetes', 'Gestational Diabetes', 'Diabetic Foot & Neuropathy', 'Lifestyle & Diet Counseling']
  },
  {
    id: 'critical',
    title: 'Critical Care Medicine',
    description: 'Specialized care to stabilize and recover patients from life-threatening medical conditions like sepsis and respiratory failure.',
    icon: <HeartPulse className="w-8 h-8 text-white" />,
    features: ['Respiratory failure', 'Sepsis & severe infections', 'Post-ICU care', 'Constant monitoring']
  },
  {
    id: 'kidney',
    title: 'Kidney Failure Management',
    description: 'Integrated care for patients managing kidney disorders alongside diabetes or hypertension to slow damage progression.',
    icon: <Stethoscope className="w-8 h-8 text-white" />,
    features: ['Electrolyte imbalance', 'Slowing kidney damage', 'Collaborative nephrology support', 'Prevention strategies']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Arindam G.',
    location: 'Barrackpore',
    text: 'I had severe breathing issues and Dr. Bhakat immediately stabilized me. His calm guidance saved my life.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sujata D.',
    location: 'Anandapuri',
    text: 'My diabetes was uncontrolled for years. With his treatment, I feel healthier and energetic again.',
    rating: 5
  },
  {
    id: '3',
    name: 'Suman K.',
    location: 'Barrackpore Cantonment',
    text: 'Friendly, knowledgeable, and genuinely caring doctor. Explained everything clearly.',
    rating: 5
  },
  {
    id: '4',
    name: 'Priya M.',
    location: 'Titagarh',
    text: 'The best clinic for emergency care. The staff is very cooperative and Dr. Bhakat is extremely professional.',
    rating: 5
  },
  {
    id: '5',
    name: 'Rahul S.',
    location: 'Khardaha',
    text: 'Managed my diabetic foot condition effectively when others gave up. Highly recommended!',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I need an appointment?",
    answer: "Walk-ins are accepted for emergencies. Appointments are highly recommended for diabetes management and general consultations to ensure minimal waiting time."
  },
  {
    question: "Do you provide emergency care onsite?",
    answer: "Yes, we provide rapid evaluation, stabilization, and life-saving interventions onsite before coordinating hospital transfer if necessary."
  },
  {
    question: "Can I manage diabetes with lifestyle changes alone?",
    answer: "It is possible in the early stages. Dr. Bhakat provides personalized treatment plans that prioritize lifestyle changes, but medication may be needed depending on severity."
  },
  {
    question: "Do you treat kidney-related complications?",
    answer: "Yes, Dr. Bhakat is certified in the Integrated Kidney Failure Program and specializes in managing kidney disorders related to diabetes and hypertension."
  },
  {
    question: "What are the consultation hours?",
    answer: "We are open Morning & Evening, Monday through Saturday. Sundays are for emergencies only. Please call to confirm exact availability."
  }
];

// Using relevant Unsplash images to represent the visual style requested
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=2000", // Emergency/Doctor theme
  profile: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800", // Indian Doctor portrait representative
  clinic: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
  diabetes: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
  emergency: "https://images.unsplash.com/photo-1516574187841-693018f33660?auto=format&fit=crop&q=80&w=800",
  award: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" // Award ceremony representative
};