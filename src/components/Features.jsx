import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Mic, ClipboardList, Calendar, Info, Truck, MessageSquare, Database, FileText } from 'lucide-react'

const features = [
  { icon: Clock, title: '24/7 call answering' },
  { icon: Mic, title: 'Natural human-sounding AI voice' },
  { icon: ClipboardList, title: 'Qualification script tailored to builders' },
  { icon: Calendar, title: 'Books site visits, Zoom calls, or inspections' },
  { icon: Info, title: 'Handles permitting FAQs' },
  { icon: Truck, title: 'Manages material delays & weather updates' },
  { icon: MessageSquare, title: 'Missed-call textbacks with links & phone' },
  { icon: Database, title: 'CRM integrations' },
  { icon: FileText, title: 'Call transcripts & job-type analysis' },
]

const Features = () => {
  return (
    <section className="py-20" style={{background:'#0B0D10'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Why Builders Love VoicePro</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon: Icon, title}, i) => (
            <motion.div
              key={title}
              whileHover={{y:-4, boxShadow:'0 12px 40px rgba(244,210,122,0.07)'}}
              className="p-6 rounded-xl border border-[#1a1f24] bg-black/40 text-gray-200 transition-transform"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md grid place-items-center" style={{background:'#111418', border:'1px solid #272c33'}}>
                  <Icon className="w-5 h-5" color="#F4D27A" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
