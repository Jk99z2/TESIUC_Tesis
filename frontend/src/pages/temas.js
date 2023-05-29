import AppLayout from '@/components/Layouts/AppLayout';
import Cuerpo from '../components/Layouts/cuerpo';
import ModalComponent from './ModalComponent';
import { useState } from 'react';
const Temas = () => {
    const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
    
    return (
        <>
        <AppLayout>
        <Cuerpo header={
                <h2 className="font-semibold text-3xl md:text-5xl 2xl:text-7xl  text-gray-800 leading-tight">
                Temas
            </h2>
            }>
            <div className=''>
                <div className='flex justify-end mr-6 mt-6 2xl:mr-16 2xl:mt-6'>
                    <button onClick={openModal} type="button"  className="items-center px-1 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs md:text-lg text-white uppercase tracking-widest hover:bg-gray-500 active:bg-blue-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                        Proponer tema
                    </button>
                    {showModal && <ModalComponent closeModal={closeModal} />}
                </div>
                
                <div className="p-6 2xl:py-6 2xl:px-16 ">
                    <div className="p-4 xl:px-11 xl:py-6 2xl:px-16 2xl:py-6 border-2 border-solid rounded-lg border-gray-700">
                        <div className="grid grid-rows gap-2 ">
                            <div className="flex items-center justify-center h-auto rounded  ">
                                <p className="text-lg md:text-xl xl:text-3xl  2xl:text-4xl text-bold text-gray-400 dark:text-gray-500">Escáner y geolocalizador para automóviles y tractores (DAVR, FRH)</p>
                            </div>
                            <div className="flex items-center justify-center  rounded  ">
                                <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">*El objetivo de la tesis es desarrollar un dispositivo electrónico, el dispositivo será un escáner y geolocalizador para automóviles y tractores esto usando una placa particle boron y conector obd2 usando el puente cambus. Este dispositivo electrónico escaneará la computadora del vehículo en cuestión y extraerá datos de esta, como por ejemplo, gasto del combustible o velocidad en km/h del carro, entre mucho más datos. El dispositivo mandará los datos a una aplicación web donde se le mostrará al usuario todos los datos extraídos en forma de tablas, gráficas, etc. El usuario podrá ver los datos, generar reportes, ver la ubicación en tiempo real, etc.</p>
                            </div>
                            <div className="flex items-center justify-start  rounded  ">
                                <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">Asesor(es): Mtro. Daniel Alfonso Verde Romero, Dr. Fernando Rodríguez Haro</p>
                            </div>
                            <div className="flex items-center justify-start  rounded  ">
                                <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">Revisores: Mtro. Fernando Tomas Díaz García, Mtro. Enrique Carlos Rosales Busquets, Dr. Juan Miguel González López</p>
                            </div>
                            <div className="flex items-center justify-end gap-6  rounded ">
                                <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">Alumnos: 2</p>
                                <button className="inline-flex items-center px-3 py-2  bg-gray-900 border border-transparent rounded-md font-semibold text-xs md:text-lg text-white uppercase tracking-widest hover:bg-gray-500 active:bg-blue-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                                    Me interesa
                                </button>
                            </div>
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
/* <th scope="col" class="px-6 py-3">
                                    Asesor(es)
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Revisor(es)
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Alumnos
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Estado
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Aceptar
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Rechazar
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Modificar
                                </th> */