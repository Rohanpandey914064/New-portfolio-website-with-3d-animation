import React, { lazy, Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Hero from './sections/Hero'
import NavBar from './components/NavBar'

const ShowcaseSection = lazy(() => import('./sections/ShowcaseSection'))
const FeatureCards = lazy(() => import('./sections/FeatureCards'))
const ExperienceSection = lazy(() => import('./sections/ExperienceSection'))
const TechStack = lazy(() => import('./sections/TechStack'))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import('./sections/Footer'))

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Suspense fallback={null}>
        <ShowcaseSection />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Contact />
        <Footer />
      </Suspense>
      <Analytics />
    </>
  )
}

export default App