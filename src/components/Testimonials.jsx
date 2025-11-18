import React, { useEffect, useState } from 'react'

const slides = [
  {
    quote: 'VoicePro easily saves us 20 hours a week of phone time. My supers stay on-site, and we never miss a hot lead.',
    author: 'Alex P., General Contractor'
  },
  {
    quote: 'We closed 3 extra jobs in the first week. The auto-booking alone pays for itself.',
    author: 'Riverside Remodeling'
  },
  {
    quote: 'We look like a million-dollar company because calls never go unanswered.',
    author: 'Summit Homes, Regional Builder'
  }
]

const Testimonials = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-20" style={{background:'#0B0D10'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          {slides.map((s, i) => (
            <div key={i} className={`transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'} absolute inset-0 flex flex-col items-center justify-center px-6`}>
              <p className="text-xl sm:text-2xl text-gray-100 font-medium">“{s.quote}”</p>
              <p className="mt-4 text-gray-400">— {s.author}</p>
            </div>
          ))}
          <div className="relative h-40" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
