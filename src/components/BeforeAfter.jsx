import React from 'react'
import { motion } from 'framer-motion'

const Panel = ({ side, title, items }) => (
  <motion.div
    initial={{opacity:0, x: side === 'before' ? -40 : 40}}
    whileInView={{opacity:1, x:0}}
    viewport={{ once: true }}
    transition={{duration:0.6}}
    className="p-6 rounded-xl border border-[#1a1f24] bg-black/40"
  >
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <ul className="space-y-2 text-gray-300">
      {items.map(i => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-2 block w-1.5 h-1.5 rounded-full" style={{background: side==='before' ? '#EC3D3D' : '#F4D27A'}} />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  </motion.div>
)

const BeforeAfter = () => {
  return (
    <section className="py-20" style={{background:'#0B0D10'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Before & After VoicePro (Builders Edition)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Panel side="before" title="BEFORE" items={[
            'Missed calls', 'Chasing leads', 'Losing jobs to faster builders', 'Constant interruptions', 'Unqualified leads wasting time']}/>
          <Panel side="after" title="AFTER" items={[
            'Every call answered instantly', 'Pre-qualified lead summaries', 'Auto-booking', 'No interruptions', 'Higher close rate', 'More professionalism']}/>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
