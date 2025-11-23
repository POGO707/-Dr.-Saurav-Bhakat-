import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import Viewer360 from './components/Viewer360';
import AIModal from './components/AIModal';
import { SERVICES, TESTIMONIALS, FAQS, DOCTOR_NAME, ADDRESS, IMAGES, DOCTOR_TITLE, DOCTOR_QUALIFICATIONS, PHONE_NUMBER, GOOGLE_MAPS_EMBED_URL } from './constants';
import { ChevronDown, ChevronUp, MapPin, Clock, Phone, ArrowRight, Star, Video, MessageSquare, CheckCircle, Calendar, HeartPulse, ChevronLeft, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [is360Open, setIs360Open] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqId(openFaqId === index ? null : index);
  };

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      <Header />
      <WhatsAppButton />
      <Viewer360 isOpen={is360Open} onClose={() => setIs360Open(false)} />
      <AIModal isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform hover:scale-105 duration-[20s]" 
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        <div className="absolute inset-0 bg-primary-900/85 z-10" />
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white mt-16">
          <div className="inline-block bg-accent-500/20 backdrop-blur border border-accent-400 px-6 py-2 rounded-full text-accent-300 text-sm font-bold tracking-wider mb-8 uppercase animate-fade-in-up">
            Emergency Medicine & Diabetes Care
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight animate-fade-in-up delay-100">
            Your Trusted Emergency & <br/> Diabetes Care Doctor
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            Advanced, compassionate medical care when every second matters. <br className="hidden md:block"/> Expert in Emergency Medicine, Diabetes & Kidney Health.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300">
            <a 
              href="#contact" 
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              Book Appointment <ArrowRight size={20} />
            </a>
            <button 
              onClick={() => setIsAIOpen(true)}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <MessageSquare size={20} /> Ask AI Assistant
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500">
                 <img src={IMAGES.profile} alt={DOCTOR_NAME} className="w-full h-auto object-cover aspect-[4/5]" />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 text-white">
                   <h3 className="text-2xl font-bold">{DOCTOR_NAME}</h3>
                   <p className="text-accent-400 font-medium">{DOCTOR_TITLE}</p>
                 </div>
              </div>
              {/* Badge */}
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border-l-4 border-accent-500 animate-bounce-slow">
                <div className="text-4xl font-bold text-primary-700">5+</div>
                <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">Years of<br/>Excellence</div>
              </div>
              {/* 360 View Trigger */}
              <button 
                onClick={() => setIs360Open(true)}
                className="absolute -bottom-6 -right-6 bg-primary-700 text-white p-4 rounded-xl shadow-xl hover:bg-primary-800 transition flex items-center gap-3 z-10"
              >
                <Video size={24} className="text-accent-400" />
                <div className="text-left">
                  <div className="font-bold text-sm">Virtual Tour</div>
                  <div className="text-xs text-gray-300">View Clinic 360°</div>
                </div>
              </button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-12 bg-accent-500"></div>
                <h2 className="text-accent-600 font-bold uppercase tracking-wider text-sm">About Us</h2>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary-900 mb-8 leading-tight">Medical Excellence Meets Compassionate Care</h3>
              
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  Located in the heart of Barrackpore, <strong>{DOCTOR_NAME}</strong> has dedicated his medical career to saving lives and improving long-term health outcomes. 
                </p>
                <p>
                  Trained at R.G. Kar Medical College and experienced in leading superspecialty hospitals, he blends compassion with advanced medical expertise to treat emergency cases and manage chronic conditions like diabetes effectively.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="text-yellow-500 fill-yellow-500" size={20} /> Qualifications & Certifications
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {DOCTOR_QUALIFICATIONS.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-accent-500 mt-1 flex-shrink-0" />
                      <span className="font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#services" className="text-primary-600 font-bold hover:text-primary-800 flex items-center gap-2 transition group">
                  View Our Services <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-accent-600 font-bold uppercase tracking-wider mb-3">Our Specialties</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary-900 mb-6">Comprehensive Medical Services</h3>
            <p className="text-gray-600 text-lg">From critical emergency interventions to long-term diabetes management, we provide holistic care tailored to your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-b-4 border-transparent hover:border-accent-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  {service.icon} 
                </div>
                <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300 shadow-sm">
                  {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { 
                    className: "w-8 h-8 text-primary-600 group-hover:text-white transition-colors" 
                  })}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-3 pt-4 border-t border-gray-100">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="text-accent-500 mt-0.5">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-primary-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-accent-400 font-bold uppercase tracking-wider mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold">What Our Patients Say</h3>
          </div>

          <div className="relative max-w-6xl mx-auto">
             {/* Carousel Container */}
             <div className="overflow-hidden p-2 -m-2">
                <div 
                  className="flex transition-transform duration-700 ease-in-out" 
                  style={{ transform: `translateX(-${testimonialIndex * (100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))}%)` }}
                >
                  {/* To ensure infinite-like or easier logic, we map through testimonials. 
                      Note: The translation logic above is simplified for the example. 
                      A robust responsive transform would usually use state for items per slide.
                      Here we assume simple sliding. */}
                  {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                      <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex gap-1 text-yellow-400 mb-6">
                            {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                          </div>
                          <p className="text-gray-100 text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                            {t.name.charAt(0)}
                          </div>
                          <div>
                            <h5 className="font-bold text-white">{t.name}</h5>
                            <p className="text-sm text-primary-200 flex items-center gap-1">
                              <MapPin size={12} /> {t.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
             </div>

             {/* Navigation Dots */}
             <div className="flex justify-center mt-8 gap-2">
               {TESTIMONIALS.map((_, i) => (
                 <button
                   key={i}
                   onClick={() => setTestimonialIndex(i)}
                   className={`w-3 h-3 rounded-full transition-all ${i === testimonialIndex ? 'bg-accent-500 w-8' : 'bg-white/30 hover:bg-white/50'}`}
                   aria-label={`Go to testimonial ${i + 1}`}
                 />
               ))}
             </div>

              {/* View All Button */}
              <div className="text-center mt-12">
                <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition flex items-center gap-2 mx-auto">
                  View All Testimonials
                  <ArrowRight size={16} />
                </button>
              </div>

             {/* Nav Arrows (Optional for improved UX) */}
             <button 
               onClick={prevTestimonial}
               className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white/10 hover:bg-accent-500 text-white p-3 rounded-full backdrop-blur-sm transition hidden md:flex"
               aria-label="Previous Testimonial"
             >
               <ChevronLeft size={24} />
             </button>
             <button 
               onClick={nextTestimonial}
               className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white/10 hover:bg-accent-500 text-white p-3 rounded-full backdrop-blur-sm transition hidden md:flex"
               aria-label="Next Testimonial"
             >
               <ChevronRight size={24} />
             </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-accent-600 font-bold uppercase tracking-wider mb-2">FAQ</h2>
            <h3 className="text-3xl font-serif font-bold text-primary-900">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className={`border rounded-xl overflow-hidden transition-all duration-300 ${openFaqId === index ? 'border-primary-200 shadow-md' : 'border-gray-200'}`}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex justify-between items-center bg-white hover:bg-gray-50 transition text-left"
                >
                  <span className={`font-bold text-lg ${openFaqId === index ? 'text-primary-700' : 'text-gray-800'}`}>{faq.question}</span>
                  {openFaqId === index ? 
                    <ChevronUp size={24} className="text-primary-600" /> : 
                    <ChevronDown size={24} className="text-gray-400" />
                  }
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaqId === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 py-6 bg-primary-50/50 text-gray-600 border-t border-gray-100 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Contact Info & Map */}
            <div className="lg:w-2/5 bg-primary-900 text-white p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-5"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-10 font-serif">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="bg-white/10 p-3 rounded-lg group-hover:bg-accent-500 transition-colors">
                      <MapPin className="text-white flex-shrink-0" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 mb-1">Clinic Address</h4>
                      <p className="text-gray-300 leading-relaxed">{ADDRESS}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="bg-white/10 p-3 rounded-lg group-hover:bg-accent-500 transition-colors">
                      <Phone className="text-white flex-shrink-0" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 mb-1">Phone Number</h4>
                      <a href={`tel:${PHONE_NUMBER}`} className="text-gray-300 hover:text-white transition text-lg">{PHONE_NUMBER}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="bg-white/10 p-3 rounded-lg group-hover:bg-accent-500 transition-colors">
                      <Clock className="text-white flex-shrink-0" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 mb-1">Opening Hours</h4>
                      <p className="text-gray-300">Mon - Sat: Morning & Evening</p>
                      <p className="text-gray-300">Sun: Emergency Only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/20 relative z-10">
                <div className="bg-red-600/20 border border-red-500/50 rounded-xl p-6 backdrop-blur-sm">
                   <h4 className="font-bold text-red-100 mb-2 flex items-center gap-2">
                     <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                     Emergency Support
                   </h4>
                   <p className="text-sm text-gray-300 mb-4">We prioritize emergency calls. For urgent medical attention, please call immediately.</p>
                   <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition w-full shadow-lg">
                     <Phone size={18} /> Call Emergency
                   </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-3/5 p-10 lg:p-12 bg-white">
              <h3 className="text-3xl font-bold text-gray-900 mb-2 font-serif">Book an Appointment</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and we will contact you to confirm your slot.</p>
              
              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in-up">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-green-800 mb-2">Request Sent Successfully!</h4>
                  <p className="text-green-700">Thank you for booking. Our staff will call you shortly to confirm your appointment time.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-green-700 font-semibold hover:underline"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleBookAppointment}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Reason for Visit</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition">
                      <option>General Consultation</option>
                      <option>Diabetes Management</option>
                      <option>Emergency Follow-up</option>
                      <option>Kidney Health</option>
                      <option>Fever / Infection</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Slot</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition appearance-none">
                        <option>Morning (10 AM - 1 PM)</option>
                        <option>Evening (5 PM - 9 PM)</option>
                      </select>
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes (Optional)</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="Describe your symptoms briefly..."></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className={`w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition shadow-lg flex items-center justify-center gap-2 ${formStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {formStatus === 'submitting' ? (
                        <>Processing...</>
                      ) : (
                        <>Confirm Appointment Request <ArrowRight size={20} /></>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">By submitting, you agree to receive calls/messages for appointment confirmation.</p>
                  </div>
                </form>
              )}
            </div>
          </div>
          
          {/* Map Embed */}
          <div className="mt-12 w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
            <iframe 
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Clinic Location"
              className="grayscale hover:grayscale-0 transition duration-500"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-4 bg-primary-800 rounded-full mb-6">
            <HeartPulse size={32} className="text-accent-500" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">{DOCTOR_NAME}</h2>
          <p className="mb-8 max-w-md mx-auto text-gray-400">Providing advanced emergency medicine and specialized diabetes care to the Barrackpore community with compassion and excellence.</p>
          <div className="flex justify-center gap-8 mb-10">
            <a href="#" className="hover:text-white transition transform hover:scale-110">Facebook</a>
            <a href="#" className="hover:text-white transition transform hover:scale-110">Instagram</a>
            <a href="#" className="hover:text-white transition transform hover:scale-110">LinkedIn</a>
            <a href="#" className="hover:text-white transition transform hover:scale-110">Twitter</a>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm">
            <p>© {new Date().getFullYear()} Dr. Saurav Bhakat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;