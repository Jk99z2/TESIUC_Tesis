import React, { useState } from 'react'
import { ApplicationLogo3 } from '../ApplicationLogo'
import Link from 'next/link'
const Navindex = () => {
    let Links =[
        {name:"Inicio",link:"#"},
        {name:"¿Qué es TESIUC?",link:"#"},
        {name:"¿Por qué TESIUC?",link:"#"},
        {name:"Contacto",link:"#"},
    ];
    let[open,setOpen]=useState(false);
    return (
    <header >
        <nav className={` shadow-xl w-full ${open ? 'fixed ':'fixed '}`}>
            <div className='xl:flex items-center justify-between bg-gray-900 py-4 xl:px-10 px-7'>
                <div >
                    <Link href="/">
                        <ApplicationLogo3 className={"w-36 md:w-56"}/>
                    </Link>
                </div>
                <div onClick={()=>setOpen(!open)} className='text-5xl md:text-7xl text-white absolute right-4 top-3 md:top-4 cursor-pointer xl:hidden '>
                <i className={`icon ${open ? 'ion-md-close' : 'ion-md-menu'}`}></i>

                </div>
                <ul className={` mt-2 xl:mt-0 xl:flex xl:items-center text-white text-2xl font-bold  font-[Poppins] xl:pb-0 pb-12 absolute xl:static bg-gray-900 xl:z-auto z-[-1] left-0 w w-full xl:w-auto xl:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 opacity-100':'top-[-490px]'} xl:opacity-100 opacity-0 `}>
                {
                    Links.map((Link)=>(
                        <li key={Link.name} className='xl:ml-8 xl:my-0 my-7 hover:underline'>
                            <a href={`${Link.link}${Link.name}`} onClick={()=>setOpen(!open)} className='hover:text-gray-400 duration-500 '>{Link.name}</a>
                        </li>
                    ))
                }
                </ul>
            </div>
            
        </nav>
    </header>
  )
}
export default Navindex
/*<ion-icon name={open ? 'close': 'menu'}></ion-icon> */