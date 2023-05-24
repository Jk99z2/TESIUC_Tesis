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
                <div className=' grid grid-rows-[80px_minmax(413px,_1fr)_110px] md:grid-rows-[80px_minmax(500px,_1fr)660px] lg:grid-rows-[150px_minmax(2400px,_1fr)_100px]'>
                    <Navindex/>
                        <main className='px-6 xl:px-20'>
                            <div >
                                <div id='Inicio' className='pt-20 md:pt-28 '>
                                    <section className='xl:flex md:flex '>
                                        <div className=' text-black md:w-[80%] '>
                                            <h1 className='font-bold text-3xl xl:text-5xl '>Sistema para la Gestión y Control de Tesis de la Universidad de Colima</h1>
                                            <span className='text-xl mt-1'>Plataforma TESIUC</span>
                                            <Button className="bg-gray-900 text-white text-center py-2 mt-2 w-full xl:block xl:px-16 xl:w-auto shadow-2xl"><a href="/login.previo">Iniciar Sesión</a></Button>
                                        </div> 
                                        <div>
                                            <Image className="mt-4 mb-4 md:w-[auto] " src={escalera} alt='Imagen de Subiendo Libros 'priority={true}/>
                                        </div>
                                    </section>
                                </div>
                                <div id='¿Qué es TESIUC?' className='pt-20 md:pt-28'>
                                    <section  className='xl:flex'>  
                                        <div className='xl:mt-12 xl:w-[40%]'>
                                            <h1 className='font-bold text-2xl xl:text-4xl xl:mb-5'>¿Qué es TESIUC?</h1>
                                            <span className='xl:text-2xl'>
                                            TESIUC es la plataforma de control y seguimiento de tesis en línea de la Universidad de Colima. Esta plataforma integra herramientas para la gestión de tesis, la gestión de presentaciones, la revisión e interacción entre autores, así como el seguimiento y evaluación de los estudiantes.
                                            </span>
                                        </div>
                                        <div className='xl:ml-6'>
                                            <Image className="mt-1 mb-4 h-72 xl:w-[1000px] md:h-[550px] xl:h-[800px]" src={queestesiuc} alt='Imagen que es tesiuc'priority={true}/>
                                        </div>
                                    </section>  
                                </div>
                                <div id='¿Por qué TESIUC?' className='pt-20 md:pt-28'>
                                    <section  className='xl:flex'>
                                        <div className='xl:mt-8 xl:w-[40%]'>
                                            <h1 className=' font-bold text-2xl xl:text-4xl xl:mb-2'>¿Por qué TESIUC?</h1>
                                            <span className='xl:text-2xl'>TESIUC ofrece una serie de beneficios y ventajas para la gestión y control de tesis en línea:</span>
                                                <p className='xl:text-xl'>&#9733;Ayuda a mantener todo el proceso de elaboración de la tesis organizado y ordenado, lo que reduce la posibilidad de errores y confusiones.</p>
                                                <p className='xl:text-xl'>&#9733; Facilita la comunicación entre los estudiantes y los profesores, ya que permite compartir documentos y comentarios en un solo lugar, evitando la necesidad de enviar correos electrónicos y archivos por separado.</p>
                                                <p className='xl:text-xl'>&#9733; Permite a los estudiantes y profesores acceder a la información y los documentos relacionados con la tesis en cualquier momento y desde cualquier lugar, siempre y cuando tengan acceso a Internet.</p>
                                                <p className='xl:text-xl'>&#9733;
                                                Cuenta con herramientas especializadas diseñadas específicamente para la gestión de tesis de licenciatura, brindando un enfoque adaptado a las necesidades de los estudiantes y profesores.
                                                </p>
                                                <p className='xl:text-xl'>
                                                Permite llevar un control y seguimiento completo del proceso de elaboración de la tesis.   
                                                </p>
                                                <p className='xl:text-xl'>&#9733;
                                                Proporciona un repositorio de documentos donde los estudiantes y profesores pueden almacenar y acceder a los archivos relacionados con la tesis de forma segura y organizada.  
                                                </p>
                                                
                                        </div>
                                        <div className='xl:ml-6 '>
                                            <Image className="mt-1 mb-4 h-72 xl:w-[1000px] md:h-[400px] xl:h-[800px]" src={porquetesiuc} alt='Imagen de porque'priority={true}/>
                                        </div>
                                    </section>
                                </div>
                                <div id='Contacto' className='pt-20 md:pt-28'>
                                    <section  className='xl:flex'>
                                        <div className='xl:mt-8 xl:w-[40%]'>
                                                <h1 className='font-bold text-2xl xl:text-4xl xl:mb-2'>Contacto</h1>
                                                <p className='xl:text-2xl'>Facultad de Ingeniería Electromecánica</p>
                                                <p className='xl:text-2xl'>tesiuc@ucol.mx</p>
                                                <p className='xl:text-2xl'>(314)3161000 Ext. 35451</p>
                                                <p className='xl:text-2xl'>Universidad de Colima Campus El Naranjo. Carretera Manzanillo-Cihuatlán Km. 20 , C.P. 28860, Manzanillo, Colima.</p>
                                                
                                            </div>
                                            <div className='xl:ml-6'>
                                                <Image className="mt-1 mb-4 h-72 xl:w-[1000px] md:h-[500px] xl:h-[800px]" src={contac} alt='Imagen de contactos'priority={true}/>
                                            </div>
                                    </section>
                                </div>
                            </div>                       
                        </main>
                    <Footer/>
                </div>  
            </GuestLayout>      
        </>
    )
}
