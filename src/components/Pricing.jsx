import React from 'react'

const Pricing = () => {
  return (
    <section id="pricing" className="py-20" style={{background:'#0B0D10'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Simple, Builder-Friendly Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            name:'Starter', desc:'Per-minute billing — for small crews', price:'Pay-as-you-go', highlight:false
          },{
            name:'Builder Growth Plan', desc:'Best for active GCs', price:'$499/mo', highlight:true
          },{
            name:'Builder Scale Plan', desc:'For larger multi-crew builders', price:'Custom', highlight:false
          }].map((p, i) => (
            <div key={p.name} className={`relative p-6 rounded-xl border ${p.highlight ? 'border-[#F4D27A] shadow-[0_0_35px_rgba(244,210,122,0.25)]' : 'border-[#1a1f24]'} bg-black/40 text-gray-200`}>
              {p.highlight && (
                <div className="absolute -inset-[1px] rounded-[14px] animate-pulse" style={{boxShadow:'0 0 30px rgba(244,210,122,0.35)'}} aria-hidden />
              )}
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <p className="text-gray-400 mt-1">{p.desc}</p>
              <p className="text-3xl font-bold mt-6" style={{color:'#F4D27A'}}>{p.price}</p>
              <a href="#book" className="mt-6 inline-block px-5 py-3 rounded-md font-semibold text-black" style={{background:'#F4D27A'}}>Choose Plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
