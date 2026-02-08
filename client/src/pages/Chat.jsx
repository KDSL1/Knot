import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { 
  MessageCircle, 
  Users, 
  Activity, 
  Phone, 
  Settings, 
  User, 
  LogOut,
  Menu,
  X
} from 'lucide-react'
import ThemeToggle from '../components/ThemeToggle'
import ChatView from '../components/chat/ChatView'
import CommunityView from '../components/chat/CommunityView'
import ActivityView from '../components/chat/ActivityView'
import CallLogView from '../components/chat/CallLogView'
import SettingsView from '../components/chat/SettingsView'
import ProfileView from '../components/chat/ProfileView'
import './Chat.css'

function Chat({ onLogout, theme, toggleTheme }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [showLogoutAlert, setShowLogoutAlert] = useState(false)
  
  const username = localStorage.getItem('username') || 'User'

  const navItems = [
    { path: '/chat', icon: MessageCircle, label: 'Chat' },
    { path: '/chat/community', icon: Users, label: 'Community' },
    { path: '/chat/activity', icon: Activity, label: 'Activity' },
    { path: '/chat/call-log', icon: Phone, label: 'Call Log' },
    { path: '/chat/settings', icon: Settings, label: 'Settings' },
    { path: '/chat/profile', icon: User, label: 'Profile' }
  ]

  const handleLogout = () => {
    setShowLogoutAlert(true)
  }

  const confirmLogout = () => {
    onLogout()
    navigate('/login')
  }

  const cancelLogout = () => {
    setShowLogoutAlert(false)
  }

  const isActive = (path) => {
    if (path === '/chat') {
      return location.pathname === '/chat' || location.pathname === '/chat/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="chat-page">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      {/* Sidebar */}
      <aside className={`chat-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo-section">
            <MessageCircle size={32} className="sidebar-logo" />
            {isSidebarOpen && <h2>Knot</h2>}
          </div>
          <button 
            className="sidebar-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div className="sidebar-user">
          <div className="user-avatar">
            <User size={24} />
          </div>
          {isSidebarOpen && (
            <div className="user-info">
              <h3>{username}</h3>
              <span className="user-status">Online</span>
            </div>
          )}
        </div>
        
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <item.icon size={24} />
              {isSidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
        
        <button className="nav-item logout-btn" onClick={handleLogout}>
          <LogOut size={24} />
          {isSidebarOpen && <span>Logout</span>}
        </button>
      </aside>
      
      {/* Main Content */}
      <main className="chat-main">
        <Routes>
          <Route index element={<ChatView />} />
          <Route path="community" element={<CommunityView />} />
          <Route path="activity" element={<ActivityView />} />
          <Route path="call-log" element={<CallLogView />} />
          <Route path="settings" element={<SettingsView theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="profile" element={<ProfileView username={username} />} />
        </Routes>
      </main>
      
      {/* Logout Confirmation Modal */}
      {showLogoutAlert && (
        <div className="modal-overlay" onClick={cancelLogout}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to logout?</p>
            <div className="modal-actions">
              <button className="modal-btn cancel" onClick={cancelLogout}>
                Cancel
              </button>
              <button className="modal-btn confirm" onClick={confirmLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chat
