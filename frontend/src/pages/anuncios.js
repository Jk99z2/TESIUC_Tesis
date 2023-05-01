import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const Anuncios = () => {
    return (
    
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Anuncios
                </h2>
            }>

            <Head>
                <title>TESIUC</title>
            </Head>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Para subir Anuncios
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 sm:ml-64">
                    <div class="p-4 border-4 border-solid rounded-lg dark:border-gray-700">
                        <div class="grid grid-cols-3 gap-4 mb-4">
                            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                        </div>
                    </div>
                </div>    


            
        </AppLayout>
    )
}

export default Anuncios
