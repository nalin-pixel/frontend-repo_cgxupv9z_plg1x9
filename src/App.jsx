import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Steps from './components/Steps'
import Scenarios from './components/Scenarios'
import BeforeAfter from './components/BeforeAfter'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{background:'#0B0D10'}}>
      {/* SEO Meta */}
      <Helmet />
      <Navbar />
      <Hero />
      <PainPoints />
      <Steps />
      <Scenarios />
      <BeforeAfter />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

const Helmet = () => (
  <>
    <title>LaunchPro VoicePro for Builders — AI Voice Agent</title>
    <meta name="description" content="VoicePro answers builder calls 24/7, pre-qualifies leads, and books site visits. Built for GCs, remodelers, and home builders." />
    <meta name="theme-color" content="#0B0D10" />
    <meta property="og:title" content="Never Miss Another High-Value Build Lead Again" />
    <meta property="og:description" content="AI voice agent for builders — call answering, qualification, and booking." />
  </>
)

export default App
