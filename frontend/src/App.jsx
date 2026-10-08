import { useState } from 'react'
import './App.css'
import Login from './pages/login/login.jsx'
import Cadastro from './pages/cadastro/cadastro.jsx'
import Home from './pages/principal/home.jsx'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Login/>
    <Cadastro />
    </>
  )
}

export default App
