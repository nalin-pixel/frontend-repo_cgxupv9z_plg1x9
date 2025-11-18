import React from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, ClipboardList, CalendarDays } from 'lucide-react'

const Step = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}}
    viewport={{ once: true }}
    transition={{delay, duration:0.5}}
    className="p-6 rounded-xl border border-[#1a1f24] bg-black/40 text-gray-200"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-md grid place-items-center" style={{background:'#111418', border:'1px solid #272c33'}}>
        <Icon className="w-5 h-5" color="#F4D27A" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300/90">{desc}</p>
  </motion.div>
)

const Steps = () => {
  return (
    <section id="steps" className="py-20" style={{background:'#0B0D10'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">What VoicePro Does for Builders</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Step icon={PhoneCall} title="Answers Every Call 24/7" desc="Professional greeting that makes you look bigger than the competition." delay={0} />
          <Step icon={ClipboardList} title="Auto-Qualifies Leads" desc="Collects project type, square footage, timeline, budget, location, and permitting status." delay={0.1} />
          <Step icon={CalendarDays} title="Books Site Visits" desc="Schedules estimate calls or site visits straight to your calendar." delay={0.2} />
        </div>
      </div>
    </section>
  )
}

export default Steps
