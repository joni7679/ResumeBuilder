import React from 'react'
import SingupLeftpart from './SignupLeftPart'
import SingupRightpart from './SignupRightPart'
import Navbar from '../../Navbar'
import Footer from '../../Footer'

function Singup() {
    return (
        <>
            <Navbar />
            <section class="bg-white ">
                <div class="grid grid-cols-1 lg:grid-cols-2">
                    <SingupLeftpart />
                    <SingupRightpart />
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Singup