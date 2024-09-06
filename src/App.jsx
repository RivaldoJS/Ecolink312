import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Description from './pages/Description';
import Points from './pages/Points';
import Partners from './pages/Partners';
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
