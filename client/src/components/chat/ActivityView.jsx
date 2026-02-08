import { Video, Youtube, Gamepad2, FileText, Calendar, Users } from 'lucide-react'
import './ActivityView.css'

function ActivityView() {
  const activities = [
    {
      id: 1,
      icon: <Youtube size={32} />,
      title: 'Watch YouTube Together',
      description: 'Stream and watch YouTube videos with friends in sync',
      color: '#FF0000'
    },
    {
      id: 2,
      icon: <Video size={32} />,
      title: 'Streaming Platforms',
      description: 'Watch Hotstar, Netflix together with synchronized playback',
      color: '#7c3aed'
    },
    {
      id: 3,
      icon: <Gamepad2 size={32} />,
      title: 'Play Games',
      description: 'Enjoy multiplayer games with your friends',
      color: '#10b981'
    },
    {
      id: 4,
      icon: <Calendar size={32} />,
      title: 'Zoom Meetings',
      description: 'Schedule and join video conferences',
      color: '#2D8CFF'
    },
    {
      id: 5,
      icon: <FileText size={32} />,
      title: 'Google Sheets',
      description: 'Collaborate on spreadsheets in real-time',
      color: '#0F9D58'
    },
    {
      id: 6,
      icon: <FileText size={32} />,
      title: 'Word Documents',
      description: 'Edit documents together with your team',
      color: '#2B579A'
    }
  ]

  const activeRooms = [
    {
      id: 1,
      activity: 'YouTube Watch Party',
      host: 'Sarah',
      participants: 5,
      maxParticipants: 10
    },
    {
      id: 2,
      activity: 'Gaming Session',
      host: 'Mike',
      participants: 3,
      maxParticipants: 8
    }
  ]

  return (
    <div className="activity-view">
      <div className="activity-header">
        <h1>Activities</h1>
        <p>Connect and collaborate with friends</p>
      </div>

      <div className="activities-grid">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-card card">
            <div 
              className="activity-icon-wrapper"
              style={{ background: `linear-gradient(135deg, ${activity.color}20, ${activity.color}10)` }}
            >
              <div 
                className="activity-icon"
                style={{ color: activity.color }}
              >
                {activity.icon}
              </div>
            </div>
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
            <button className="activity-btn" style={{ '--btn-color': activity.color }}>
              Start Activity
            </button>
          </div>
        ))}
      </div>

      <div className="active-rooms-section">
        <h2>Active Rooms</h2>
        <div className="active-rooms-list">
          {activeRooms.length > 0 ? (
            activeRooms.map((room) => (
              <div key={room.id} className="room-card card">
                <div className="room-info">
                  <div className="room-icon">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3>{room.activity}</h3>
                    <p>Hosted by {room.host}</p>
                  </div>
                </div>
                <div className="room-meta">
                  <span className="participant-count">
                    {room.participants}/{room.maxParticipants} participants
                  </span>
                  <button className="join-btn">Join</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-rooms">
              <p>No active rooms at the moment</p>
              <span>Start an activity to create a room!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ActivityView
