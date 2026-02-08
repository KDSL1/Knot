import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'
import CursorTrail from './components/CursorTrail'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check if user is logged in
    const rememberMe = localStorage.getItem('rememberMe')
    const username = localStorage.getItem('username')
    if (rememberMe === 'true' && username) {
      setIsAuthenticated(true)
    }

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const handleLogin = (username) => {
    setIsAuthenticated(true)
    localStorage.setItem('username', username)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('username')
    localStorage.removeItem('rememberMe')
  }

  return (
    <Router>
      <CursorTrail />
      <Routes>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/get-started" element={<GetStarted theme={theme} toggleTheme={toggleTheme} />} />
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
            <Navigate to="/chat" /> : 
            <Login onLogin={handleLogin} theme={theme} toggleTheme={toggleTheme} />
          } 
        />
        <Route 
          path="/register" 
          element={
            isAuthenticated ? 
            <Navigate to="/chat" /> : 
            <Register onRegister={handleLogin} theme={theme} toggleTheme={toggleTheme} />
          } 
        />
        <Route 
          path="/chat/*" 
          element={
            isAuthenticated ? 
            <Chat onLogout={handleLogout} theme={theme} toggleTheme={toggleTheme} /> : 
            <Navigate to="/login" />
          } 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
