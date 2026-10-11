import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandPage from './pages/landpage/landpage.jsx';
import Login from './pages/login/login.jsx';
import Home from './pages/principal/home.jsx';
import Cadastro from './pages/cadastro/cadastro.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

