import React, { useState, useEffect } from 'react';
import { Terminal, Send, Menu, X } from 'lucide-react';
import { GithubIcon, GitlabIcon } from '../ui/Icons';
import { siteConfig } from '../../data/siteConfig';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'bots', label: 'Telegram Bots' },
    { id: 'media', label: 'Media & Streaming' },
    { id: 'infra', label: 'Infrastructure' },
    { id: 'tools', label: 'Tools' },
    { id: 'docs', label: 'Docs' },
    { id: 'changelog', label: 'Changelog' },
    { id: 'about', label: 'About' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav 
        className="navbar" 
        style={{
          boxShadow: isScrolled ? '0 12px 35px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 42, 95, 0.15)' : undefined
        }}
      >
        {/* Brand Logo & Title */}
        <button 
          className="nav-brand" 
          onClick={() => handleNavClick('hero')}
          aria-label="Lucifer Open Source Home"
        >
          <div className="nav-logo-icon">
            <Terminal size={18} color="#ff2a5f" />
          </div>
          <span>LUCIFER</span>
          <span className="nav-brand-tag">OS</span>
        </button>

        {/* Desktop Navigation Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
          {/* Mobile view only social links */}
          {mobileMenuOpen && (
            <li style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a 
                href={siteConfig.telegramChannel} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-cyan btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Send size={14} /> Telegram Channel
              </a>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <a 
                  href={siteConfig.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-ghost btn-sm"
                  style={{ justifyContent: 'center' }}
                >
                  <GithubIcon size={14} /> GitHub
                </a>
                <a 
                  href={siteConfig.gitlabUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-ghost btn-sm"
                  style={{ justifyContent: 'center' }}
                >
                  <GitlabIcon size={14} /> GitLab
                </a>
              </div>
            </li>
          )}
        </ul>

        {/* Right CTA Actions */}
        <div className="nav-actions">
          <a
            href={siteConfig.telegramChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-cyan btn-sm"
            title="Join Official Telegram"
          >
            <Send size={14} />
            <span style={{ display: 'none', minWidth: '4.5rem' }}>Telegram</span>
            <span>Channel</span>
          </a>

          <a
            href={siteConfig.gitlabUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
            title="View GitLab Profile"
            aria-label="GitLab"
          >
            <GitlabIcon size={15} />
          </a>

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
            title="View GitHub Repositories"
            aria-label="GitHub"
          >
            <GithubIcon size={15} />
          </a>

          {/* Mobile hamburger button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
};
