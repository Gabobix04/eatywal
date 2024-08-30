import logo from '../assets/img/logoWall.png';
import arrow from '../assets/img/arrow.png';

function Header() {
  return (
    <>
        <header className='flex px-4 py-3 border-b border-black'>
            <div className='flex items-center gap-3 mr-10'>
                <img className='size-10' src={logo} alt="Logo" />
                <h1 className='text-2xl font-semibold'>Eatywall</h1>
            </div>

            {/*Caja de botones*/}
            <div className='flex items-center'>

                <div className='flex items-center p-3 cursor-pointer transition-all hover:bg-gray-200 ' >
                    <p className='mr-2 text-sm'>Espacio de trabajo</p>
                    <img className='size-3 object-contain' src={arrow} alt="Flecha" />
                </div>

                <div className='flex items-center p-3 cursor-pointer transition-all hover:bg-gray-200 ' >
                    <p className='mr-2 text-sm'>Reciente</p>
                    <img className='size-3 object-contain' src={arrow} alt="Flecha" />
                </div>

                <div className='flex items-center p-3 cursor-pointer transition-all hover:bg-gray-200 ' >
                    <p className='mr-2 text-sm'>Marcado</p>
                    <img className='size-3 object-contain' src={arrow} alt="Flecha" />
                </div>

                <div className='flex items-center p-3 cursor-pointer transition-all hover:bg-gray-200 ' >
                    <p className='mr-2 text-sm'>Plantillas</p>
                    <img className='size-3 object-contain' src={arrow} alt="Flecha" />
                </div>
            </div>

            <div>
                <button className='px-4 py-2 ml-4 text-white bg-blue-500 rounded-sm  hover:bg-blue-400'> 
                    Crear
                </button>
            </div>

        </header>
    </>
  );

  
}

export default Header;