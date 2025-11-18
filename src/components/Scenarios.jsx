import React from 'react'
import { motion } from 'framer-motion'

const Block = ({ title, caption, delay }) => (
  <motion.div
    initial={{opacity:0, y:30}}
    whileInView={{opacity:1, y:0}}
    viewport={{ once: true, margin: '-100px' }}
    transition={{duration:0.6, delay}}
    className="relative p-6 rounded-xl border border-[#1a1f24] bg-gradient-to-b from-black/50 to-black/10 overflow-hidden"
  >
    <div className="absolute inset-0 -z-0 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 30% 0%, rgba(244,210,122,0.07), transparent 35%)'}} />
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-gray-300 mt-2">{caption}</p>
  </motion.div>
)

const Scenarios = () => {
  return (
    <section id="scenarios" className="py-20 relative" style={{background:'#0B0D10'}}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="h-full w-full" style={{backgroundImage:'linear-gradient(rgba(30,37,44,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,37,44,0.4) 1px, transparent 1px)', backgroundSize:'28px 28px'}} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Real Builder Scenarios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Block title="On-site framing" caption="You’re on a ladder. VoicePro answers for you." delay={0} />
          <Block title="Driving between job sites" caption="VoicePro books a $30K kitchen remodel while you’re on the road." delay={0.1} />
          <Block title="Weekend or after-hours" caption="VoicePro turns Sunday calls into Monday appointments." delay={0.2} />
        </div>
      </div>
    </section>
  )
}

export default Scenarios
