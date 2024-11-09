import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import PaginaPrincipal from './components/Pagina-principal/Pagina-principal'
import PaginaCampañas from './components/Pagina-campañas/Pagina-campañas'
import Formulario from './components/Formulario/Formulario'
import Crearcampaña from './components/Crearcampaña/Crearcampaña'
import Acercade from './components/Acercade/Acercade'
import InicioSesion from './components/Inicio-sesion/Inicio-sesion'
import RegistrarUsuario from './components/Registro-usuario/Registro-usuario'


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

      case 'inicio-sesion':
        return <InicioSesion />

      case 'Registrar-usuario':
        return <RegistrarUsuario />
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
