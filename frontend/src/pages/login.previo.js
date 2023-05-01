import { AuthCard2 } from '@/components/AuthCard'
import Image from 'next/image'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Link from 'next/link'
import {logot} from '@/../public/assets/images/logo'
import Navbar from '@/components/Navbar'

const LoginPrewie = () => {

    return (
        <GuestLayout>
            <Navbar/>
            <AuthCard2
                logo={
                    <Link href="/">
                        <Image className="md:h-56 md:w-72 h-28 w-32" src={logot}/>
                    </Link>
                }>
                {/* */}
                <div className="my-5 font-bold text-lg text-center md:text-3xl ">
                Seleccione el proveedor de identidad 
                </div>
                <div className=" mx-5 text-center font-semibold md:text-2xl  ">
                Por favor, seleccione el proveedor de identidad donde desea autenticarse
                </div>

                    <div className="py-6 md:py-2 md:mt-5  ">
                        <button>
                            <Link
                                href="/login"
                                className="bg-[#E3E3E3] md:px-6 py-2 px-7 md:text-2xl inline-flex items-center border border-transparent rounded-md font-semibold text-[#00000] uppercase tracking-widest hover:bg-green-500 active:bg-blue-500 focus:outline-none focus:border-gray-600 focus:ring ring-gray-600 transition ease-in-out duration-150 ">
                                Universitario
                            </Link>
                        </button>
                    </div>

                    {/* */}
                    <div className=" md:mt-6">
                        <button>
                            <Link
                                href="/login"
                                className="bg-[#E3E3E3] md:px-16 py-2 px-14 md:text-2xl inline-flex items-center border border-transparent rounded-md font-semibold text-[#00000] uppercase tracking-widest hover:bg-green-500 active:bg-blue-500 focus:outline-none focus:border-gray-600 focus:ring ring-gray-600 transition ease-in-out duration-150">
                                Docente
                            </Link>
                        </button>
                    </div>
            </AuthCard2>
        </GuestLayout>
    )
}

export default LoginPrewie
