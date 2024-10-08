import logo from '../../assets/img/logoWall.png';

function InicioSesion() {
    return (
        <>
            <div>
                <header>
                    <div className='flex py-3 max-w-7xl m-auto justify-between'>
                        <div className='flex items-center'>
                            <div className='flex items-center gap-3 mr-10 '>
                                <img className='size-7' src={logo} alt="Logo" />
                                <h1 className='text-xl font-semibold'>EatyWal</h1>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <div>
                <div className='max-w-md m-auto items-center flex justify-center'>
                    <div className='mt-20 '>
                        <h1 className="text-3xl font-bold mt-2 ">Te damos la bienvenida <br />
                            a Eatywall</h1>
                            <p className=" ">Para comenzar, inicia sesión.</p>
                            <p>Correo electronico</p>
                            <input className='w-full outline-none border border-gray-400' type="text"/>
                            <p>Contraseña</p>
                            <input className='w-full outline-none border border-gray-400 ' type="text"/>
                    </div>
                </div>
            </div>
        </>


    );


}

export default InicioSesion;