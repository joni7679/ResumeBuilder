import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/HeroSection/Herosection'
import Footer from './components/Footer'
import Tabs from './components/Tabs'
import Features from './components/Features'


function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading..........</h1>}>
        <Navbar />
        <Herosection />
        <Features />
        {/* <Tabs /> */}
        <Footer />
      </Suspense>

    </>
  )
}

export default App