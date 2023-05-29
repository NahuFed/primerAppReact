import './App.css'
import Contador from './components/Contador';
import Titulos from './components/Titulos'

function App() {
   //aqui va la mayor parte de la logica
  const estado = true;

  return (
    
    <>
    <Titulos tituloNuevo='Este titulo es generado usando props' estadoNuevo = {estado}/>
    <Contador></Contador>
    {/* <Titulos></Titulos> */}
    </>
  )
}

export default App
