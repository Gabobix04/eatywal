import './App.css'
import './index.css'
import '@fontsource-variable/saira';
import '@fontsource-variable/inter';
import HeaderInicio from './components/headers/HeaderInicio';
import Footer from './components/footer/Footer';
import Inicio from './components/vistas/Inicio';

function App() {
  
  return (
    <div >
      <HeaderInicio />
      <Inicio/>
      <Footer/>
    </div>
  )
}

export default App
