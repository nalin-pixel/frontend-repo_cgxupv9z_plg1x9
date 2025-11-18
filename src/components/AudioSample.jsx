import React, { useRef, useState } from 'react'

const AudioSample = () => {
  const inputRef = useRef(null)
  const [src, setSrc] = useState('')

  const onSelect = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setSrc(url)
  }

  return (
    <section id="audio" className="py-20" style={{background:'#0B0D10'}}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Hear VoicePro</h2>
        <p className="text-gray-300 mt-3">Upload a sample or play the demo to experience the builder intake voice.</p>
        <div className="mt-8 p-6 rounded-xl border border-[#1a1f24] bg-black/40">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => inputRef.current?.click()} className="px-5 py-3 rounded-md font-semibold text-black" style={{background:'#F4D27A'}}>Upload Audio</button>
            <input ref={inputRef} type="file" accept="audio/*" onChange={onSelect} className="hidden" />
            <audio controls className="w-full sm:w-auto">
              <source src={src} />
            </audio>
          </div>
          <p className="text-xs text-gray-500 mt-3">Tip: Record a short script: project type, square footage, timeline, budget, location, permitting.</p>
        </div>
      </div>
    </section>
  )
}

export default AudioSample
