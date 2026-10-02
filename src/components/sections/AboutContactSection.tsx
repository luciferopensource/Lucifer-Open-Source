import React from 'react';
import { Shield, Lock, Zap, Send, Mail, ExternalLink, HeartHandshake } from 'lucide-react';
import { GithubIcon, GitlabIcon } from '../ui/Icons';
import { siteConfig } from '../../data/siteConfig';

export const AboutContactSection: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Shield size={14} />
            <span>// MANIFESTO &amp; COMMUNITY</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Lucifer Open Source</span>
          </h2>
          <p className="section-desc">
            An independent engineering collective dedicated to building decentralized automation, high-performance media pipelines, and sovereign software.
          </p>
        </div>

        {/* Core Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem', marginBottom: '4.5rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'rgba(255, 42, 95, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff2a5f', marginBottom: '1.25rem' }}>
              <Lock size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.65rem' }}>
              Zero-Telemetry Sovereignty
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
              All bots, sync utilities, and streaming bridges are engineered to run self-hosted. Credentials, session keys, and media streams never transit through third-party telemetry servers.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'rgba(0, 240, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f0ff', marginBottom: '1.25rem' }}>
              <Zap size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.65rem' }}>
              High-Throughput Concurrency
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
              Built with asynchronous IO, multi-worker session pools, and hardware-accelerated transcoding pipelines to maximize bandwidth and saturate available hardware.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a855f7', marginBottom: '1.25rem' }}>
              <HeartHandshake size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.65rem' }}>
              100% Free &amp; Open Source
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
              Every line of code is published under permissive open-source licenses (MIT/GPLv3). Fork, audit, extend, and deploy without arbitrary restrictions or hidden paywalls.
            </p>
          </div>
        </div>

        {/* Community & Contact Channels */}
        <div id="contact">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              Connect with the <span className="gradient-text-cyan">Network</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Join official Telegram discussion channels, report issues, or contribute to upcoming releases.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', maxWidth: '1080px', margin: '0 auto' }}>
            {/* Telegram Channel */}
            <a 
              href={siteConfig.telegramChannel} 
              target="_blank" 
              rel="noreferrer"
              className="glass-card"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'rgba(0, 240, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f0ff' }}>
                  <Send size={20} />
                </div>
                <ExternalLink size={16} color="var(--text-muted)" />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
                Telegram Broadcast
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem', flexGrow: 1 }}>
                Instant notifications on bot releases, code updates, and service announcements.
              </p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00f0ff' }}>
                @Lucifer_Open_Source &rarr;
              </span>
            </a>

            {/* Telegram Group */}
            <a 
              href={siteConfig.telegramGroup} 
              target="_blank" 
              rel="noreferrer"
              className="glass-card"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'rgba(168, 85, 247, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a855f7' }}>
                  <Send size={20} />
                </div>
                <ExternalLink size={16} color="var(--text-muted)" />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
                Community Discussion
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem', flexGrow: 1 }}>
                Peer support, setup assistance, feature brainstorming, and developer talk.
              </p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#a855f7' }}>
                @Lucifer_Open_Source_Chat &rarr;
              </span>
            </a>

            {/* GitHub Organization */}
            <a 
              href={siteConfig.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                  <GithubIcon size={20} />
                </div>
                <ExternalLink size={16} color="var(--text-muted)" />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
                GitHub Organization
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem', flexGrow: 1 }}>
                Source code repositories, pull requests, issue trackers, and releases.
              </p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#ffffff' }}>
                github.com/luciferopensource &rarr;
              </span>
            </a>

            {/* GitLab Profile */}
            <a 
              href={siteConfig.gitlabUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'rgba(252, 109, 38, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fc6d26' }}>
                  <GitlabIcon size={20} />
                </div>
                <ExternalLink size={16} color="var(--text-muted)" />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
                GitLab Profile
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem', flexGrow: 1 }}>
                Mirrored repositories, primary CI/CD pipelines, and core development branches.
              </p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#fc6d26' }}>
                gitlab.com/luciferopensource &rarr;
              </span>
            </a>

            {/* Direct Email */}
            <a 
              href={`mailto:${siteConfig.contactEmail}`}
              className="glass-card"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'rgba(255, 42, 95, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff2a5f' }}>
                  <Mail size={20} />
                </div>
                <ExternalLink size={16} color="var(--text-muted)" />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
                Direct Contact
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem', flexGrow: 1 }}>
                Security vulnerability disclosures, partnerships, or direct technical questions.
              </p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#ff2a5f' }}>
                {siteConfig.contactEmail} &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
