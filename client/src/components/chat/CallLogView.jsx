import { Phone, Video, PhoneIncoming, PhoneOutgoing, PhoneMissed } from 'lucide-react'
import './CallLogView.css'

function CallLogView() {
  const callLogs = [
    {
      id: 1,
      name: 'John Doe',
      type: 'incoming',
      callType: 'video',
      time: '10:30 AM',
      duration: '15 min',
      date: 'Today'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      type: 'outgoing',
      callType: 'audio',
      time: '9:15 AM',
      duration: '8 min',
      date: 'Today'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      type: 'missed',
      callType: 'video',
      time: '8:45 AM',
      duration: 'Missed',
      date: 'Today'
    },
    {
      id: 4,
      name: 'Tech Team',
      type: 'incoming',
      callType: 'video',
      time: '5:30 PM',
      duration: '45 min',
      date: 'Yesterday'
    },
    {
      id: 5,
      name: 'Emily Davis',
      type: 'outgoing',
      callType: 'audio',
      time: '3:20 PM',
      duration: '12 min',
      date: 'Yesterday'
    }
  ]

  const getCallIcon = (type) => {
    switch(type) {
      case 'incoming':
        return <PhoneIncoming size={20} className="call-icon incoming" />
      case 'outgoing':
        return <PhoneOutgoing size={20} className="call-icon outgoing" />
      case 'missed':
        return <PhoneMissed size={20} className="call-icon missed" />
      default:
        return <Phone size={20} />
    }
  }

  return (
    <div className="call-log-view">
      <div className="call-log-header">
        <h1>Call Log</h1>
        <p>Your recent calls and video chats</p>
      </div>

      <div className="call-log-list">
        {callLogs.map((call) => (
          <div key={call.id} className="call-log-item card">
            <div className="call-avatar">
              {call.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
            
            <div className="call-info">
              <div className="call-name-row">
                <h3>{call.name}</h3>
                {call.callType === 'video' && <Video size={16} className="video-badge" />}
              </div>
              <div className="call-details">
                {getCallIcon(call.type)}
                <span className={`call-type ${call.type}`}>
                  {call.type === 'incoming' ? 'Incoming' : call.type === 'outgoing' ? 'Outgoing' : 'Missed'}
                </span>
                <span className="call-time">{call.time}</span>
              </div>
            </div>
            
            <div className="call-meta">
              <span className="call-duration">{call.duration}</span>
              <div className="call-actions">
                <button className="call-action-btn audio" title="Audio Call">
                  <Phone size={20} />
                </button>
                <button className="call-action-btn video" title="Video Call">
                  <Video size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CallLogView
