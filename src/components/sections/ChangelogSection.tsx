import React from 'react';
import { History } from 'lucide-react';
import { changelogReleases } from '../../data/changelog';

export const ChangelogSection: React.FC = () => {
  return (
    <section id="changelog" className="section" style={{ background: 'rgba(7, 9, 15, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <History size={14} />
            <span>// EVOLUTION LOG</span>
          </div>
          <h2 className="section-title">
            Changelog &amp; <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-desc">
            A chronological timeline of feature releases, architectural upgrades, performance optimizations, and security patches.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Track Line */}
          <div 
            style={{
              position: 'absolute',
              top: '1rem',
              bottom: '1rem',
              left: '20px',
              width: '2px',
              background: 'linear-gradient(to bottom, #ff2a5f, #a855f7, #00f0ff, transparent)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {changelogReleases.map((rel, idx) => (
              <div key={idx} style={{ position: 'relative', paddingLeft: '54px' }}>
                {/* Timeline Node Point */}
                <div 
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '4px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#06070a',
                    border: '2px solid #ff2a5f',
                    boxShadow: '0 0 10px #ff2a5f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff2a5f' }} />
                </div>

                {/* Release Card */}
                <div className="glass-card" style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                        {rel.version}
                      </span>
                      <span className={`badge ${rel.badge === 'MAJOR' ? 'badge-brand' : 'badge-active'}`}>
                        {rel.badge}
                      </span>
                    </div>

                    <span style={{ fontSize: '0.825rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      {rel.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '1rem' }}>
                    {rel.title}
                  </h3>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {rel.highlights.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55 }}>
                        <span style={{ color: 'var(--accent-cyan)', marginTop: '0.15rem' }}>&gt;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
