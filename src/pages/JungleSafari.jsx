import React from 'react';
import { Clock, Car, Users, Info, ChevronRight, CheckCircle2, ShieldAlert, Check, MessageCircle } from 'lucide-react';

const infoItems = [
  {
    icon: Clock,
    title: 'Safari Timings',
    desc: 'Morning: 06:00 AM – 10:00 AM | Afternoon: 03:00 PM – 06:30 PM. Early morning slots are optimal for predator tracking and birdwatching.',
    highlight: '2 Daily Slots',
  },
  {
    icon: Car,
    title: '4×4 Gypsy Safaris',
    desc: 'Certified Forest Department registered open-top 4×4 Gypsies accompanied by licensed local tribal naturalists and expert drivers.',
    highlight: 'Open Gypsy Vehicles',
  },
  {
    icon: Users,
    title: 'Booking & Permits',
    desc: 'Advance gate permit reservation is mandatory. Max 6 guests per vehicle. Valid Government photo ID required for all passengers.',
    highlight: 'Advance Permit Req.',
  },
  {
    icon: Info,
    title: 'Visitor Guidelines',
    desc: 'Strictly zero plastic zone. Wear khaki/olive green earthy tones. Maintain absolute silence at waterholes and salt licks.',
    highlight: 'Eco Code of Conduct',
  },
];

export default function JungleSafari({ openEnquiryModal }) {
  return (
    <div className="w-full bg-[#F6F0E2] text-[#202A20]">

      {/* ─── HERO ─── */}
      <div className="relative w-full h-[60vh] sm:h-[68vh] bg-[#173B2A] overflow-hidden flex items-center">
        <img
          src="/assets/safari_hero.jpg"
          alt="Jungle safari jeep in Chandoli forest"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20 pointer-events-none" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-bold tracking-[0.28em] text-[#DDB64C] uppercase block mb-2">
              SAHYADRI TIGER RESERVE
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              Jungle Safari Expeditions
            </h1>
            <p className="mt-3 text-white/80 text-sm sm:text-base max-w-xl">
              Traverse virgin Western Ghats rainforests, misty basalt plateaus, and ancient wildlife corridors with Birdwing Ecotourism.
            </p>
          </div>
        </div>
      </div>

      {/* ─── EXPERIENCE CHANDOLI ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left text */}
          <div className="flex flex-col items-start">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
              GUIDED WILDLIFE EXPEDITIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173B2A] leading-tight tracking-tight mb-3">
              Into the Untamed Forest
            </h2>
            <span className="w-10 h-[3px] bg-[#DDB64C] rounded mb-5 block" />
            <p className="text-sm sm:text-base text-[#202A20]/80 leading-relaxed mb-4">
              Chandoli National Park holds some of the most rugged, dense, and ecologically diverse habitats in Maharashtra. Home to the elusive Indian Leopard, Royal Bengal Tiger, Indian Gaur (Bison), Sambar, Barking Deer, Sloth Bear, and over 122 bird species.
            </p>
            <p className="text-sm sm:text-base text-[#202A20]/75 leading-relaxed mb-6">
              With Birdwing Ecotourism, every drive is led by certified local naturalists who interpret pugmarks, alarm calls, endemic flora, and Maratha history along the trail.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={openEnquiryModal}
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-md active:scale-95"
              >
                <span>Book a Safari Online</span>
                <span className="w-7 h-7 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </button>

              <a
                href="tel:9657493161"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#173B2A]/30 text-[#173B2A] text-xs sm:text-sm font-bold hover:bg-[#173B2A]/5 transition-all"
              >
                <span>Call Naturalist: 9657493161</span>
              </a>
            </div>
          </div>

          {/* Right arch image */}
          <div>
            <div className="w-full h-80 sm:h-96 shape-arch-tall overflow-hidden shadow-2xl relative group">
              <img
                src="/assets/safari_arch.jpg"
                alt="Green forest canopy arch road in Chandoli"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-white/90 font-medium tracking-wide">
                  Ancient Forest Canopy Arch Circuit · Zolambi Range
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OFFICIAL SAFARI TARIFF & PACKAGES ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF7F0] border-t border-[#202A20]/8">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase block mb-2">
              OFFICIAL SAHYADRI STR TARIFF
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173B2A] tracking-tight leading-tight mb-3">
              Gypsy Safari Pricing & Slots
            </h2>
            <span className="w-12 h-[3px] bg-[#DDB64C] rounded mx-auto mb-4 block" />
            <p className="text-sm sm:text-base text-[#202A20]/75 leading-relaxed">
              Standard Maharashtra Tiger Reserve Gypsy safari rates. Each open 4×4 Gypsy vehicle accommodates up to 6 adults + 2 children under 8 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Weekday */}
            <div className="flex flex-col justify-between bg-white rounded-3xl p-7 sm:p-8 border border-[#202A20]/10 shadow-md hover-lift transition-all duration-300">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-[#687348] tracking-widest uppercase">Weekday (Mon–Fri)</span>
                  <span className="text-[11px] font-semibold text-[#173B2A] bg-[#F6F0E2] px-2.5 py-0.5 rounded-full">
                    1 to 59 Days
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#173B2A] mb-2">Weekday Safari</h3>
                <p className="text-xs text-[#202A20]/75 leading-relaxed mb-6">
                  Monday to Friday forest drives with peaceful trails and high predator movement.
                </p>
                <div className="pb-6 mb-6 border-b border-[#202A20]/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#173B2A]">₹8,000</span>
                    <span className="text-xs text-[#202A20]/65 font-medium">/ Gypsy</span>
                  </div>
                  <span className="text-[11px] text-[#687348] font-semibold block mt-1">6 Adults + 2 Kids (Under 8)</span>
                </div>
                <ul className="space-y-3 mb-8 text-xs text-[#202A20]/85">
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Dedicated 4×4 Open Gypsy Vehicle</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Authorised Driver & Guide Fees Included</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>STR Gate Permits & Taxes Included</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2.5 pt-2">
                <button
                  onClick={openEnquiryModal}
                  className="w-full py-3 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-md active:scale-95"
                >
                  Book Weekday Safari
                </button>
                <a
                  href="https://wa.me/919657493161?text=Hello%2C%20I%20want%20to%20book%20the%20Weekday%20Gypsy%20Safari%20(%E2%82%B98000)."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5 text-xs font-semibold tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Weekend */}
            <div className="relative flex flex-col justify-between bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#DDB64C] shadow-xl hover-lift transition-all duration-300">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#DDB64C] text-[#173B2A] text-[10px] font-bold tracking-widest uppercase shadow-sm">
                MOST POPULAR
              </div>
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-[#687348] tracking-widest uppercase">Weekend (Sat–Sun)</span>
                  <span className="text-[11px] font-semibold text-[#173B2A] bg-[#F6F0E2] px-2.5 py-0.5 rounded-full">
                    1 to 59 Days
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#173B2A] mb-2">Weekend Prime Safari</h3>
                <p className="text-xs text-[#202A20]/75 leading-relaxed mb-6">
                  Saturday & Sunday prime slots. Optimal for weekend getaways from Pune and Mumbai.
                </p>
                <div className="pb-6 mb-6 border-b border-[#202A20]/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#173B2A]">₹9,000</span>
                    <span className="text-xs text-[#202A20]/65 font-medium">/ Gypsy</span>
                  </div>
                  <span className="text-[11px] text-[#687348] font-semibold block mt-1">6 Adults + 2 Kids (Under 8)</span>
                </div>
                <ul className="space-y-3 mb-8 text-xs text-[#202A20]/85">
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Dedicated 4×4 Open Gypsy Vehicle</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Weekend Forest Permits & Driver Charges</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Certified Guide & Forest Entry Taxes</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2.5 pt-2">
                <button
                  onClick={openEnquiryModal}
                  className="w-full py-3 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-md active:scale-95"
                >
                  Book Weekend Safari
                </button>
                <a
                  href="https://wa.me/919657493161?text=Hello%2C%20I%20want%20to%20book%20the%20Weekend%20Gypsy%20Safari%20(%E2%82%B99000)."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5 text-xs font-semibold tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Tatkal */}
            <div className="flex flex-col justify-between bg-white rounded-3xl p-7 sm:p-8 border border-[#202A20]/10 shadow-md hover-lift transition-all duration-300">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-[#687348] tracking-widest uppercase">Tatkal / Advance</span>
                  <span className="text-[11px] font-semibold text-[#173B2A] bg-[#F6F0E2] px-2.5 py-0.5 rounded-full">
                    60 to 120 Days
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#173B2A] mb-2">Advance Priority Pass</h3>
                <p className="text-xs text-[#202A20]/75 leading-relaxed mb-6">
                  Early advance reservation for core gates during peak seasons and long weekends.
                </p>
                <div className="pb-6 mb-6 border-b border-[#202A20]/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#173B2A]">₹10,800</span>
                    <span className="text-xs text-[#202A20]/65 font-medium">/ Wkday · ₹15,300 Wkend</span>
                  </div>
                  <span className="text-[11px] text-[#687348] font-semibold block mt-1">6 Adults + 2 Kids (Under 8)</span>
                </div>
                <ul className="space-y-3 mb-8 text-xs text-[#202A20]/85">
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Guaranteed Core Gate Reservation</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Dedicated 4×4 Gypsy & Senior Guide</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>All Permits, Entry Fees & Taxes Included</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2.5 pt-2">
                <button
                  onClick={openEnquiryModal}
                  className="w-full py-3 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-md active:scale-95"
                >
                  Book Tatkal Safari
                </button>
                <a
                  href="https://wa.me/919657493161?text=Hello%2C%20I%20want%20to%20book%20the%20Tatkal%20Advance%20Gypsy%20Safari."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5 text-xs font-semibold tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>

          {/* Timings Strip */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white/70 border border-[#202A20]/10 flex flex-wrap items-center justify-around gap-4 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#173B2A]/10 flex items-center justify-center text-[#173B2A] font-bold">🌅</span>
              <div>
                <span className="font-bold text-[#173B2A] block">Morning Slot</span>
                <span className="text-[#202A20]/75">06:00 AM – 10:00 AM</span>
              </div>
            </div>
            <div className="w-[1px] h-8 bg-[#202A20]/15 hidden sm:block" />
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#173B2A]/10 flex items-center justify-center text-[#173B2A] font-bold">🌇</span>
              <div>
                <span className="font-bold text-[#173B2A] block">Evening Slot</span>
                <span className="text-[#202A20]/75">02:30 PM – 06:30 PM</span>
              </div>
            </div>
            <div className="w-[1px] h-8 bg-[#202A20]/15 hidden sm:block" />
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#173B2A]/10 flex items-center justify-center text-[#173B2A] font-bold">Jeep</span>
              <div>
                <span className="font-bold text-[#173B2A] block">Gypsy Capacity</span>
                <span className="text-[#202A20]/75">6 Adults + 2 Children (Under 8)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4 DETAILED SAFARI INFO ITEMS ─── */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto border-t border-[#202A20]/10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase">SAFARI ESSENTIALS</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173B2A] mt-1">What You Need to Know</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoItems.map(({ icon: Icon, title, desc, highlight }, idx) => (
            <div
              key={idx}
              onClick={openEnquiryModal}
              className="flex flex-col p-6 sm:p-7 rounded-2xl bg-white/80 hover:bg-white border border-[#202A20]/8 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center group-hover:bg-[#173B2A] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#DDB64C]/20 text-[#173B2A] uppercase tracking-wider">
                  {highlight}
                </span>
              </div>

              <h3 className="font-serif text-lg font-bold text-[#173B2A] mb-2">{title}</h3>
              <p className="text-xs text-[#202A20]/75 leading-relaxed flex-1">{desc}</p>
              
              <div className="mt-4 pt-3 border-t border-[#202A20]/8 flex items-center justify-between text-[11px] font-bold text-[#687348] tracking-wider uppercase group-hover:text-[#173B2A]">
                <span>Enquire Slot</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PANORAMIC BOTTOM BANNER ─── */}
      <section className="relative w-full h-64 sm:h-80 overflow-hidden flex items-center justify-center text-center">
        <img
          src="/assets/safari_bottom_banner.jpg"
          alt="Sahyadri hills and Chandoli lake waters"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4 max-w-2xl">
          <p className="text-[#DDB64C] text-[10px] sm:text-xs tracking-[0.28em] font-bold uppercase mb-2">
            CONSERVATION FIRST
          </p>
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-4">
            Protecting the Wilderness for Future Generations
          </h3>
          <button
            onClick={openEnquiryModal}
            className="px-6 py-3 rounded-full bg-[#DDB64C] text-[#173B2A] text-xs sm:text-sm font-bold tracking-wider hover:bg-[#eac45f] transition-all shadow-xl active:scale-95"
          >
            RESERVE YOUR SAFARI TODAY
          </button>
        </div>
      </section>

    </div>
  );
}
