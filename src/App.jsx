import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contato from './pages/Contato'

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/> 
        <Route path='contato' element={<Contato/>}/>          
      </Routes>
     </Router>
    </>
  )
}

export default App
