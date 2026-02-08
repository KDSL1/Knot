import { Users, Plus, Settings as SettingsIcon, Bell } from 'lucide-react'
import './CommunityView.css'

function CommunityView() {
  const communities = [
    {
      id: 1,
      name: 'Tech Enthusiasts',
      members: 124,
      icon: '💻',
      groups: ['General Discussion', 'Resources', 'Events']
    },
    {
      id: 2,
      name: 'Gaming Squad',
      members: 45,
      icon: '🎮',
      groups: ['General', 'Tournament Planning', 'Game Reviews']
    },
    {
      id: 3,
      name: 'Book Club',
      members: 78,
      icon: '📚',
      groups: ['Current Reads', 'Recommendations', 'Authors']
    }
  ]

  return (
    <div className="community-view">
      <div className="community-header">
        <h1>Communities</h1>
        <button className="create-community-btn">
          <Plus size={20} />
          Create Community
        </button>
      </div>

      <div className="communities-container">
        {communities.map((community) => (
          <div key={community.id} className="community-card card">
            <div className="community-card-header">
              <div className="community-icon">{community.icon}</div>
              <div className="community-info">
                <h2>{community.name}</h2>
                <p><Users size={16} /> {community.members} members</p>
              </div>
              <div className="community-actions">
                <button className="icon-btn-small">
                  <Bell size={20} />
                </button>
                <button className="icon-btn-small">
                  <SettingsIcon size={20} />
                </button>
              </div>
            </div>
            
            <div className="community-groups">
              <h3>Groups</h3>
              {community.groups.map((group, index) => (
                <div key={index} className="group-item">
                  <div className="group-icon">#</div>
                  <span>{group}</span>
                </div>
              ))}
            </div>
            
            <div className="community-card-footer">
              <button className="invite-btn">
                <Plus size={18} />
                Invite Members
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommunityView
