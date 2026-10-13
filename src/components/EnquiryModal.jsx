import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, Send, User, MapPin, ChevronRight } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  // Prevent scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else        document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Hello Birdwing Ecotourism!\n\nSafari Enquiry:\nName: ${form.name}\nPhone: ${form.phone}\nPreferred Date: ${form.date || 'Flexible'}\nNotes: ${form.notes || 'None'}`
    );
    window.open(`https://wa.me/919657493161?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Safari Enquiry"
    >
      <div
        className="relative w-full max-w-lg bg-[#F6F0E2] rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-28 bg-[#173B2A] flex items-end px-7 pb-5">
          <img
            src="/assets/hero_slide_1.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10">
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#DDB64C] uppercase mb-0.5">Birdwing Ecotourism</p>
            <h2 className="font-serif text-2xl font-bold text-white">Book a Safari</h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all"
            aria-label="Close enquiry form"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-7">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#173B2A]/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-[#173B2A]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#173B2A] mb-2">Redirected to WhatsApp</h3>
              <p className="text-sm text-[#202A20]/70 mb-6">
                Your enquiry has been sent to Pranav Mahajan via WhatsApp. He will respond shortly.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:9657493161"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#173B2A] text-white text-sm font-semibold tracking-wider hover:bg-[#263D25] transition-all"
                >
                  <Phone className="w-4 h-4 text-[#DDB64C]" />
                  <span>Call Directly: 9657493161</span>
                </a>
                <button
                  onClick={onClose}
                  className="text-sm text-[#202A20]/50 hover:text-[#202A20] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] font-bold tracking-[0.18em] text-[#687348] uppercase mb-1 block">Your Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#202A20]/10 text-sm text-[#202A20] placeholder-[#202A20]/35 focus:outline-none focus:border-[#687348] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[0.18em] text-[#687348] uppercase mb-1 block">Phone Number</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#202A20]/10 text-sm text-[#202A20] placeholder-[#202A20]/35 focus:outline-none focus:border-[#687348] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[0.18em] text-[#687348] uppercase mb-1 block">Preferred Visit Date</label>
                <input
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  type="date"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#202A20]/10 text-sm text-[#202A20] focus:outline-none focus:border-[#687348] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[0.18em] text-[#687348] uppercase mb-1 block">Notes / Requirements</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Group size, special requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#202A20]/10 text-sm text-[#202A20] placeholder-[#202A20]/35 focus:outline-none focus:border-[#687348] transition-colors resize-none"
                />
              </div>

              {/* Contact info */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#173B2A]/7 text-xs text-[#202A20]/65">
                <User className="w-4 h-4 text-[#687348] shrink-0" />
                <span>Pranav Mahajan · 9657493161 · Chandoli, Manadur, Shirala, Sangli</span>
              </div>

              <button
                type="submit"
                className="group mt-1 flex items-center justify-center gap-3 pl-6 pr-2 py-3 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-sm font-semibold tracking-wider transition-all shadow-md"
              >
                <span>Send via WhatsApp</span>
                <span className="w-8 h-8 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </button>

              <div className="flex items-center justify-center gap-4 pt-1">
                <a href="tel:9657493161" className="inline-flex items-center gap-1.5 text-[11px] text-[#687348] font-semibold hover:underline">
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
                <span className="text-[#202A20]/20 text-xs">|</span>
                <a href="https://wa.me/919657493161" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[11px] text-[#687348] font-semibold hover:underline">
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Direct
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
