import React from 'react'
import { ApplicationLogo2, ApplicationLogo3 } from './ApplicationLogo'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-green-600 h-20 border-b ">
            {/* Primary Navigation Menu */}
            <div className="max-w-5/2 mx-20">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        {/* Logo tesiuc*/}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo3/>
                            </Link>
                        </div>
                    </div>

                    {/* Logo Ucol */}
                    <div className="hidden sm:flex sm:items-center">
                        <div>
                            <Link
                                href="https://www.ucol.mx/"
                                className=" block h-16 mt-3  flex ">
                                    <ApplicationLogo2/>
                            </Link>
                        </div>
                    </div>

                    
                </div>
            </div>

           
        </nav>
    )
}

export default Navbar