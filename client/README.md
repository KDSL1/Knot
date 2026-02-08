# Knot - Chat Application

A modern, feature-rich chat application built with React and Vite.

## Features

- 🔐 **Authentication**: Login and Register with password strength indicator
- 💬 **Real-time Chat**: WhatsApp-like chat interface
- 👥 **Communities**: Create and manage group communities
- 🎮 **Activities**: Watch YouTube/Netflix together, play games, business tools
- 📞 **Call Logs**: Track audio and video calls
- ⚙️ **Settings**: Customize your experience
- 👤 **Profile Management**: View and edit your profile
- 🌓 **Theme Toggle**: Light and Dark mode support
- 🎯 **Enhanced Cursor**: High visibility cursor for better tracking

## Tech Stack

- React 18
- Vite 5
- React Router DOM
- Lucide React (Icons)
- Custom CSS with CSS Variables

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Deployment to Vercel

This project is optimized for Vercel deployment:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
knot/
├── src/
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatView.jsx         # WhatsApp-like chat interface
│   │   │   ├── CommunityView.jsx    # Community management
│   │   │   ├── ActivityView.jsx     # Activities like watch together
│   │   │   ├── CallLogView.jsx      # Call history
│   │   │   ├── SettingsView.jsx     # App settings
│   │   │   └── ProfileView.jsx      # User profile
│   │   ├── CursorTrail.jsx          # Enhanced cursor visibility
│   │   └── ThemeToggle.jsx          # Theme switcher
│   ├── pages/
│   │   ├── Home.jsx                 # Landing page
│   │   ├── GetStarted.jsx           # Onboarding page
│   │   ├── Login.jsx                # Login page with remember me
│   │   ├── Register.jsx             # Registration with password strength
│   │   └── Chat.jsx                 # Main chat interface with sidebar
│   ├── App.jsx                      # Main app component with routing
│   ├── index.css                    # Global styles and theme
│   └── main.jsx                     # App entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features Walkthrough

### User Flow
1. **Home Page**: Landing with features, pricing, testimonials, and contact
2. **Get Started**: Choose between Login or Register
3. **Login/Register**: 
   - Login with username, password, remember me option
   - Register with username, email, password with strength bar, confirm password
4. **Chat Interface**: Sidebar with navigation to:
   - Chat: WhatsApp-style messaging
   - Community: Create and manage communities with groups
   - Activity: Watch together, games, business tools (Zoom, Sheets, Word)
   - Call Log: Audio/video call history
   - Settings: Notifications, privacy, appearance
   - Profile: View stats and recent activity
5. **Logout**: Confirmation alert before logging out

### Theme System
- Light and Dark themes
- CSS variables for easy customization
- Persistent theme preference in localStorage
- Theme toggle button available on all pages

### Cursor Enhancement
- Custom SVG cursor with high visibility
- Animated cursor trail
- Different cursor styles for interactive elements
- Color-coded for better tracking

## Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent-primary: #7c3aed;
  --accent-secondary: #a78bfa;
  /* ... more variables */
}
```

### Fonts
Change fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributors

- **Divya Sreelekha** - Team Lead
- **Kavya** - Developer

---

Built with ❤️ using React and Vite
