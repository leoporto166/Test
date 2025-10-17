
import { useState } from 'react'
import './App.css'

function App() {

  const [message, setMessage] = useState("Bem vindo ao projeto")

  return (
    <>
      <h1>Projeto Test</h1>
      <p>{message}</p>

      <button onClick={() => setMessage("Estudando Test")}>
        Alterar
      </button>
    </>
  )
}

export default App
