import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Footerdash from '../components/footerdash'
import Cuerpo from '../components/Layouts/cuerpo'

const Temas = () => {
    return (
        <>
        <AppLayout>
        <Cuerpo color={"bg-white py-6"} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Bienvenidos a Tesiuc
                </h2>
            }>
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">                       
                <button className="inline-flex items-center px-1 py-2 bg-[#C9C9C9] border border-transparent rounded-md font-semibold text-xs md:text-lg text-[#000000] uppercase tracking-widest hover:bg-green-500 active:bg-blue-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                    Proponer tema
                </button>
                            <div className="p-4">
                                <div className="p-12 border-4 border-solid rounded-lg dark:border-gray-700">
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
                                </div>
                            </div>     
            </div>  
            
        </Cuerpo>
        </AppLayout>
            
                           
            
        </>
    )
}

export default Temas
