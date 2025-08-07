import React from 'react'
import LeftPart from './LeftPart'
import RightPart from './RightPart'

function Herosection() {
    return (
        <>
            <section className="bg-100  flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-around">
                    <LeftPart />
                    <RightPart />
                </div>
            </section>
        </>
    )
}

export default Herosection