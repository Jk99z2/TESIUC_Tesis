import AppLayout from '@/components/Layouts/AppLayout'
import Cuerpo from '@/components/Layouts/cuerpo'


const Dashboard = () => {
    return (
    
        <AppLayout>
            <Cuerpo
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>
            <div className="py-12">
            <div className="max-w-full mx-auto ml-64 sm:px-6 lg:px-4">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b text-7xl border-gray-200 flex justify-start">
                            Bienvenidos a TESIUC
                        </div>
                    </div>
                </div>
            </div>   
        </Cuerpo>
        </AppLayout>
    )
}

export default Dashboard
