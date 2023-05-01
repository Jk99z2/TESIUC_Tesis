import React from 'react'
import { ApplicationLogo2, ApplicationLogo3 } from './ApplicationLogo'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gray-900 border-gray-900 flex flex-row justify-between lg:pl-12 lg:pr-12">
            {/* logo tesiuc */}
            <div className="max-w-screen-xl flex flex-wrap items-center  p-4">
                <Link href="/">
                        <ApplicationLogo3 className="flex items-center  " />
                    </Link>
            </div>
            {/* logo ucol*/}
            <div className=" max-w-screen-xl flex flex-wrap items-center p-4 ">
                <Link href="https://www.ucol.mx/">
                        <ApplicationLogo2 className="inline-flex items-center p-2" />
                    </Link>
            </div>

           
        </nav>
    )
}

export default Navbar