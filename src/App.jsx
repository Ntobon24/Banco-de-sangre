import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import PaginaPrincipal from './components/Pagina-principal/Pagina-principal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaginaPrincipal/>
    </>
  )
}

export default App
