import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, BrowserRouter as Router,

  Navigate
} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Products from './pages/product'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<About/>}/>
        <Route path='/produtos' element={<Products/>}/>
        <Route path="*" element={<Navigate to="/"/>} />

      </Routes>
    </Router>
  )
}

export default App
