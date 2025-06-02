import React from 'react'
import { CiUser } from 'react-icons/ci'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { TbPasswordFingerprint } from 'react-icons/tb'
import SingupLeftpart from './SignupLeftPart'
import SingupRightpart from './SignupRightPart'
import Navbar from '../Navbar'
import Footer from '../Footer'

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
            <Footer />
        </>
    )
}

export default Singup