import { AuthCard } from '@/components/AuthCard'
import Image from 'next/image'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Link from 'next/link'
import {logouno } from '@/../public/assets/images/logo'
import Navbar from '@/components/Navbar'

const LoginPrewie = () => {

    return (
        <GuestLayout>
            <Navbar/>
            <AuthCard
                logo={
                    <Link href="/">
                        <Image className="h-56 w-72 mt-16" src={logouno}/>
                    </Link>
                }>
                {/* Session Status */}
                <div className="ml-2 text-xl px-2 py-5 text-gray-800 text-center font-bold">
                Por favor, seleccione el proveedor de identidad donde desea autenticarse
                </div>

                    <div className=" mt-4 flex items-center justify-center">
                        <Link
                            href="/login"
                            className="inline-flex text-xl items-center px-3 py-2 bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                            Universitario
                        </Link>
                    </div>

                    {/* Password */}
                    <div className="mt-4 flex items-center justify-center">
                    <button>

                        <Link
                            href="/login"
                            className="inline-flex text-xl tems-center px-12 py-2 bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                            Docente
                        </Link>
                        </button>
                    </div>
            </AuthCard>
        </GuestLayout>
    )
}

export default LoginPrewie
