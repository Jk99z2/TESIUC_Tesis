import AppLayout from '@/components/Layouts/AppLayout'
import Cuerpo from '@/components/Layouts/cuerpo'
import Head from 'next/head'

const Tesis = () => {
    return (
    
        <AppLayout>
            <Cuerpo
            header={
                <h2 className="font-semibold text-3xl text-gray-800 leading-tight">
                    Tesis
                </h2>
            }>

            <Head>
                <title>TESIUC</title>
            </Head>
            <div className="p-4 sm:ml-64">
                    <div className="p-4 border-4 border-solid rounded-lg dark:border-gray-700">
                        <div className="flex flex-col items-center justify-center h-auto mb-4 rounded bg-transparent border-2  border-solid rounded-lg border-gray-700">
                            <dic className=" m-12">
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Aplicación Web y móvil para la gestión de tesis de licenciatura (ECRB, ENA)</p>
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    *Una aplicación Web que permita a los actores involucrados en el desarrollo de trabajos de
                                    tesis, llevar un control y seguimiento de la asignación de temas, asesores, coasesores,
                                    revisores así como la agenda de presentaciones. También contará con reporte de avance,
                                    repositorio de documentos y notificación de cambios.</p>
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Asesor(es): Mtro. Enrique Carlos Rosales Busquets, Dr. Ernesto Navarro Álvarez</p>
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Revisores: Mtro. Marco Antonio Pérez González, Dr. Fernando Rodríguez Haro, Mtro. Juan
                                    Pablo Martínez Vargas</p>
                                
                                    
                            </dic>
                        </div>
                    </div>
                </div>    


            
        </Cuerpo>
        </AppLayout>
    )
}

export default Tesis
