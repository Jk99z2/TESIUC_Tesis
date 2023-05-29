import { AuthCard } from '@/components/AuthCard'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { ApplicationLogo } from '@/components/ApplicationLogo'
import Button from '@/components/Button'
import { estudia, maestro } from '@/../public/assets/images/icon'

const LoginPrewie = () => {

    return (
        <GuestLayout>
            <Navbar/>
            <AuthCard
                    logo={<ApplicationLogo className={"w-40 md:w-48 "} priority={true}/>}>
                    {/* */}
                    <div className="my-5 font-bold text-lg text-center md:text-2xl ">
                    Seleccione el proveedor de identidad 
                    </div>
                    <div className=" mx-5 text-center font-semibold md:text-lg  ">
                    Por favor, seleccione el proveedor de identidad donde desea autenticarse
                    </div>

                    <div className="py-6 md:py-2 xl:mt-4 flex items-center">
                    <a href="/login" className="flex items-center">
                        <Button className="bg-gray-900 text-white flex py-3 mt-2  px-12 text-base shadow-2xl">
                            
                            <Image className="w-6 h-6 mr-4" src={estudia} alt='Imagen estudiantes' priority={true}/>
                            Universitario
                            
                        </Button></a>
                    </div>


                        {/* */}
                    <div className=" py-2 xl:mt-2">
                    <a href="/login" className="flex  ">
                        <Button className="bg-gray-900 text-white flex py-3 mt-2 px-20   text-base shadow-2xl">
                            <Image className="w-6 h-6 mr-4 " src={maestro} alt='Imagen estudiantes' priority={true}/>Docente</Button></a>
                    </div>
                </AuthCard>
            
        </GuestLayout>
    )
}

export default LoginPrewie
