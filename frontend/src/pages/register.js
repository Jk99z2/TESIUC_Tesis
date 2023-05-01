import {AuthCard2 } from '@/components/AuthCard'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { logot } from '@/../public/assets/images/logo'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
        <GuestLayout>
            <Navbar/>
            <AuthCard2
                logo={
                    <Link href="/">
                        <Image className="md:h-56 md:w-72 h-28 w-32" src={logot}/>
                    </Link>
                }>
                <form  className='flex flex-col items-center md:mx-4  md:text-xl md:w-[500px] w-80 ' onSubmit={submitForm}>
                    {/* Name */}
                    <div className=''>
                        <Label htmlFor="name" className={'text-lg md:text-2xl'}>Nombre</Label>

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className="w-64 md:w-96 "
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                            
                        />

                        <InputError messages={errors.name} className="mt-2" />
                    </div>

                    {/* Email Address */}
                    <div className="mt-4">
                        <Label htmlFor="email" className={'text-lg md:text-2xl'}>Correo Electronico</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="w-64 md:w-96"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password"className={'text-lg md:text-2xl'}>Contraseña</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="w-64 md:w-96"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />

                        <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <Label htmlFor="passwordConfirmation"className={'text-lg md:text-2xl'}>
                            Confirmar Contraseña
                        </Label>

                        <Input
                            id="passwordConfirmation"
                            type="password"
                            value={passwordConfirmation}
                            className="w-64 md:w-96"
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />

                        <InputError
                            messages={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href="/login"
                            className="underline text-sm md:text-lg text-gray-600 hover:text-gray-900">
                            Ya registrado?
                        </Link>

                        <Button className="ml-12">Registrar</Button>
                    </div>
                </form>
            </AuthCard2>
        </GuestLayout>
    )
}

export default Register

