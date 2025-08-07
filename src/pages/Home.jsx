import React, { Suspense } from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/HeroSection/Herosection'
import Features from '../components/Features'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Suspense fallback={<h1>Loading..........</h1>}>
        <Navbar />
        <Herosection />
        <Features />
        <Footer />
      </Suspense>
    </>
  )
}

export default Home