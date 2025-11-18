import React from 'react'
import { motion } from 'framer-motion'

const points = [
  'Constantly missing calls while on-site.',
  'Leads calling multiple builders—whoever answers first wins the job.',
  'Can’t respond while driving, using tools, or handling deliveries.',
  'Time wasted answering tire-kicker questions.',
  'Crew interruptions from ringing phones.',
]

const PainPoints = () => {
  return (
    <section id="pain" className="relative py-20" style={{background:'#0B0D10'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">The Cost of Missed Calls</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p}
              initial={{opacity:0, x: i % 2 === 0 ? -30 : 30}}
              whileInView={{opacity:1, x:0}}
              viewport={{ once: true, margin: '-50px' }}
              transition={{delay: i * 0.08, type:'spring', stiffness:120}}
              className="p-6 rounded-xl border border-[#1a1f24] bg-gradient-to-b from-black/50 to-black/20 text-gray-200"
            >
              <div className="h-1.5 w-16 rounded-full mb-4" style={{background:'#EC3D3D'}} />
              <p>{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PainPoints
