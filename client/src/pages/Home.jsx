import { Link } from 'react-router-dom'
import { MessageCircle, Users, Video, Globe, Zap, Shield, Star, Mail, Github, Linkedin } from 'lucide-react'
import ThemeToggle from '../components/ThemeToggle'
import './Home.css'

function Home({ theme, toggleTheme }) {
  const features = [
    {
      icon: <MessageCircle size={32} />,
      title: 'Real-time Chat',
      description: 'Connect with friends instantly with lightning-fast messaging'
    },
    {
      icon: <Video size={32} />,
      title: 'Watch Together',
      description: 'Stream YouTube, Hotstar, Netflix together in sync'
    },
    {
      icon: <Users size={32} />,
      title: 'Communities',
      description: 'Create and manage communities with invite-only groups'
    },
    {
      icon: <Globe size={32} />,
      title: 'Business Tools',
      description: 'Zoom meetings, Google Sheets, Word collaboration'
    },
    {
      icon: <Zap size={32} />,
      title: 'Play Games',
      description: 'Enjoy multiplayer games with friends in real-time'
    },
    {
      icon: <Shield size={32} />,
      title: 'Secure & Private',
      description: 'End-to-end encryption for all your conversations'
    }
  ]

  const plans = [
    {
      name: 'Free Trial',
      price: 'Free',
      duration: '7 days',
      features: [
        'Up to 5 friends',
        'Basic chat features',
        'Limited watch together',
        '2 communities max'
      ]
    },
    {
      name: 'Basic',
      price: '$5',
      duration: 'per month',
      features: [
        'Unlimited friends',
        'All chat features',
        'Watch together unlimited',
        '10 communities',
        'Basic business tools'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$10',
      duration: 'per month',
      features: [
        'Everything in Basic',
        'Unlimited communities',
        'Advanced business tools',
        'Priority support',
        'Custom themes',
        'HD streaming quality'
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      text: 'Knot has transformed how I collaborate with my team. The watch together feature is a game-changer!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Student',
      text: 'Perfect for study groups! We can share documents, have video calls, and chat all in one place.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Business Owner',
      text: 'The business tools integration makes remote work seamless. Highly recommend for any team!',
      rating: 5
    }
  ]

  const creators = [
    {
      name: 'Divya Sreelekha',
      role: 'Team Lead',
      description: 'Passionate about creating seamless user experiences and innovative communication platforms.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'divya@knot.app'
      }
    },
    {
      name: 'Kavya',
      role: 'Developer',
      description: 'Expert in building scalable backend systems and ensuring top-notch security for all communications.',
      social: {
        github: '#',
        linkedin: '#',
        email: 'kavya@knot.app'
      }
    }
  ]

  return (
    <div className="home-page">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content fade-in">
          <div className="logo-container">
            <MessageCircle size={60} className="logo-icon" />
            <h1 className="logo-text">Knot</h1>
          </div>
          <h2 className="hero-title">Connect Everyone, Everywhere</h2>
          <p className="hero-subtitle">
            Chat, collaborate, and create memorable experiences with friends and colleagues. 
            All your communication needs in one beautiful platform.
          </p>
          <div className="hero-buttons">
            <Link to="/get-started" className="cta-button primary">
              Get Started
              <Zap size={20} />
            </Link>
            <a href="#features" className="cta-button secondary">
              Explore Features
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <MessageCircle size={40} />
            <p>Real-time Chat</p>
          </div>
          <div className="floating-card card-2">
            <Video size={40} />
            <p>Watch Together</p>
          </div>
          <div className="floating-card card-3">
            <Users size={40} />
            <p>Communities</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">Everything you need to stay connected</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscriptions Section */}
      <section id="subscriptions" className="subscriptions-section">
        <div className="container">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">Flexible pricing for everyone</p>
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`plan-card card ${plan.popular ? 'popular' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="duration">/{plan.duration}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Star size={16} className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/get-started" className="plan-button">
                  {plan.price === 'Free' ? 'Start Free Trial' : 'Subscribe Now'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Users Say</h2>
          <p className="section-subtitle">Trusted by thousands worldwide</p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="var(--accent-primary)" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creators Section */}
      <section id="contact" className="creators-section">
        <div className="container">
          <h2 className="section-title">Meet The Creators</h2>
          <p className="section-subtitle">The minds behind Knot</p>
          <div className="creators-grid">
            {creators.map((creator, index) => (
              <div 
                key={index} 
                className="creator-card card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="creator-avatar">
                  <Users size={60} />
                </div>
                <h3>{creator.name}</h3>
                <p className="creator-role">{creator.role}</p>
                <p className="creator-description">{creator.description}</p>
                <div className="creator-social">
                  <a href={creator.social.github} className="social-link">
                    <Github size={20} />
                  </a>
                  <a href={creator.social.linkedin} className="social-link">
                    <Linkedin size={20} />
                  </a>
                  <a href={`mailto:${creator.social.email}`} className="social-link">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <MessageCircle size={40} />
              <h3>Knot</h3>
              <p>Connect Everyone, Everywhere</p>
            </div>
            <div className="footer-links">
              <div>
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#subscriptions">Pricing</a>
                <a href="/get-started">Get Started</a>
              </div>
              <div>
                <h4>Company</h4>
                <a href="#contact">About Us</a>
                <a href="#contact">Contact</a>
                <a href="#">Privacy Policy</a>
              </div>
              <div>
                <h4>Support</h4>
                <a href="#">Help Center</a>
                <a href="#">Terms of Service</a>
                <a href="#contact">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Knot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
