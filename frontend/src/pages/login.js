import Image from 'next/image'
import { AuthCard2 } from '@/components/AuthCard'
import Navbar from '@/components/Navbar'
import { ApplicationLogo } from '@/components/ApplicationLogo'
import { usuario, contra } from '@/../public/assets/images/icon'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AuthSessionStatus from '@/components/AuthSessionStatus'

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
                    logo={<ApplicationLogo className={"w-36 md:w-40"}/>}>
                    {/* Session Status */}
                    <AuthSessionStatus status={status} />
                    <div className=" mx-auto font-bold text-sm text-center md:text-xl">
                    Indique su número de trabajador, estudiante o correo electrónico y su clave de acceso.
                    </div>
                    <form onSubmit={submitForm}>
                        {/* Email Address */}
                        <div className='flex justify-center items-center'>
                            
                            <Label htmlFor="email"><Image className="w-6 ml-3 mr-2" src={usuario} alt='Imagen usuario' priority={true}/></Label>

                            <Input
                                id="email"
                                type="email"
                                value={email}
                                placeholder='No. Cuenta o correo electrónico'
                                className=" md:ml-2  md:text-lg md:w-[400px] w-80 mr-4"
                                onChange={event => setEmail(event.target.value)}
                                required
                                autoFocus
                                autoComplete="email"
                            />

                            <InputError messages={errors.email} className="mt-2" />
                        </div>

                        {/* Password */}
                        <div className="mt-6 mb-6 flex justify-center items-center">
                            <Label htmlFor="password"><Image className="w-6 ml-3 mr-2" src={contra} alt='Imagen password' priority={true}/></Label>

                            <Input
                                id="password"
                                type="password"
                                value={password}
                                placeholder='Contraseña'
                                className="md:ml-2 md:text-lg md:w-[400px] w-80 mr-4"
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
                            <Button className="bg-gray-900 text-white  py-3 mt-2 px-20 mr-4   text-base shadow-2xl">Entrar</Button>
                        </div>      
                    </form>
                </AuthCard2>
            </GuestLayout>
            
        </>
    )
}

export default Login
