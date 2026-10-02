import React from 'react';
import { Send, Bot, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { telegramBots } from '../../data/telegramBots';

export const TelegramBotsSection: React.FC = () => {
  return (
    <section id="bots" className="section" style={{ background: 'rgba(8, 10, 16, 0.5)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-label">
            <Bot size={14} />
            <span>// TELEGRAM FLEET</span>
          </div>
          <h2 className="section-title">
            Autonomous <span className="gradient-text-cyan">Telegram Bots</span>
          </h2>
          <p className="section-desc">
            Production-hardened bots engineered for high-throughput media replication, instant poster generation, and streaming distribution.
          </p>
        </div>

        {/* Bot Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
          {telegramBots.map((bot) => (
            <div key={bot.id} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              {/* Bot Identity Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                    {bot.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>
                      {bot.handle}
                    </span>
                  </div>
                </div>

                <div className="badge badge-active">
                  <span className="beacon-dot"></span>
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Bot Purpose */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {bot.purpose}
              </p>

              {/* Bot Commands Quick Reference Table */}
              <div style={{ marginBottom: '1.5rem', background: 'rgba(5, 7, 12, 0.65)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.75rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-crimson)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  <Terminal size={13} />
                  <span>Supported Commands</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {bot.commands.map((cmd, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '0.75rem', fontSize: '0.8rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', padding: '0.1rem 0.35rem', borderRadius: '4px' }}>
                        {cmd.command}
                      </span>
                      <span style={{ color: 'var(--text-muted)', textAlign: 'right', flex: 1, fontSize: '0.78rem' }}>
                        {cmd.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features Bullets */}
              <div style={{ marginBottom: '1.75rem', flexGrow: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {bot.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={14} color="#10b981" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <a
                  href={bot.botUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-cyan btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Send size={15} />
                  <span>Launch on Telegram</span>
                </a>

                {bot.githubUrl && (
                  <a
                    href={bot.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost btn-sm"
                    title="View Source on GitHub"
                    aria-label="View Source on GitHub"
                  >
                    <GithubIcon size={15} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
