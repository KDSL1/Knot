import { useState } from 'react'
import { Search, Plus, MoreVertical, Send, Smile, Paperclip, Mic } from 'lucide-react'
import './ChatView.css'

function ChatView() {
  const [selectedChat, setSelectedChat] = useState(null)
  const [message, setMessage] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  
  const dummyChats = [
    {
      id: 1,
      name: 'John Doe',
      lastMessage: 'Hey! How are you doing?',
      time: '2:30 PM',
      unread: 3,
      online: true
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      lastMessage: 'Did you see the presentation?',
      time: '1:15 PM',
      unread: 0,
      online: true
    },
    {
      id: 3,
      name: 'Tech Team',
      lastMessage: 'Meeting at 4 PM',
      time: '12:45 PM',
      unread: 5,
      online: false,
      isGroup: true
    },
    {
      id: 4,
      name: 'Mike Johnson',
      lastMessage: 'Thanks for your help!',
      time: 'Yesterday',
      unread: 0,
      online: false
    }
  ]
  
  const dummyMessages = [
    {
      id: 1,
      text: 'Hey! How are you doing?',
      sent: false,
      time: '2:25 PM'
    },
    {
      id: 2,
      text: 'I\'m doing great! Thanks for asking.',
      sent: true,
      time: '2:26 PM'
    },
    {
      id: 3,
      text: 'Want to catch up this weekend?',
      sent: false,
      time: '2:28 PM'
    },
    {
      id: 4,
      text: 'Sure! That sounds perfect. Let\'s meet at the usual place.',
      sent: true,
      time: '2:30 PM'
    }
  ]
  
  const filteredChats = dummyChats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  
  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim()) {
      console.log('Sending message:', message)
      setMessage('')
    }
  }
  
  return (
    <div className="chat-view">
      {/* Chat List */}
      <div className="chat-list-panel">
        <div className="chat-list-header">
          <h2>Chats</h2>
          <button className="icon-btn" title="New Chat">
            <Plus size={24} />
          </button>
        </div>
        
        <div className="chat-search">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search chats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="chat-list">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${selectedChat?.id === chat.id ? 'active' : ''}`}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="chat-avatar">
                {chat.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                {chat.online && <span className="online-indicator"></span>}
              </div>
              <div className="chat-info">
                <div className="chat-top">
                  <h3>{chat.name}</h3>
                  <span className="chat-time">{chat.time}</span>
                </div>
                <div className="chat-bottom">
                  <p className="chat-preview">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="unread-badge">{chat.unread}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Chat Window */}
      <div className="chat-window-panel">
        {selectedChat ? (
          <>
            <div className="chat-window-header">
              <div className="chat-header-info">
                <div className="chat-avatar">
                  {selectedChat.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  {selectedChat.online && <span className="online-indicator"></span>}
                </div>
                <div>
                  <h3>{selectedChat.name}</h3>
                  <span className="status-text">
                    {selectedChat.online ? 'Online' : 'Last seen recently'}
                  </span>
                </div>
              </div>
              <div className="chat-header-actions">
                <button className="icon-btn">
                  <Search size={20} />
                </button>
                <button className="icon-btn">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
            
            <div className="chat-messages">
              {dummyMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message ${msg.sent ? 'sent' : 'received'}`}
                >
                  <div className="message-bubble">
                    <p>{msg.text}</p>
                    <span className="message-time">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <form className="chat-input-area" onSubmit={handleSendMessage}>
              <button type="button" className="icon-btn">
                <Smile size={24} />
              </button>
              <button type="button" className="icon-btn">
                <Paperclip size={24} />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {message.trim() ? (
                <button type="submit" className="send-btn">
                  <Send size={24} />
                </button>
              ) : (
                <button type="button" className="icon-btn">
                  <Mic size={24} />
                </button>
              )}
            </form>
          </>
        ) : (
          <div className="no-chat-selected">
            <div className="empty-state">
              <div className="empty-icon">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="80" fill="var(--accent-primary)" opacity="0.1"/>
                  <path d="M60 90 L90 120 L140 70" stroke="var(--accent-primary)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>Welcome to Knot</h2>
              <p>Select a chat to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatView
