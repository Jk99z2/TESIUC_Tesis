import GuestLayout from "@/components/Layouts/GuestLayout";
import React from 'react'
import Image from 'next/image';
import { queestesiuc, porquetesiuc, escalera, contac } from '@/../public/assets/images/all-img';
import Navindex from '@/components/Layouts/nav';
import { Footer } from '@/components/Layouts/footer';
import Button from '@/components/Button';
export default function Home() {
    return (
        <>
            <GuestLayout>
                <div className='grid grid-rows-[69px_1fr_auto] md:grid-rows-[89px_1fr_auto] w-full'>
                    <div>
                    <Navindex/>
                    </div>
                    <main className='px-6 md:px-8 xl:px-8 '> 
                        <div id='Inicio' className='pt-20 md:pt-12 xl:mb-12 lg:pt-24'>
                            <section className='xl:flex'>
                                <div className='text-black md:w-[800px] mb-12 lg:mb-0  lg:w-[800px]   '>
                                    <h1 className='font-bold text-3xl md:text-5xl '>Sistema para la Gestión y Control de Tesis de la Universidad de Colima</h1>
                                    <h2 className='text-xl md:text-4xl mt-1 md:mt-4 xl:mb-4'>Plataforma TESIUC</h2>
                                    <a href="/login.previo"><Button  className="bg-gray-900 text-white text-center mt-2 py-3  md:text-2xl px-16 shadow-2xl" >
                                       Iniciar Sesión
                                    </Button></a>
                                    
                                </div> 
                            <Image className="w-full max-w-full mt-16 md:h-[920px] lg:h-[750px] xl:h-[540px] xl:w" src={escalera} alt='Imagen de Subiendo Libros' priority={true}/>          
                            </section>
                        </div>  
                        <div id='¿Qué es TESIUC?' className='pt-20 md:pt-[100px]'>
                            <section  className='xl:flex'>  
                                <div className=' xl:mr-20 2xl:w-[1010px]  mb-5'>
                                    <h1 className='font-bold text-2xl md:text-5xl md:mb-5'>¿Qué es TESIUC?</h1>
                                    <h2 className='text-lg md:text-3xl '>
                                        TESIUC es la plataforma de control y seguimiento de tesis en línea de la Universidad de Colima. Esta plataforma integra herramientas para la gestión de tesis, la gestión de presentaciones, la revisión e interacción entre autores, así como el seguimiento y evaluación de los estudiantes.
                                    </h2>
                                </div>
                                <Image className="w-full max-w-full h-80 md:h-[1100px] lg:h-[820px] xl:h-[860px] 2xl:h-[710px]  " src={queestesiuc} alt='Imagen que es tesiuc'priority={true}/>  
                            </section>  
                        </div> 
                        <div id='¿Por qué TESIUC?' className='pt-20 md:pt-[90px]'>
                            <section  className='xl:flex'>
                                <div className='xl:mt-8 md:w-[1000px] xl:mr-14 mb-4'>
                                    <h1 className=' font-bold text-2xl md:text-5xl md:w-[500px] md:mb-5'>¿Por qué TESIUC?</h1>
                                    <p className='text-xs md:text-2xl '>TESIUC ofrece una serie de beneficios y ventajas para la gestión y control de tesis en línea:</p>
                                    <p className='text-xs md:text-2xl '>&#9733;Ayuda a mantener todo el proceso de elaboración de la tesis organizado y ordenado, lo que reduce la posibilidad de errores y confusiones.</p>
                                    <p className='text-xs md:text-2xl'>&#9733; Facilita la comunicación entre los estudiantes y los profesores, ya que permite compartir documentos y comentarios en un solo lugar, evitando la necesidad de enviar correos electrónicos y archivos por separado.</p>
                                    <p className='text-xs md:text-2xl'>&#9733; Permite a los estudiantes y profesores acceder a la información y los documentos relacionados con la tesis en cualquier momento y desde cualquier lugar, siempre y cuando tengan acceso a Internet.</p>
                                    <p className='text-xs md:text-2xl'>&#9733;
                                        Cuenta con herramientas especializadas diseñadas específicamente para la gestión de tesis de licenciatura, brindando un enfoque adaptado a las necesidades de los estudiantes y profesores.
                                    </p>
                                    <p className='text-xs md:text-2xl'>
                                        Permite llevar un control y seguimiento completo del proceso de elaboración de la tesis.   
                                    </p>
                                    <p className='text-xs md:text-2xl'>&#9733;
                                        Proporciona un repositorio de documentos donde los estudiantes y profesores pueden almacenar y acceder a los archivos relacionados con la tesis de forma segura y organizada.  
                                    </p>    
                            </div>
                            <Image className="w-full max-w-full xl:mt-12  mx-auto h-72  md:h-[850px] lg:h-[580px] xl:h-[780px] 2xl:h-[680px] lg:w-[1000px] " src={porquetesiuc} alt='Imagen de porque'priority={true}/>    
                            </section>
                        </div>
                        <div id='Contacto' className='pt-20 md:pt-[100px] xl:pt-[60px]'>
                            <section  className='flex'>
                                <div className='xl:mt-12 md:w-[1250px] mb-4'>
                                    <h1 className='font-bold text-2xl md:text-5xl  md:mb-5'>Contacto</h1>
                                    <p className='text-lg md:text-3xl '>Facultad de Ingeniería Electromecánica</p>
                                    <p className='text-lg md:text-3xl '>tesiuc@ucol.mx</p>
                                    <p className='text-lg md:text-3xl '>(314)3161000 Ext. 35451</p>
                                    <p className='text-lg md:text-3xl'>Universidad de Colima Campus El Naranjo. Carretera Manzanillo-Cihuatlán Km. 20 , C.P. 28860, Manzanillo, Colima.</p>            
                                </div>
                                <Image className="w-full max-w-full xl:mt-12 mb-12 h-72 lg:h-[710px]  md:h-[1100px]" src={contac} alt='Imagen de contactos'priority={true}/>
                            </section>
                        </div>                           
                    </main>  
                    <Footer/>      
                </div>  
            </GuestLayout>      
        </>
    )
}
/*

                                
                                
                                
                     */