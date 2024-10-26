import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import PaginaPrincipal from './components/Pagina-principal/Pagina-principal'
import PaginaCampañas from './components/Pagina-campañas/Pagina-campañas'
import Formulario from './components/Formulario/Formulario'
import Crearcampaña from './components/Crearcampaña/Crearcampaña'
import Acercade from './components/Acercade/Acercade'

function App() {
  const [currentPage, setCurrentPage] = useState('principal')

  const renderPage = () => {
    switch (currentPage) {
      case 'campañas':
        return <PaginaCampañas />

      case 'donar':
        return <Formulario />

      case 'crearcampaña':
        return <Crearcampaña />

      case 'Acercade':
        return <Acercade />
        
      case 'principal':
      default:
        return <PaginaPrincipal />
    }
  }

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  )
}

export default App
