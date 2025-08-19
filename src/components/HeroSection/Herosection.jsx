import React from 'react'
import LeftPart from './LeftPart'
import RightPart from './RightPart'

function Herosection() {
    return (
        <>
            <section className="relative px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center overflow-hidden">
                <div className="container relative z-10 mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-around">
                    <LeftPart />
                    <RightPart />
                </div>
            </section>
        </>
    )
}

export default Herosection