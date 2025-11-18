import React from 'react'
import { Menu, PhoneCall } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-[#1a1f24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#F4D27A] to-[#b8994e] shadow-[0_0_30px_rgba(244,210,122,0.35)]" />
            <span className="text-sm sm:text-base font-semibold tracking-wide text-white">
              LaunchPro <span className="text-[#F4D27A]">|</span> VoicePro for Builders
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#pain" className="hover:text-white">Pain Points</a>
            <a href="#steps" className="hover:text-white">How it Works</a>
            <a href="#scenarios" className="hover:text-white">Scenarios</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>

          <a href="#book" className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md bg-[#EC3D3D] hover:bg-[#ff5151] text-white font-semibold shadow-[0_0_20px_rgba(236,61,61,0.45)] transition-colors">
            <PhoneCall className="w-4 h-4" />
            <span className="hidden sm:inline">Get VoicePro</span>
            <span className="sm:hidden">Get</span>
          </a>

          <button className="md:hidden text-gray-200" aria-label="Menu">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
