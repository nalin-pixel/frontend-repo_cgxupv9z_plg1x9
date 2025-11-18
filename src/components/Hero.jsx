import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative overflow-hidden" style={{background:'#0B0D10'}}>
      {/* Blueprint grid background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="w-full h-full opacity-25" style={{
          backgroundImage: `linear-gradient(rgba(52,64,84,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(52,64,84,0.25) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          backgroundPosition: 'center'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pb-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <motion.h1
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6}}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Never Miss Another High-Value Build Lead Again.
            </motion.h1>

            <motion.p
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.1, duration:0.6}}
              className="mt-4 text-lg sm:text-xl text-gray-300"
            >
              VoicePro answers your calls, pre-qualifies clients, and books site visits even while you’re framing, driving, or managing crews.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#audio" className="px-6 py-3 rounded-md font-semibold text-black" style={{background:'#F4D27A'}}>
                Hear VoicePro
              </a>
              <a href="#book" className="px-6 py-3 rounded-md font-semibold text-white border border-[#EC3D3D] hover:bg-[#EC3D3D] transition-colors">
                Book a Demo
              </a>
            </div>

            {/* Phone mockup with glowing waveform */}
            <div className="mt-12 relative w-full max-w-sm">
              <div className="relative rounded-3xl p-4 border border-[#1a1f24] bg-black/60 shadow-[0_0_40px_rgba(244,210,122,0.15)]">
                <div className="aspect-[9/19.5] rounded-2xl border border-[#30363d] bg-[#0B0D10] overflow-hidden">
                  <div className="h-full flex items-center justify-center">
                    <motion.div
                      className="w-48 h-24 rounded-full"
                      style={{background:'radial-gradient(circle at 50% 50%, rgba(236,61,61,0.35), transparent 60%)'}}
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(236,61,61,0.6)',
                          '0 0 0 20px rgba(236,61,61,0.0)'
                        ]
                      }}
                      transition={{repeat: Infinity, duration: 2}}
                    />
                  </div>
                  <div className="absolute inset-x-8 bottom-8 h-10 rounded-md bg-gradient-to-r from-[#F4D27A] via-[#EC3D3D] to-[#F4D27A] opacity-70 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[420px] sm:h-[520px] md:h-[600px] rounded-xl relative">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            {/* Gold gradient overlay for depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#F4D27A]/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
