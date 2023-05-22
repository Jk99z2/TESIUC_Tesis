import React from 'react'
import { logoblancoucol, logov } from '@/../public/assets/images/logo'
import Image from 'next/image'
import { Creative } from '@/../public/assets/images/icon'
export default function Footerdash() {
    return (
        <>
             <footer>
                    <div className="bg-gray-900  ">
                        <div className=' items-center flex justify-center  '>
                            <a>
                            <Image className="w-40 h-auto pt-6 mb-4" src={logov} alt='Logo tesiuc footer'/>
                            </a>
                        </div>
                    <hr className=""/>
                    <div className='ml-4 mt-4 flex flex-col lg:flex-row lg:justify-between pb-4 mr-3'>
                        <a  className="mr-4 hover:underline lg:mr-6 text-white">© Derechos Reservados 2023</a>
                        <a className="mr-4 hover:underline lg:mr-6 text-white">Universidad de Colima Campus El Naranjo.</a>
                        <a href="https://portal.ucol.mx/fie/" className="mr-4 text-white hover:underline lg:mr-1 ">Facultad de Ingeniería Electromecánica</a>
                        
                    </div>     
                    </div>
                </footer>  
        </>
    )

}