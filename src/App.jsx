import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import PaginaPrincipal from './components/Pagina-principal/Pagina-principal'
import PaginaCampañas from './components/Pagina-campañas/Pagina-campañas'

function App() {
  const [currentPage, setCurrentPage] = useState('principal')

  const renderPage = () => {
    switch (currentPage) {
      case 'campañas':
        return <PaginaCampañas />
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
