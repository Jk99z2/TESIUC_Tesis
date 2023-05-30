import React, { useState } from 'react';

const ModalComponent = ({ closeModal }) => {
  return (
    <>
      <div className="justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-2 rounded-lg shadow-lg  flex flex-col w-full p-6 bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl text-gray-900 font-semibold">Proponer Tema</h3>
              <button
                className="p-1 ml-auto border-0  text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={closeModal}
              > X
              </button>
            </div>
            <form className="space-y-2 w-96" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Titulo de Tesis</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Escáner y geolocalizador para automóviles y tractores" required/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Descripcion</label>
                        <input type="password" name="password" id="password" placeholder="El objetivo de la tesis es desarrollar un dispositivo electrónico, el dispositivo será un escáner y geolocalizador para automóviles y tractores esto usando una placa particle boron y conector obd2 usando el puente cambus." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Numero de Alumnos</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="2" required/>
                    </div>
                </form>
            <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b mt-6">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button" onClick={closeModal}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalComponent;
/*

             */
