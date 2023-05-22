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
                    logo={<ApplicationLogo className={"w-40 md:w-72"}/>}>
                    {/* */}
                    <div className="my-5 font-bold text-lg text-center md:text-3xl ">
                    Seleccione el proveedor de identidad 
                    </div>
                    <div className=" mx-5 text-center font-semibold md:text-xl  ">
                    Por favor, seleccione el proveedor de identidad donde desea autenticarse
                    </div>

                    <div className="py-6 md:py-2 xl:mt-4 flex items-center">
                        <Button className="bg-gray-900 text-white py-3 mt-2  px-12 text-base shadow-2xl">
                            <a href="/login" className="flex items-center">
                            <Image className="w-6 h-6 mr-4" src={estudia} alt='Imagen estudiantes'/>
                            Universitario
                            </a>
                        </Button>
                    </div>


                        {/* */}
                    <div className=" py-2 xl:mt-2">
                            <Button className="bg-gray-900 text-white  py-3 mt-2 px-20   text-base shadow-2xl"><a href="/login" className="flex flex-row justify-between ">
                            <Image className="w-6 h-6 mr-4 " src={maestro} alt='Imagen estudiantes'/>Docente</a></Button>
                    </div>
                </AuthCard>
            
        </GuestLayout>
    )
}

export default LoginPrewie
