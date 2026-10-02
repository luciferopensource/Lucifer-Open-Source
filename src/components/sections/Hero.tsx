import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Send, Cpu, Activity, ShieldCheck, Zap } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "INITIALIZING LUCIFER OPEN SOURCE TELEMETRY...",
    "TELETHON MULTI-WORKER POOL: 4 SESSIONS ACTIVE (DC4, PING 16ms)",
    "OTT POSTER BOT: 4K CANVAS ENGINE READY (TMDB V3 CONNECTED)",
    "TELESTREAM GATEWAY: HTTP/2 RANGE SERVER ONLINE (0 DROPPED FRAMES)",
    "SERVER SENTINEL: KERNEL WATCHDOG ACTIVE - ALL SERVICES HEALTHY"
  ]);

  useEffect(() => {
    const liveFeeds = [
      "SYNC DAEMON: Mirrored batch #8491 (4.2GB transferred)",
      "CANVAS RENDERER: Generated 4K banner poster for release #192",
      "STREAM BRIDGE: Client #8 connected via range request (60fps)",
      "INTEGRITY CHECK: Chunked SHA-256 verification passed",
      "FLOOD-WAIT SHIELD: Zero rate-limits detected across worker pool"
    ];

    const interval = setInterval(() => {
      setTerminalLogs(prev => {
        const nextFeed = liveFeeds[Math.floor(Math.random() * liveFeeds.length)];
        const time = new Date().toLocaleTimeString('en-US', { hour12: false });
        const newLog = `[${time}] ${nextFeed}`;
        return [...prev.slice(1), newLog];
      });
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-wrapper">
      <div className="container">
        {/* Status Pill Beacon */}
        <div className="hero-beacon">
          <span className="beacon-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff2a5f', boxShadow: '0 0 10px #ff2a5f' }}></span>
          <span style={{ color: '#fff', fontWeight: 600 }}>LUCIFER // CORE v2.5</span>
          <span style={{ color: 'var(--text-muted)' }}>|</span>
          <span style={{ color: '#00f0ff' }}>HIGH-THROUGHPUT AUTOMATION</span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title">
          Architecting Sovereign <br />
          <span className="gradient-text">Open-Source Tools</span> &amp; <br />
          <span className="gradient-text-cyan">Telegram Automation</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          {siteConfig.subtagline}
        </p>

        {/* CTA Button Group */}
        <div className="hero-cta-group">
          <button 
            className="btn btn-primary"
            onClick={() => onNavigate('projects')}
          >
            <span>Explore Projects</span>
            <ArrowRight size={17} />
          </button>

          <button 
            className="btn btn-ghost"
            onClick={() => onNavigate('bots')}
          >
            <Bot size={17} color="#00f0ff" />
            <span>Telegram Bots</span>
          </button>

          <a 
            href={siteConfig.telegramChannel} 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-cyan"
          >
            <Send size={17} />
            <span>Official Channel</span>
          </a>
        </div>

        {/* Live Terminal Telemetry Box */}
        <div 
          className="glass-card" 
          style={{ 
            maxWidth: '820px', 
            margin: '0 auto', 
            textAlign: 'left',
            padding: '1.25rem 1.5rem',
            background: 'rgba(8, 11, 19, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem', paddingBottom: '0.65rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                lucifer-node-01 ~ telemetry-daemon
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#34d399' }}>
              <Activity size={13} />
              <span>LIVE CLUSTER</span>
            </div>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.8 }}>
            {terminalLogs.map((log, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: '#ff2a5f' }}>&gt;</span>
                <span style={{ color: index === terminalLogs.length - 1 ? '#00f0ff' : '#cbd5e1' }}>
                  {log}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Telemetry Metric Row */}
        <div className="telemetry-row" style={{ maxWidth: '980px', margin: '3rem auto 0 auto' }}>
          {siteConfig.stats.map((stat, i) => (
            <div key={i} className="telemetry-card">
              <div className="telemetry-label">
                <span>{stat.label}</span>
                {i === 0 && <Cpu size={14} color="#ff2a5f" />}
                {i === 1 && <Activity size={14} color="#34d399" />}
                {i === 2 && <Zap size={14} color="#00f0ff" />}
                {i === 3 && <ShieldCheck size={14} color="#a855f7" />}
              </div>
              <div className="telemetry-value">{stat.value}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                {stat.helper}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
