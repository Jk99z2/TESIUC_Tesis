import Link from 'next/link'
import GuestLayout from "@/components/Layouts/GuestLayout";
import {logov } from '@/../public/assets/images/logo';
import React from 'react'
import Image from 'next/image';
import { card6, card7, niña } from '@/../public/assets/images/all-img';

export default function Home() {
    

    return (
        <>
        {/*<div className="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ? (
                        <Link
                            href="/dashboard"
                            className="ml-4 text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-sm text-gray-700 underline">
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="ml-4 text-sm text-gray-700 underline">
                                Register
                            </Link>
                        </>
                    )}
                </div>
                    </div>*/}
            <GuestLayout>         
                    
                        <nav className="bg-white border-gray-900 dark:bg-blue-500">
                            <div className="h-16 flex flex-wrap items-center justify-between mx-auto p-2">
                                <a class="flex items-center pl-32">
                                    <Image className="h-16 w-64" src={logov}/>
                                </a>
                                <div className="hidden w-full md:block md:w-auto pr-32" id="navbar-default">
                                <ul className="text-xl text-base flex flex-col  md:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg- dark:bg-gray-200 md:dark:bg-blue-500 dark:border-gray-700">
                                    <li>
                                    <a href="#inicio" className="block  pl-3 pr-4 text-gray-900 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Inicio</a>
                                    </li>
                                    <li>
                                    <a href="#quees" className="block  pl-3 pr-4 text-gray-900 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent">¿Que es?</a>
                                    </li>
                                    <li>
                                    <a href="#para" className="block  pl-3 pr-4 text-gray-900 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">¿Para que sirve?</a>
                                    </li>
                                    <li>
                                    <a href="#" className="block pl-3 pr-4 text-gray-900 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contactos</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </nav>
                        <section id='inicio' className='flex flex-row items-center justify-center  rounded-3xl'>
                        <div className='flex flex-col items-start w-full lg:h-[280px] leading-6 py-16 pl-[300px]'>
                        <h1 className=' text-[40px] text-gray-900 pb-7 font-bold'>Sistema para la Gestión de</h1>
                            <h1 className=' text-[40px] text-gray-900 font-bold'>Tesis de la Universidad de Colima</h1>
                            <span className='text-gray-800 text-[35px] pt-5 font-light'>
                            Plataforma TESIUC
                            </span>
                                <button className='mt-3' >                                    
                                        
                                        <Link
                                        href="/login.previo"
                                        className="inline-flex  ml-2 items-center py-2 px-4   bg-green-400 border border-transparent rounded-md font-semibold text-[20px] text-white uppercase tracking-widest hover:bg-blue-500 active:bg-gray-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                                         <img className=" block h-6 mr-2 " src="/assets/images/logo/ucollogo.png"/>Iniciar sesión 
                                    </Link>
                                </button>
                            </div>    
                            <div className='  flex justify-end items-center pt-8 pr-[350px] '>
                                <Image className="w-64" src={niña}/>
                            </div>
                        </section>
                        <section id='quees' className='flex flex-row items-center justify-center  rounded-3xl'>
                            <div className='  flex justify-end items-center pl-64 '>
                                <Image className="w-[1020px] " src={card6}/>
                            </div>
                            <div className='flex flex-col items-start w-full lg:h-[280px] leading-6 py-16 pr-64 pl-16'>
                            <h1 className=' text-3xl text-gray-900 font-bold'>¿Qué es TESIUC?</h1>
                            <span className='text-gray-800 lg:text-2x1 md:text-xl font-light'>
                            Es la plataforma de Control y seguimiento de Tesis en línea de la Universidad de Colima
                            que integra herramientas para la gestión de Tesis, gestión de presentaciones, la revicion
                            e interacción entre autores, y para el seguimiento y evaluación de los estudiantes.
                            </span>
                            </div>
                            
                        </section>
                        <section id='para' className='flex flex-row items-center justify-center  rounded-3xl'>
                            <div className='flex flex-col items-start w-full lg:h-[280px] leading-6 py-16 pl-64'>
                            <h1 className=' text-3xl text-gray-900 font-bold'>¿Para que sirve TESIUC?</h1>
                            <span className='pr-12 pb-12 text-gray-800 lg:text-2x1 md:text-xl font-light'>
                            <p>Ayuda a mantener todo el proceso de elaboración de la tesis organizado y ordenado, lo que reduce la posibilidad de errores y confusiones.</p>
                            <p>Facilita la comunicación entre los estudiantes y los profesores, ya que permite compartir documentos y comentarios en un solo lugar y evita la necesidad de enviar correos electrónicos y archivos por separado.</p>
                            <p>Facilita la comunicación entre los estudiantes y los profesores, ya que permite compartir documentos y comentarios en un solo lugar y evita la necesidad de enviar correos electrónicos y archivos por separado.</p>
                            <p>Permite a los estudiantes y profesores acceder a la información y los documentos relacionados con la tesis en cualquier momento y desde cualquier lugar, siempre que tengan acceso a Internet.</p>
                            </span>
                            </div>
                            <div className='  flex justify-end items-center pr-[450px] '>
                                <Image className="w-[780px]" src={card7}/>
                            </div>
                        </section>

                        
                

            </GuestLayout>

            
        </>
    )
}
