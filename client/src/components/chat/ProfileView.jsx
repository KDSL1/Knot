import { User, Mail, Calendar, MapPin, Edit2, Camera } from 'lucide-react'
import './ProfileView.css'

function ProfileView({ username }) {
  const profileData = {
    username: username,
    email: 'user@example.com',
    joinDate: 'January 2025',
    location: 'New York, USA',
    bio: 'Passionate about technology and connecting with people around the world.',
    stats: {
      friends: 124,
      communities: 8,
      messages: 5432
    }
  }

  return (
    <div className="profile-view">
      <div className="profile-header card">
        <div className="profile-cover">
          <div className="cover-gradient"></div>
        </div>
        
        <div className="profile-main">
          <div className="profile-avatar-section">
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar">
                {username.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
              <button className="avatar-edit-btn" title="Change Avatar">
                <Camera size={20} />
              </button>
            </div>
          </div>
          
          <div className="profile-info">
            <div className="profile-name-section">
              <h1>{profileData.username}</h1>
              <button className="edit-profile-btn">
                <Edit2 size={18} />
                Edit Profile
              </button>
            </div>
            <p className="profile-bio">{profileData.bio}</p>
          </div>
        </div>
        
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{profileData.stats.friends}</span>
            <span className="stat-label">Friends</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{profileData.stats.communities}</span>
            <span className="stat-label">Communities</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{profileData.stats.messages}</span>
            <span className="stat-label">Messages</span>
          </div>
        </div>
      </div>
      
      <div className="profile-details-grid">
        <div className="profile-details card">
          <h2>Personal Information</h2>
          
          <div className="detail-item">
            <div className="detail-icon">
              <User size={20} />
            </div>
            <div className="detail-content">
              <span className="detail-label">Username</span>
              <span className="detail-value">{profileData.username}</span>
            </div>
          </div>
          
          <div className="detail-item">
            <div className="detail-icon">
              <Mail size={20} />
            </div>
            <div className="detail-content">
              <span className="detail-label">Email</span>
              <span className="detail-value">{profileData.email}</span>
            </div>
          </div>
          
          <div className="detail-item">
            <div className="detail-icon">
              <Calendar size={20} />
            </div>
            <div className="detail-content">
              <span className="detail-label">Member Since</span>
              <span className="detail-value">{profileData.joinDate}</span>
            </div>
          </div>
          
          <div className="detail-item">
            <div className="detail-icon">
              <MapPin size={20} />
            </div>
            <div className="detail-content">
              <span className="detail-label">Location</span>
              <span className="detail-value">{profileData.location}</span>
            </div>
          </div>
        </div>
        
        <div className="profile-activity card">
          <h2>Recent Activity</h2>
          
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div>
                <p className="activity-text">Joined Tech Enthusiasts community</p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div>
                <p className="activity-text">Started a video call with John Doe</p>
                <span className="activity-time">5 hours ago</span>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div>
                <p className="activity-text">Created Gaming Squad community</p>
                <span className="activity-time">Yesterday</span>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div>
                <p className="activity-text">Updated profile picture</p>
                <span className="activity-time">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileView
