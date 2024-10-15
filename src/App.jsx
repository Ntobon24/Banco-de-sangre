import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import PaginaPrincipal from './components/Pagina-principal/Pagina-principal'
import PaginaCampañas from './components/Campañas/Pagina-campañas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaginaCampañas/>
    </>
  )
}

export default App
