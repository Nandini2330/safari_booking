import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, User, Calendar, FileText, ChevronRight } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Birdwing Ecotourism!\n\n🐾 Safari Booking Enquiry:\n• Name: ${form.name}\n• Phone: ${form.phone}\n• Visit Date: ${form.date || 'Flexible'}\n• Notes: ${form.notes || 'None'}\n\nPlease share availability and Gypsy booking rates.`
    );
    window.open(`https://wa.me/919657493161?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div
      className="fixed inset-0 z-[9998] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Safari Booking Enquiry"
    >
      <div
        className="relative w-full max-w-lg bg-[#F6F0E2] rounded-3xl shadow-2xl overflow-hidden border border-[#DDB64C]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-32 bg-[#173B2A] flex items-end px-7 pb-5">
          <img
            src="/assets/hero_slide_1.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173B2A] to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#DDB64C] uppercase block mb-0.5">
              BIRDWING ECOTOURISM · SAHYADRI
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">Book a Safari</h2>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center transition-all focus:outline-none"
            aria-label="Close enquiry form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#173B2A]/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#173B2A] mb-2">Redirecting to WhatsApp</h3>
              <p className="text-sm text-[#202A20]/80 mb-6 max-w-sm mx-auto">
                Your enquiry is being sent directly to naturalist Pranav Mahajan via WhatsApp for confirmation and permit details.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:9657493161"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#173B2A] text-white text-sm font-semibold tracking-wider hover:bg-[#263D25] transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-[#DDB64C]" />
                  <span>Call Directly: 9657493161</span>
                </a>
                <button
                  onClick={onClose}
                  className="text-xs text-[#202A20]/60 hover:text-[#202A20] font-medium transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] font-bold tracking-[0.18em] text-[#687348] uppercase mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>Your Full Name *</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#202A20]/15 text-sm text-[#202A20] placeholder-[#202A20]/40 focus:outline-none focus:border-[#687348] focus:ring-1 focus:ring-[#687348] transition-all"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold tracking-[0.18em] text-[#687348] uppercase mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp / Phone Number *</span>
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  placeholder="e.g. 9876543210 (10 digits)"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#202A20]/15 text-sm text-[#202A20] placeholder-[#202A20]/40 focus:outline-none focus:border-[#687348] focus:ring-1 focus:ring-[#687348] transition-all"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold tracking-[0.18em] text-[#687348] uppercase mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Preferred Visit Date</span>
                </label>
                <input
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  type="date"
                  min={todayStr}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#202A20]/15 text-sm text-[#202A20] focus:outline-none focus:border-[#687348] focus:ring-1 focus:ring-[#687348] transition-all"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold tracking-[0.18em] text-[#687348] uppercase mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Group Size / Special Requests</span>
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={2}
                  placeholder="e.g. 4 adults, interested in birdwatching..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#202A20]/15 text-sm text-[#202A20] placeholder-[#202A20]/40 focus:outline-none focus:border-[#687348] focus:ring-1 focus:ring-[#687348] transition-all resize-none"
                />
              </div>

              {/* Naturalist info card */}
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#173B2A]/8 text-xs text-[#202A20]/75">
                <span className="text-sm">🌿</span>
                <span className="leading-tight">
                  Direct lead naturalist: <strong>Pranav Mahajan (9657493161)</strong> · Manadur, Chandoli
                </span>
              </div>

              <button
                type="submit"
                className="group mt-1 flex items-center justify-center gap-3 pl-6 pr-2 py-3 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-sm font-bold tracking-wider transition-all shadow-lg active:scale-95"
              >
                <span>Send Enquiry via WhatsApp</span>
                <span className="w-8 h-8 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </button>

              <div className="flex items-center justify-center gap-4 pt-0.5">
                <a href="tel:9657493161" className="inline-flex items-center gap-1.5 text-xs text-[#687348] font-bold hover:underline">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 9657493161</span>
                </a>
                <span className="text-[#202A20]/25 text-xs">|</span>
                <a
                  href="https://wa.me/919657493161"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-bold hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
