import React from 'react'
import GuestLayout from "@/components/Layouts/GuestLayout";

import Pruebaside from './pruebassidebar';
import Cuerpo from '../components/Layouts/cuerpo';
import Temas from './temas';
import Navigation from '@/components/Layouts/Navigation';

export default function Pruebapagina() {
    return (
        <>
            <GuestLayout>
                <Prueba>
                    <Pruebaside>
                        
                    </Pruebaside>
                </Prueba>
            </GuestLayout>      
        </>
    )

}