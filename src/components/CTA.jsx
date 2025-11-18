import React from 'react'

const CTA = () => {
  return (
    <section id="book" className="py-20" style={{background:'#0B0D10'}}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to Close More High-Value Build Jobs?</h2>
        <p className="text-gray-300 mt-3">Let VoicePro handle the calls, you handle the builds.</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <input className="px-4 py-3 rounded-md bg-black/50 border border-[#1a1f24] text-white placeholder-gray-500 focus:outline-none focus:ring-2" placeholder="Name" />
          <input className="px-4 py-3 rounded-md bg-black/50 border border-[#1a1f24] text-white placeholder-gray-500 focus:outline-none focus:ring-2" placeholder="Company" />
          <input className="px-4 py-3 rounded-md bg-black/50 border border-[#1a1f24] text-white placeholder-gray-500 focus:outline-none focus:ring-2" placeholder="Phone" />
          <input className="px-4 py-3 rounded-md bg-black/50 border border-[#1a1f24] text-white placeholder-gray-500 focus:outline-none focus:ring-2" placeholder="Email" />
          <select className="px-4 py-3 rounded-md bg-black/50 border border-[#1a1f24] text-white focus:outline-none focus:ring-2 sm:col-span-2">
            <option>Project Types</option>
            <option>Remodeling</option>
            <option>New Home Builds</option>
            <option>Commercial</option>
            <option>Trades</option>
          </select>
          <button type="submit" className="sm:col-span-2 mt-2 px-6 py-3 rounded-md font-semibold text-black shadow-[0_0_30px_rgba(236,61,61,0.25)]" style={{background:'#EC3D3D'}}>
            Request Demo
          </button>
        </form>
        <div className="mt-6 text-gray-400 text-sm">
          <p>Audio sample placeholder — upload your AI voice script here.</p>
          <p>Booking placeholder — integrate Calendly or GHL popup.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
