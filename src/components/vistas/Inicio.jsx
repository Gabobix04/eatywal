import lupaCaja from '../../assets/img/lupa-caja.png';
import tuercas from '../../assets/img/tuercas.png';
import rompecabezas from '../../assets/img/rompecabezas.png';
import imagen_inicio from '../../assets/img/imagen_inicio.png';

function Inicio() {
    return (
        <div>

            <div className='bg-gradient-to-r from-blue-500 to-cyan-500 items-center py-20'>
                <div className='max-w-7xl m-auto'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-12'>
                            <div>
                                <h1 className="text-3xl font-bold mt-2 text-white">Empieza tu próximo <br />proyecto con buen pie</h1>
                                <p className="text-xl font-normal mt-6 text-white">Estructura y alinea los objetivos de los equipos, <br />
                                    divide el trabajo en tareas gestionables y entérate <br /> de quién trabaja en qué.
                                </p>
                            </div>
                            <div>
                                <button className='px-6 py-3 text-white bg-[#6f59c2] hover:bg-violet-400 rounded-full'>
                                    <p className='text-sm font-semibold'>Comenzar</p>
                                </button>

                                <button className='px-6 py-3 ml-4 text-[#6f59c2] bg-white border-2 border-violet-500 rounded-full' >
                                    <p className='text-sm font-semibold'>Mira como funciona</p>
                                </button>
                            </div>
                        </div>
                        <div>
                            <img className='w-[500px]' src={imagen_inicio} alt="Imagen de inicio" />
                        </div>
                    </div>


                </div>

            </div>

            <div className='max-w-7xl m-auto'>

                <div className='mt-20'>
                    <p className="text-base font-semibold">MANTENTE AL TANTO</p>
                    <h1 className="text-3xl font-bold mt-2">Haz más con EatyWall</h1>
                    <p className="text-xl font-normal mt-6">Tu herramienta favorita de gestion de proyectos y flujos de<br />
                        trabajo para casi cualquier cosa.</p>
                </div>

                <div className="flex items-center ">
                    <div className="flex w-[350px] h-[380px] bg-[#f2f8ff] mt-14 p-3 flex-col">
                        <img className='size-24 ml-3 mt-4 ' src={lupaCaja} alt="Objetivo" />
                        <p className='text-2xl font-semibold ml-3 mt-4'>Objetivo</p>
                        <p className='text-base font-normal ml-3 mt-4 mr-2'>Desarrollar una plataforma de gestión de proyectos que facilite la colaboración y la organización de tareas de manera visual e intuitiva. Queremos ofrecer un producto escalable y personalizable para cualquier proyecto</p>

                    </div>

                    <div className="flex w-[350px] h-[380px] bg-[#f2f8ff] mt-14 p-3 flex-col ml-10">
                        <img className='size-24 ml-3 mt-4 ' src={tuercas} alt="Tecnologias" />
                        <p className='text-2xl font-semibold ml-3 mt-4'>Tecnologias</p>
                        <p className='text-base font-normal ml-3 mt-4 mr-2'>Nuestro proyecto utiliza React.js, Tailwind CSS, Node.js, Sequelize, y PostgreSQL para crear soluciones escalables y dinámicas, combinando interfaces interactivas con un backend robusto y una gestión de datos eficiente.</p>

                    </div>

                    <div className="flex w-[350px] h-[380px] bg-[#f2f8ff] mt-14 p-3 flex-col ml-10">
                        <img className='size-24 ml-3 mt-4 ' src={rompecabezas} alt="Integraciones" />
                        <p className='text-2xl font-semibold ml-3 mt-4'>Integraciones</p>
                        <p className='text-base font-normal ml-3 mt-4 mr-2'>Conecte las aplicaciones Eaty para mejorar la gestion de su negocio, crea tareas ajustadas a sus necesidades específicas. </p>

                    </div>
                </div>

                <div className='mt-10'>
                    <p className='text-xl font-medium mb-2'>SOPORTE</p>
                    <a className='text-xl font-medium text-blue-600 underline' href="">Solicita información</a>
                </div>
            </div>



        </div>
    )
}

export default Inicio;