import { logoblancoucol, logov } from '@/../public/assets/images/logo'
import React from 'react'
import Image from 'next/image'
import { Creative } from '@/../public/assets/images/icon'


export const Footer = () => {
  return (
    <footer>
        <div className="bg-gray-900  ">
          <div className=' items-center flex justify-center  '>
            <a href="/">
              <Image className="w-40 h-auto pt-6 mb-4" src={logov} alt='Logo tesiuc footer'/>
            </a>
          </div>
          <div className=' '>
            <ul className="text-white text-lg lg:text-lg lg:flex lg:justify-between px-6 lg:px-12 lg:py-4 ">
              <li className='mb-2'>
                <a href="#" className="mr-4 hover:underline lg:mr-6 ">© Derechos Reservados 2023</a>
              </li>
              <li className='mb-2'>
                <a href="#" className="mr-4 hover:underline lg:mr-6">Politica de privacidad</a>
              </li>
              <li className='mb-2'>
                <a href="#" className="mr-4 hover:underline  lg:ml-6 lg:mr-14 ">Licensias</a>
              </li>
              <li className='mb-2'>
              <i className="icon ion-md-pin"></i>
                <a href="#" className="mr-4 hover:underline  lg:mr-20  "> Universidad de Colima Campus El Naranjo. Carretera Manzanillo-Cihuatlán Km. 20 , C.P. 28860, Manzanillo, Colima.</a>
              </li>
              <li className='mb-2'>
              <i className="icon ion-md-navigate"></i>
                <a href="https://portal.ucol.mx/fie/" className="mr-4 hover:underline lg:mr-1 ">Facultad de Ingeniería Electromecánica</a>
              </li>
              <li className='mb-2'>
                <a href="#" className="mr-4 hover:underline lg:mr-6 "> <Image className="w-40 lg:w-64 h-auto " src={logoblancoucol}alt='Logo ucol footer'/></a>
              </li>
            </ul>
          </div>
          <hr className=""/>
          <div className='ml-4 mt-4 flex flex-col lg:flex-row lg:justify-between mr-3'>
            <div ><Image className="w-6 lg:w-6 h-6 lg:h-auto mr-1 inline-block" src={Creative} alt='Comunitive Creative'/>
            <span className="text-white text-xl">2023<a href="https://www.pexels.com/es-es/" className="hover:underline">Pexels</a>.Creative Commons.</span></div>
            <div className='mt-2 lg:mt-0'><Image className="w-6 lg:w-6 h-6 lg:h-auto mr-1 inline-block" src={Creative} alt='Comunitive Creative 2'/>
            <span className="text-white text-xl"> 2023<a href="https://icons8.com" className="hover:underline">Icons8</a>.Creative Commons.</span></div> 
            <div className='mt-2 lg:mt-0 '><Image className="w-6 lg:w-6 h-6 lg:h-auto  mr-1 inline-block" src={Creative} alt='Comunitive Creative 3'/>
            <span className="text-white text-xl"> 2023<a href="https://pixabay.com/es/" className="hover:underline ">Pixabay</a>.Creative Commons.</span> </div> 
              
            
          </div>     
        </div>
    </footer>
  )
}
