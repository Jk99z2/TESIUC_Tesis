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
                        <Image className="h-56 w-72" src={logot}/>
                    </Link>
                }>
                <form className='w-[500px]' onSubmit={submitForm}>
                    {/* Name */}
                    <div >
                        <Label htmlFor="name"className={'text-base'}>Nombre</Label>

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className="block mt-1 w-full"
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                            
                        />

                        <InputError messages={errors.name} className="mt-2" />
                    </div>

                    {/* Email Address */}
                    <div className="mt-4 text-base">
                        <Label htmlFor="email"className={'text-base'}>Correo Electronico</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className="mt-4 text-base">
                        <Label htmlFor="password"className={'text-base'}>Contraseña</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
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
                    <div className="mt-4 text-base">
                        <Label htmlFor="passwordConfirmation"className={'text-base'}>
                            Confirmar Contraseña
                        </Label>

                        <Input
                            id="passwordConfirmation"
                            type="password"
                            value={passwordConfirmation}
                            className="block mt-1 w-full"
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
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            Ya registrado?
                        </Link>

                        <Button className="ml-4">Registrar</Button>
                    </div>
                </form>
            </AuthCard2>
        </GuestLayout>
    )
}

export default Register

