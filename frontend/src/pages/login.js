import Image from 'next/image'
import { AuthCard, AuthCard2 } from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { logot, logouno } from '@/../public/assets/images/logo'
import Navbar from '@/components/Navbar'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <>
            
            <GuestLayout>
                <Navbar/>
                <AuthCard2                    
                    logo={
                        <Link href="/">
                            <Image className="md:h-56 md:w-72 h-28 w-32" src={logot}/>
                        </Link>
                    }>
                    {/* Session Status */}
                    <AuthSessionStatus status={status} />
                    <div className="my-5 mx-4 font-bold text-sm text-center md:text-2xl">
                    Indique su número de trabajador, estudiante o correo electrónico y su clave de acceso.
                    </div>
                    <form onSubmit={submitForm}>
                        {/* Email Address */}
                        <div className='flex justify-center'>
                            <Label htmlFor="email"></Label>

                            <Input
                                id="email"
                                type="email"
                                value={email}
                                placeholder='No. Cuenta o correo electrónico'
                                className=" md:ml-4  md:text-lg md:w-[500px] w-80"
                                onChange={event => setEmail(event.target.value)}
                                required
                                autoFocus
                            />

                            <InputError messages={errors.email} className="mt-2" />
                        </div>

                        {/* Password */}
                        <div className="mt-6 mb-6 flex justify-center">
                            <Label htmlFor="password"></Label>

                            <Input
                                id="password"
                                type="password"
                                value={password}
                                placeholder='Contraseña'
                                className="md:ml-4 md:text-lg md:w-[500px] w-80"
                                onChange={event => setPassword(event.target.value)}
                                required
                                autoComplete="current-password"
                            />

                            <InputError
                                messages={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div className="ml-4 mr-2 mt-2 mb-6 text-xs md:text-base text-gray-900 font-semibold">
                            Los datos para inicio de sesion son Número de Cuenta y Clave de Correo UCOL, 
                            en caso de no recordar su clave de correo, comunicarse a Servicios Telematicos
                            para la recuperación de la clave. Ext. 32006.
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href="/forgot-password"
                                className="underline text-sm md:text-base ml-4 md:mr-6 text-gray-600 hover:text-gray-900">
                                Olvide mi contraseña?
                            </Link>
                            <button className="mx-3">

                                    <Link
                                        href="/register"
                                        className="inline-flex items-center px-1 py-2 bg-[#C9C9C9] border border-transparent rounded-md font-semibold text-xs md:text-lg text-[#000000] uppercase tracking-widest hover:bg-green-500 active:bg-blue-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                                        Registrarme
                                    </Link>
                                </button>

                            <Button className="mx-3">Entrar</Button>
                        </div>
                    </form>
                
                </AuthCard2>
            </GuestLayout>
            
        </>
    )
}

export default Login
