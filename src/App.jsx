import './App.css'
import Titulos from './components/Titulos'

function App() {
   //aqui va la mayor parte de la logica
  const estado = true;

  return (
    <>
    <Titulos tituloNuevo='Este titulo es generado usando props' estadoNuevo = {estado}/>
    {/* <Titulos></Titulos> */}
    </>
  )
}

export default App
