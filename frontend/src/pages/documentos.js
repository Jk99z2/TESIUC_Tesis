import AppLayout from '@/components/Layouts/AppLayout'
import Cuerpo from '@/components/Layouts/cuerpo'
import Head from 'next/head'

const Documentos = () => {
    return (
    
        <AppLayout>
            <Cuerpo
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Documentos
                </h2>
            }>

            <Head>
                <title>TESIUC</title>
            </Head>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Para subir Documentos
                        </div>
                    </div>
                </div>
            </div>
 


            
        </Cuerpo>
        </AppLayout>
    )
}

export default Documentos
