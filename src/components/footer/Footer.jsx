import sol from '../../assets/img/sol.png'
import arrow from '../../assets/img/arrow.png'

function Footer() {
  return (
    <footer className='border-t bg-blue-50 border-gray-500'>
      <div className='flex py-3 max-w-[1350px] m-auto justify-between'>
        <div className="flex items-center">
          <p className='text-sm font-normal'>Copyright &copy; EatyWall</p>
        </div>

        <div className="flex items-center gap-3 ">
          <a href='#' className='text-sm fotbn-semibold mr-4'>Politica de privacidad</a>
          <a href='#' className='text-sm fotbn-semibold mr-4'>Terminos</a>
          <a href='#' className='text-sm fotbn-semibold'>Aviso Legal</a>

          <button className="flex items-center h-8 px-4 py-2 ml-4 text-black border-2 border-gray-300 shadow-lg rounded-lg">
            <img className='size-5 mr-2' src={sol} alt="brillo" />
            <p className='text-sm font-semibold'>Luz</p>
            <img className='size-2 object-contain mr-2 ml-3' src={arrow} alt="flecha" />
          </button>
        </div>
      </div>
    </footer>
  );
}


export default Footer;