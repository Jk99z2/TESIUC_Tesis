import AppLayout from '@/components/Layouts/AppLayout'
import Cuerpo from '@/components/Layouts/cuerpo'


const Dashboard = () => {
    return (
    
        <AppLayout>
            <Cuerpo
            header={
                <h2 className="font-semibold  text-3xl md:text-5xl 2xl:text-7xl  text-gray-800 leading-tight">
                    Bienvenidos a TESIUC
                </h2>
            }> 
                <div className="p-6 2xl:p-12 ">
                    <div className="p-4 xl:px-11 xl:py-9 2xl:px-16 2xl:py-8 border-2 border-solid rounded-lg border-gray-700">
                        <div className="grid grid-rows gap-2 ">
                            <div className="flex items-center justify-center  h-auto rounded  ">
                                <p className="text-sm  md:text-base lg:text-2xl font-bold 2xl:text4xl text-gray-400 dark:text-gray-500">¡Bienvenido a TESIUC, el sistema de Gestión y Control de Tesis de la Universidad de Colima!</p>
                            </div>
                            <div className="flex items-center justify-center  rounded  ">
                                <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">Estamos encantados de presentarte nuestra plataforma en línea, diseñada para simplificar y optimizar todo el proceso de elaboración de tu tesis. Con TESIUC, tendrás a tu disposición una variedad de herramientas y ventajas que te ayudarán a llevar a cabo tu investigación de manera organizada y eficiente.</p>
                            </div>
                            <div className="flex items-center justify-center  rounded  ">
                                <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">Imagina tener la posibilidad de mantener todos los aspectos de tu tesis en un solo lugar, evitando confusiones y reduciendo la probabilidad de errores. Además, podrás establecer una comunicación fluida con tus profesores, compartir documentos, recibir comentarios y colaborar de manera efectiva, sin necesidad de enviar múltiples correos electrónicos o archivos dispersos.</p>
                            </div>
                            <div className="flex items-center justify-center  rounded  ">
                                <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">La accesibilidad es clave, y con TESIUC podrás acceder a toda la información y documentos relacionados con tu tesis desde cualquier dispositivo con conexión a Internet. Ya sea en tu hogar, en la biblioteca o incluso mientras te desplazas, tendrás la tranquilidad de poder consultar tus avances y realizar seguimientos en cualquier momento y lugar.</p>
                            </div>
                            <div className="flex items-center justify-center  rounded ">
                                <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">No solo eso, nuestra plataforma ha sido especialmente diseñada para adaptarse a las necesidades de los estudiantes y profesores de licenciatura. Ofrecemos herramientas especializadas que te guiarán a lo largo de todo el proceso, brindándote un enfoque personalizado para que alcances el éxito académico.</p>
                            </div>
                            <div className="flex items-center justify-center  rounded ">
                                <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">TESIUC te brinda un control y seguimiento completo de cada etapa de tu tesis, permitiéndote tener una visión clara y detallada de tu progreso. Además, tendrás acceso a un repositorio seguro y organizado donde podrás almacenar y acceder a todos tus archivos relacionados con la tesis.</p>
                            </div>
                            <div className="flex items-center justify-center  rounded ">
                                <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-500">¡Bienvenido a TESIUC, tu aliado en el camino hacia el éxito académico!</p>
                            </div>
                        </div>
                    </div>
                </div> 
        </Cuerpo>
        </AppLayout>
    )
}

export default Dashboard
