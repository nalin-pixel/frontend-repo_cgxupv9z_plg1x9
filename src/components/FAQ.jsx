import React, { useState } from 'react'

const faqs = [
  ['Does VoicePro understand construction terminology?','Yes — it’s trained on builder-specific language.'],
  ['Can it book jobs directly into my calendar?','Absolutely. Connect Google, Outlook, Calendly, or GHL.'],
  ['Can I customize the script for my services?','Yes — tailor it for remodeling, new builds, or trades.'],
  ['Does it handle permit questions?','It provides accurate permitting guidance for your jurisdiction.'],
  ['Can it answer calls in Spanish?','Sí. It supports bilingual flows.'],
  ['How fast is setup?','Most builders go live in under 48 hours.'],
  ['What if I already have a receptionist?','VoicePro fills gaps after-hours, weekends, and overflow.'],
]

const FAQ = () => {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="py-20" style={{background:'#0B0D10'}}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">FAQ — Builder Edition</h2>
        <div className="divide-y divide-[#1a1f24] border border-[#1a1f24] rounded-xl bg-black/40">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <div key={q}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full text-left px-6 py-5 text-gray-200 flex items-center justify-between">
                  <span>{q}</span>
                  <span className={`transform transition-transform ${isOpen ? 'rotate-45' : ''}`} style={{color:'#F4D27A'}}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden px-6 pb-5 text-gray-400">{a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
