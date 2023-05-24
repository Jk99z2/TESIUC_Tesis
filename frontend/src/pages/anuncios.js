import AppLayout from '@/components/Layouts/AppLayout'
import Cuerpo from '@/components/Layouts/cuerpo'
import Head from 'next/head'

const Anuncios = () => {
    return (
        <AppLayout>
            <Cuerpo
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Anuncios
                </h2>
            }>

            
            <div className="p-4 sm:ml-64">
                    <div className="p-12 border-4 border-solid rounded-lg dark:border-gray-700">
                        <div className="flex flex-col items-start justify-start h-auto mb-4 rounded bg-transparent border-2  border-solid rounded-lg border-gray-700">
                            <dic className=" m-12">
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Entrega de avances</p>
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Presentación del proyecto de tesis el dia 2 de mayo de 2023 a las 9 a.m en el aula</p>
                                
                            </dic>
                        </div>
                        
                        <div className="flex flex-col items-start justify-start h-auto mb-4 rounded bg-transparent border-2  border-solid rounded-lg border-gray-700">
                            <dic className=" m-12">
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Portal donde pueden descargar los logos de la universidad </p>
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Comparto portal donde pueden obtener los logos oficiales: https://portal.ucol.mx/publicaciones/Escudo_Oficial.htm</p>

                                
                            </dic>
                        </div>
                        
                    </div>
                </div>


            
        </Cuerpo>
        </AppLayout>
        
    )
}

export default Anuncios
