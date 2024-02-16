
import './App.css'
import '../components/Button/index'
import { Button } from '../components/Button/index'
import { ButtonB } from '../components/ButtonBoolean/indexBoolean'
import { useState } from 'react'
function App() {

  const [exibir, setExibir] = useState(false)

  const mostrarMensagem = () => {
    setExibir(true)

    setTimeout(()=>{
      setExibir(false)
    }, 2000)
  }

  return (
    <>
       {exibir && <p>Esta Exibindo</p>} 
      <button onClick={mostrarMensagem}>Exibir Texto</button> 
      <Button>Clique aqui</Button>
      <ButtonB>Clique aqui dnv</ButtonB>
    </>
  )
}

export default App
