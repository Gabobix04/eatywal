import logo from '../../assets/img/logoWall.png';
import arrow from '../../assets/img/arrow.png';

function Header() {
    return (
      <>
          <header className='flex px-4 py-3 border-b border-black cursor-pointer'>
              <div className='flex items-center gap-3 mr-10 ml-11'>
                  <img className='size-10' src={logo} alt="Logo" />
                  <h1 className='text-2xl font-semibold'>Eatywall</h1>
              </div>
  
              {/*Caja de botones*/}
              <div className='flex items-center'>
  
                  <div className='flex items-center p-3 cursor-pointer transition-all hover:bg-gray-200 ' >
                      <p className='mr-2 text-sm'>Características</p>
                  </div>
  
                  <div className='flex items-center p-3 cursor-pointer transition-all hover:bg-gray-200 ' >
                      <p className='mr-2 text-sm'>Guía del producto</p>
                  </div>
  
                  <div className='flex items-center p-3 cursor-pointer transition-all hover:bg-gray-200 ' >
                      <p className='mr-2 text-sm'>Precios</p>
                      <img className='size-3 object-contain' src={arrow} alt="Flecha" />
                  </div>
  
                  <div className='flex items-center p-3 cursor-pointer transition-all hover:bg-gray-200 ' >
                      <p className='mr-2 text-sm'>Recursos</p>
                      <img className='size-3 object-contain' src={arrow} alt="Flecha" />
                  </div>

                  <div className='flex items-center p-3 cursor-pointer transition-all hover:bg-gray-200 ' >
                      <p className='mr-2 text-sm'>Empresa</p>
                  </div>
              </div>

              <div className='flex items-center ml-96'>
                    
                    <div className='flex items-center p-3 cursor-pointer transition-all hover:bg-gray-200 ' >
                      <p className='mr-2 text-sm'>Contacto </p>
                    </div>
                    
                    <div className='h-9 border-l border-gray-700 mx-4 '></div>

                    <div className='flex items-center'>
                        <button className='px-4 py-2 ml-4 text-white bg-blue-500 rounded-md  hover:bg-blue-400'> 
                            <p className='text-sm font-semibold'>Iniciar sesión</p>
                        </button>
                    </div>

                </div>
              
          </header>
      </>
    );
  
    
  }
  
  export default Header;