import { Link } from 'react-router-dom'
import { LogIn, UserPlus, ArrowRight } from 'lucide-react'
import ThemeToggle from '../components/ThemeToggle'
import './GetStarted.css'

function GetStarted({ theme, toggleTheme }) {
  return (
    <div className="get-started-page">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      <div className="get-started-container">
        <div className="get-started-content fade-in">
          <h1>Welcome to Knot</h1>
          <p className="subtitle">Choose how you'd like to continue</p>
          
          <div className="options-container">
            <Link to="/login" className="option-card card">
              <div className="option-icon">
                <LogIn size={48} />
              </div>
              <h2>Sign In</h2>
              <p>Already have an account? Sign in to continue</p>
              <div className="option-arrow">
                <ArrowRight size={24} />
              </div>
            </Link>
            
            <Link to="/register" className="option-card card">
              <div className="option-icon">
                <UserPlus size={48} />
              </div>
              <h2>Create Account</h2>
              <p>New to Knot? Create your account and get started</p>
              <div className="option-arrow">
                <ArrowRight size={24} />
              </div>
            </Link>
          </div>
          
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
