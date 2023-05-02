import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const Actividades = () => {
    return (
    
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Actividades
                </h2>
            }>

            <Head>
                <title>TESIUC</title>
            </Head>
            <div className="p-4 sm:ml-64">
                    <div className="p-12 border-4 border-solid rounded-lg dark:border-gray-700">
                        <div className="flex flex-row items-between justify-between h-auto mb-4 rounded bg-transparent border-2  border-solid rounded-lg border-gray-700">
                            <dic className=" m-12">
                                <p className="text-2xl  text-gray-400 dark:text-gray-500">
                                    Actividad 4. Entrega Planteamiento de problema</p>
                                    <button className="inline-flex items-center px-1 py-2 bg-[#C9C9C9] border border-transparent rounded-md font-semibold text-xs md:text-lg text-[#000000] uppercase tracking-widest hover:bg-green-500 active:bg-blue-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                                        Entregar
                                    </button>
                                
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


            
        </AppLayout>
    )
}

export default Actividades
