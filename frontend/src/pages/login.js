import Image from 'next/image'
import { AuthCard } from '@/components/AuthCard'
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
import { logouno } from '@/../public/assets/images/logo'
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
                <AuthCard                    
                    logo={
                        <Link href="/">
                            <Image className="h-56 w-72 mt-16" src={logouno}/>
                        </Link>
                    }>
                    {/* Session Status */}
                    <AuthSessionStatus className="mb-4" status={status} />
                    <div className="ml-2 mb-5 text-base text-gray-800 text-center font-bold">
                    Indique su número de trabajador, estudiante o correo electrónico y su clave de acceso.
                    </div>
                    <form onSubmit={submitForm}>
                        {/* Email Address */}
                        <div>
                            <Label htmlFor="email"></Label>

                            <Input
                                id="email"
                                type="email"
                                value={email}
                                placeholder='No. Cuenta o correo electrónico'
                                className="block mt-1 text-base w-full"
                                onChange={event => setEmail(event.target.value)}
                                required
                                autoFocus
                            />

                            <InputError messages={errors.email} className="mt-2" />
                        </div>

                        {/* Password */}
                        <div className="mt-6 mb-6">
                            <Label htmlFor="password"></Label>

                            <Input
                                id="password"
                                type="password"
                                value={password}
                                placeholder='Contraseña'
                                className="block mt-1 text-base w-full"
                                onChange={event => setPassword(event.target.value)}
                                required
                                autoComplete="current-password"
                            />

                            <InputError
                                messages={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div className="ml-3 mt-2 mb-6 text-base text-gray-900 font-bold font-bold">
                            Los datos para inicio de sesion son Número de Cuenta y Clave de Correo UCOL, 
                            en caso de no recordar su clave de correo, comunicarse a Servicios Telematicos
                            para la recuperación de la clave. Ext. 32006.
                        </div>

                        {/* Remember Me */}
                        <div className="block mt-4">
                            <label
                                htmlFor="remember_me"
                                className="inline-flex items-center">
                                <input
                                    id="remember_me"
                                    type="checkbox"
                                    name="remember"
                                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={event =>
                                        setShouldRemember(event.target.checked)
                                    }
                                />

                                <span className="ml-2 text-sm text-gray-500">
                                    Recordarme
                                </span>
                            </label>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href="/forgot-password"
                                className="underline text-sm text-gray-600 hover:text-gray-900">
                                Olvide mi contraseña?
                            </Link>
                            <button>

                                    <Link
                                        href="/register"
                                        className="inline-flex mx-1 ml-2 items-center px-1 py-2 bg-green-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 active:bg-gray-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                                        Registrarme
                                    </Link>
                                </button>

                            <Button className="ml-3">Entrar</Button>
                        </div>
                    </form>
                
                </AuthCard>
            </GuestLayout>
            
        </>
    )
}

export default Login
