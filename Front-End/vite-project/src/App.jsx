import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes,Navigate  } from "react-router-dom"
import HomePage from './Component/HomePage'
import NavBar from './Component/NavBar'
import LoginPage from './Component/LoginPage'
import AdminDashboard from './Component/AdminDashboard'
import Layout from './Component/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
    <Router>
     <Routes>
     <Route path="/" element={<HomePage/>} />
     <Route path="/login" element={<LoginPage/>} />
     <Route path="/" element={<Layout/>}>
          <Route path="dashboard" element={<AdminDashboard/>} />
          
        </Route>        

            </Routes>
     </Router>
    </>
  )
}

export default App
