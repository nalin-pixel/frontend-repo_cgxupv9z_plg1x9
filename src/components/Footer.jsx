import React from 'react'

const Footer = () => {
  return (
    <footer className="py-10 border-t border-[#1a1f24]" style={{background:'#0B0D10'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
        <div className="flex items-center gap-2 text-gray-300">
          <span className="font-semibold text-white">LaunchPro</span>
          <span className="text-[#F4D27A]">|</span>
          <span>VoicePro for Builders</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="mailto:hello@launchpro.ai" className="hover:text-white">hello@launchpro.ai</a>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#111418] border border-[#1a1f24]" />
          <div className="w-8 h-8 rounded bg-[#111418] border border-[#1a1f24]" />
          <div className="w-8 h-8 rounded bg-[#111418] border border-[#1a1f24]" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
