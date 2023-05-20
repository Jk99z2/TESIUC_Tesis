import React from 'react'
import { ApplicationLogo2, ApplicationLogo3 } from './ApplicationLogo'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header>
            <nav className="bg-gray-900 flex justify-between pl-4  py-2 pr-4 lg:pl-12 lg:pr-12">
                {/* logo tesiuc */}
                <div className='mt-4 w-56'>
                    <Link href="/">
                        <ApplicationLogo3/>
                    </Link>
                </div>
                {/* logo ucol*/}
                <div className=" p-1 m-1 ">
                    <Link href="https://www.ucol.mx/">
                        <ApplicationLogo2/>
                    </Link>
                </div>

            
            </nav>
        </header>
        
    )
}

export default Navbar