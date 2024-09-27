import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Cadastro/Signup';
import Description from './pages/Descricao/Description';
import Points from './pages/Pontos/Points';
import Partners from './pages/Parceiros/Partners';
import './App.css'

function App() {
  

  return (
    <Router>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/description" element={<Description />} />
        <Route path="/points" element={<Points />} />
        <Route path="/partners" element={<Partners />} />
    </Routes>
    <Footer />
</Router>
  
  )
}

export default App
