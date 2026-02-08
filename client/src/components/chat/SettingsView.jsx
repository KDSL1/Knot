import { Bell, Lock, User, Palette, Globe, HelpCircle, Shield } from 'lucide-react'
import './SettingsView.css'

function SettingsView({ theme, toggleTheme }) {
  const settingsSections = [
    {
      title: 'Appearance',
      icon: <Palette size={24} />,
      settings: [
        {
          name: 'Dark Mode',
          description: 'Toggle between light and dark theme',
          type: 'toggle',
          value: theme === 'dark',
          action: toggleTheme
        }
      ]
    },
    {
      title: 'Notifications',
      icon: <Bell size={24} />,
      settings: [
        {
          name: 'Message Notifications',
          description: 'Receive notifications for new messages',
          type: 'toggle',
          value: true
        },
        {
          name: 'Call Notifications',
          description: 'Get notified about incoming calls',
          type: 'toggle',
          value: true
        }
      ]
    },
    {
      title: 'Privacy & Security',
      icon: <Shield size={24} />,
      settings: [
        {
          name: 'Two-Factor Authentication',
          description: 'Add an extra layer of security',
          type: 'button',
          buttonText: 'Enable'
        },
        {
          name: 'Blocked Users',
          description: 'Manage your blocked contacts',
          type: 'button',
          buttonText: 'Manage'
        }
      ]
    },
    {
      title: 'Account',
      icon: <User size={24} />,
      settings: [
        {
          name: 'Change Password',
          description: 'Update your account password',
          type: 'button',
          buttonText: 'Change'
        },
        {
          name: 'Email Address',
          description: 'Update your email address',
          type: 'button',
          buttonText: 'Update'
        }
      ]
    }
  ]

  return (
    <div className="settings-view">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account and preferences</p>
      </div>

      <div className="settings-content">
        {settingsSections.map((section, index) => (
          <div key={index} className="settings-section card">
            <div className="section-header">
              <div className="section-icon">{section.icon}</div>
              <h2>{section.title}</h2>
            </div>
            
            <div className="settings-list">
              {section.settings.map((setting, idx) => (
                <div key={idx} className="setting-item">
                  <div className="setting-info">
                    <h3>{setting.name}</h3>
                    <p>{setting.description}</p>
                  </div>
                  
                  {setting.type === 'toggle' && (
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={setting.value}
                        onChange={setting.action}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  )}
                  
                  {setting.type === 'button' && (
                    <button className="setting-button">
                      {setting.buttonText}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SettingsView
