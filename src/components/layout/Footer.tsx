import React from 'react';
import { Terminal, Send, ArrowUp, ShieldCheck } from 'lucide-react';
import { GithubIcon, GitlabIcon } from '../ui/Icons';
import { siteConfig } from '../../data/siteConfig';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div className="nav-brand" style={{ marginBottom: '1rem' }}>
              <div className="nav-logo-icon">
                <Terminal size={18} color="#ff2a5f" />
              </div>
              <span>LUCIFER</span>
              <span className="nav-brand-tag">OPEN SOURCE</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem', maxWidth: '340px' }}>
              Engineering high-throughput Telegram automation, media synchronization engines, and sovereign developer tools.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} className="badge badge-active">
              <span className="beacon-dot"></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Projects Navigation */}
          <div>
            <h4 className="footer-col-title">Architecture</h4>
            <ul className="footer-links">
              <li><button className="footer-link" onClick={() => onNavigate('projects')}>All Projects</button></li>
              <li><button className="footer-link" onClick={() => onNavigate('bots')}>Telegram Bots</button></li>
              <li><button className="footer-link" onClick={() => onNavigate('media')}>Media & Streaming</button></li>
              <li><button className="footer-link" onClick={() => onNavigate('infra')}>Cloud & Infrastructure</button></li>
              <li><button className="footer-link" onClick={() => onNavigate('tools')}>Tools & Utilities</button></li>
            </ul>
          </div>

          {/* Documentation & Resources */}
          <div>
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links">
              <li><button className="footer-link" onClick={() => onNavigate('docs')}>Quickstart Guide</button></li>
              <li><button className="footer-link" onClick={() => onNavigate('docs')}>Telegram API Setup</button></li>
              <li><button className="footer-link" onClick={() => onNavigate('docs')}>Docker Deployment</button></li>
              <li><button className="footer-link" onClick={() => onNavigate('changelog')}>Release Changelog</button></li>
              <li><button className="footer-link" onClick={() => onNavigate('about')}>Manifesto & Bio</button></li>
            </ul>
          </div>

          {/* Social & Community */}
          <div>
            <h4 className="footer-col-title">Community</h4>
            <ul className="footer-links">
              <li>
                <a href={siteConfig.telegramChannel} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Send size={14} color="#00f0ff" /> Telegram Channel
                </a>
              </li>
              <li>
                <a href={siteConfig.telegramGroup} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Send size={14} color="#a855f7" /> Community Chat
                </a>
              </li>
              <li>
                <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <GithubIcon size={14} /> GitHub Organization
                </a>
              </li>
              <li>
                <a href={siteConfig.gitlabUrl} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <GitlabIcon size={14} /> GitLab Profile
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`} className="footer-link">
                  Direct Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={16} color="#10b981" />
            <span>&copy; {CURRENT_YEAR} Lucifer Open Source. Free & Sovereign Software under MIT / GPLv3.</span>
          </div>

          <button 
            onClick={scrollToTop} 
            className="btn btn-ghost btn-sm"
            style={{ borderRadius: 'var(--radius-full)' }}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
