import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const Temas = () => {
    return (
    
        <AppLayout
            header={
                <h2 className="font-semibold text-3xl text-gray-800 leading-tight">
                    Temas
                </h2>
            }>

            <Head>
                <title>TESIUC</title>
            </Head>
            <div className="py-4">
                <div className="max-w-full mx-auto ml-64 sm:px-6 lg:px-4">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 flex justify-end">
                            <button className="inline-flex items-center px-1 py-2 bg-[#C9C9C9] border border-transparent rounded-md font-semibold text-xs md:text-lg text-[#000000] uppercase tracking-widest hover:bg-green-500 active:bg-blue-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                                Proponer tema
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 sm:ml-64">
                    <div className="p-12 border-4 border-solid rounded-lg dark:border-gray-700">
                        <div className="flex flex-col items-start justify-start h-auto mb-4 rounded bg-transparent border-2  border-solid rounded-lg border-gray-700">
                            <dic className=" m-12">
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Escáner y geolocalizador para automóviles y tractores (DAVR, FRH)</p>
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    *El objetivo de la tesis es desarrollar un dispositivo electrónico, el dispositivo será un
                                    escáner y geolocalizador para automóviles y tractores esto usando una placa particle boron
                                    y conector obd2 usando el puente cambus. Este dispositivo electrónico escaneará la
                                    computadora del vehículo en cuestión y extraerá datos de esta, como por ejemplo, gasto del
                                    combustible o velocidad en km/h del carro, entre mucho más datos. El dispositivo mandará
                                    los datos a una aplicación web donde se le mostrará al usuario todos los datos extraídos en
                                    forma de tablas, gráficas, etc. El usuario podrá ver los datos, generar reportes, ver la
                                    ubicación en tiempo real, etc.</p>
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Asesor(es): Mtro. Daniel Alfonso Verde Romero, Dr. Fernando Rodríguez Haro</p>
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Revisores: Mtro. Fernando Tomas Díaz García, Mtro. Enrique Carlos Rosales Busquets, Dr.
                                    Juan Miguel González López</p>
                                <div className='flex flex-row justify-between'>
                                    <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Alumnos: 2</p>
                                    <button className="inline-flex items-center px-1 py-2 bg-[#C9C9C9] border border-transparent rounded-md font-semibold text-xs md:text-lg text-[#000000] uppercase tracking-widest hover:bg-green-500 active:bg-blue-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                                        Me interesa
                                    </button>
                                </div>
                            </dic>
                        </div>
                        
                        <div className="flex flex-col items-start justify-start h-auto mb-4 rounded bg-transparent border-2  border-solid rounded-lg border-gray-700">
                            <dic className=" m-12">
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Desarrollo de una red social para compartir estados de ánimo y detección de señales
                                    débiles de cibersuicidio en estudiantes universitarios (RRLB, FRH)</p>
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    *Como parte del proyecto de Detección de señales débiles de cibersuicidio en redes
                                    sociales, se pretende desarrollar una red social que provea de texto de estados de ánimo en
                                    estudiantes para ser analizado automáticamente por algoritmos para identificar estados de
                                    depresión, vacío existencial o frustración existencial que pudieran detonar la ideación
                                    suicida.</p>
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Asesor(es): Dr. Rutilio Rodolfo López Barbosa, Dr. Fernando Rodríguez Haro</p>
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Revisores: Mtro. Enrique Carlos Rosales Busquets, Dr. Ernesto Navarro Álvarez, Dr. Efraín
                                    Villalvazo Laureano</p>
                                <div className='flex flex-row justify-between'>
                                    <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Alumnos: 2</p>
                                    <button className="inline-flex items-center px-1 py-2 bg-[#C9C9C9] border border-transparent rounded-md font-semibold text-xs md:text-lg text-[#000000] uppercase tracking-widest hover:bg-green-500 active:bg-blue-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                                        Me interesa
                                    </button>
                                </div>
                            </dic>
                        </div>
                            <div className="flex flex-col items-start justify-start h-auto mb-4 rounded bg-transparent border-2  border-solid rounded-lg border-gray-700">
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
                                <div className='flex flex-row justify-between'>
                                    <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Alumnos: 2</p>
                                    <button className="inline-flex items-center px-1 py-2 bg-[#C9C9C9] border border-transparent rounded-md font-semibold text-xs md:text-lg text-[#000000] uppercase tracking-widest hover:bg-green-500 active:bg-blue-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                                        Me interesa
                                    </button>
                                </div>
                                    
                            </dic>
                        </div>
                        
                    </div>
                </div>    


            
        </AppLayout>
    )
}

export default Temas
