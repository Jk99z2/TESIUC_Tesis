import { ApplicationLogo3 } from '../ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink, {
    ResponsiveNavButton,
} from '@/components/ResponsiveNavLink'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '@/pages/sidebarcontext'



const Navigation = ({ user,children }) => {
    const { logout } = useAuth()
    const { setActive } = useContext(SidebarContext);
    const [handclick, setHandclick] = useState(false);
      
    const handleClick = () => {
        setHandclick(!handclick);
      };
    
    useEffect(() => {
        setActive(handclick)
    }, [handclick, setActive])
    return ( 
        <div className=" min-h-screen grid grid-rows-[100px,1fr]  lg:grid-rows-[80px,1fr]">
            <div>
                <nav className="bg-gray-900 fixed top-0 z-50 w-full h-[100px] lg:h-[80px]">
                    {/* Primary Navigation Menu */}
                    <div className="h-[100px] lg:h-[80px] flex justify-between  ">
                        <div className="my-auto ml-6 md:hidden">
                            <button onClick={handleClick} className='text-5xl text-white  cursor-pointer '>                              
                                <i className={`icon ${handclick ? 'ion-md-close' : 'ion-md-menu'}`}></i>
                            </button>
                        </div> 
                        <div className=" my-auto ml-6 hidden md:flex">
                            <Link href="/dashboard">
                                <ApplicationLogo3 className="w-48 xl:w-56 "/>
                            </Link>
                        </div> 
                        <div className=" my-auto mr-3 md:mr-6">
                            <Dropdown
                                    align="right"
                                    width="48"
                                    trigger={
                                <button className="flex items-center text-lg font-medium text-white hover:text-gray-500 focus:outline-none transition duration-150 ease-in-out">
                                    <div>{user?.name}</div>
                                    <div className="ml-1">
                                            <svg
                                                className="fill-current h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                        />
                                        </svg>
                                    </div>
                                        
                                </button>
                            }>
                                {/* Authentication */}
                                <DropdownButton onClick={logout}>
                                    Logout
                                </DropdownButton> 
                            </Dropdown>
                        </div> 
                    </div>  
                </nav>                             
            </div>  
            {children}    
        </div> 
    )
}
export default Navigation
/*<div className="flex justify-between">
                        <div className="flex justify-between">
                            <div className="flex"> 
                                <div className=" flex items-center">
                                    <button onClick={handleClick}>
                                        {handclick ? 'Desactivar Sidebar' : 'Activar Sidebar'}
                                    </button>
                                </div> 
                                {/* Logo *//*}/*
                                <div className="flex my-4 ">
                                    
                                </div>
                                {/* Settings Dropdown *//*} /* 
                                <div className="hidden sm:flex sm:items-center sm:ml-6">
                                
                            </div>      
                            </div>
                                        
                        </div>
                    </div>
*/
{/* Hamburger */}
/*
<div className="-mr-3 flex items-center sm:hidden  ">
<button onClick={() => setOpen(open => !open)}
    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
    <svg
        className="h-6 w-6"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24">
        {open ? (
            <path
                className="inline-flex"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                />
            ) : (
            <path
                className="inline-flex"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                />
        )}
    </svg>
</button>
</div>
*/
{/* Responsive Navigation Menu */}/*
{open && (
    <div className="block sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink
                href="/dashboard"
                active={router.pathname === '/dashboard'}>
                    Dashboard
            </ResponsiveNavLink>
        </div>
        {/* Responsive Settings Options *//*}/*
        <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                    <svg
                        className="h-10 w-10 fill-current text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                    </svg>
                </div>
                <div className="ml-3">
                    <div className="font-medium text-base text-gray-800">
                        {user?.name}
                    </div>
                    <div className="font-medium text-sm text-gray-500">
                    {user?.email}
                    </div>
                </div>
            </div>
            <div className="mt-3 space-y-1">
                {/* Authentication *//*}/*
                <ResponsiveNavButton onClick={logout}>
                    Logout
                </ResponsiveNavButton>
            </div>
        </div>
    </div>
)}*/