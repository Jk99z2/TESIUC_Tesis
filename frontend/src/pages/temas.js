import AppLayout from '@/components/Layouts/AppLayout';
import Cuerpo from '../components/Layouts/cuerpo';
import ModalComponent from './ModalComponent';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Temas = () => {
    const [showModal, setShowModal] = useState(false);
    const [temas, setTemas] = useState([]);

    useEffect(() => {
        fetchTemas();
    }, []);

    const fetchTemas = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/temas'); // Replace '/api/temas' with your actual API endpoint
            setTemas(response.data);
        } catch (error) {
            console.error('Error fetching temas:', error);
        }
    };

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
                <div className='flex justify-end mr-6 mt-6 2xl:mr-16 2xl:mt-6'>
                    <button onClick={openModal} type="button"  className="items-center px-1 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs md:text-lg text-white uppercase tracking-widest hover:bg-gray-500 active:bg-blue-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                        Proponer tema
                    </button>
                    {showModal && <ModalComponent closeModal={closeModal} />}
                </div>
        {temas.map((tema) => (
            <div key={tema.id_tema} className=''>
                <div className="p-6 2xl:py-6 2xl:px-16 ">
                    <div className="p-4 xl:px-11 xl:py-6 2xl:px-16 2xl:py-6 border-2 border-solid rounded-lg border-gray-700">
                        <div className="grid grid-rows gap-2 ">
                            <div className="flex items-center justify-center h-auto rounded  ">
                                <p className="text-lg md:text-xl xl:text-3xl  2xl:text-4xl text-bold text-gray-400 dark:text-gray-500">{tema.nombre_tesis}</p>
                            </div>
                            <div className="flex items-center justify-center  rounded  ">
                                <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">{tema.descripcion_tesis}</p>
                            </div>
                            <div className="flex items-center justify-start  rounded  ">
                                <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">Carrera: {tema.carrera}</p>
                            </div>
                            <div className="flex items-center justify-start  rounded  ">
                                <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">Asesor(es): {tema.asesores}</p>
                            </div>
                            <div className="flex items-center justify-start  rounded  ">
                                <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">Revisores: {tema.revisores}</p>
                            </div>
                            <div className="flex items-center justify-end gap-6  rounded ">
                                <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">Alumnos: {tema.alumnos}</p>
                                <button className="inline-flex items-center px-3 py-2  bg-gray-900 border border-transparent rounded-md font-semibold text-xs md:text-lg text-white uppercase tracking-widest hover:bg-gray-500 active:bg-blue-500 focus:outline-none focus:border-gray-500 focus:ring ring-gray-100 disabled:opacity-25 transition ease-in-out duration-150">
                                    Me interesa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        ))}
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
