import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
        <a href="https://react.dev" target="_blank">
          <img src="src\assets\sangre.png" className="logo banco de sangre" alt="banco de sangre logo" />
        </a>
      </div>
      <h1>Banco de sangre</h1>
      <div className="card">
        <h3>
          Pagina en proceso de creacion
        </h3>
        <button onClick={() => setCount((count) => count + 1)}>
          {count} ml de sangre donados
        </button>
        <p>
          Cada click es un ml de sangre para una vida
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
