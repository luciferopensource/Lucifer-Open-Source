import React, { useState } from 'react';
import { BookOpen, Copy, Check, Cpu } from 'lucide-react';
import { documentationSections } from '../../data/documentation';

export const DocumentationSection: React.FC = () => {
  const [activeGuideId, setActiveGuideId] = useState(documentationSections[0].id);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const activeGuide = documentationSections.find(g => g.id === activeGuideId) || documentationSections[0];

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section id="docs" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <BookOpen size={14} />
            <span>// ARCHITECTURE MANUAL</span>
          </div>
          <h2 className="section-title">
            Deployment &amp; <span className="gradient-text">Documentation</span>
          </h2>
          <p className="section-desc">
            Complete technical instructions for deploying Lucifer Open Source utilities, setting up Telegram MTProto API tokens, and self-hosting services.
          </p>
        </div>

        {/* Two-Column Documentation Reader */}
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2rem', alignItems: 'start' }}>
          {/* Left: Guide Navigation Sidebar */}
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <h4 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.08em' }}>
              Guides &amp; Playbooks
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {documentationSections.map((guide) => (
                <button
                  key={guide.id}
                  onClick={() => setActiveGuideId(guide.id)}
                  style={{
                    textAlign: 'left',
                    padding: '0.75rem 0.9rem',
                    borderRadius: 'var(--radius-md)',
                    background: activeGuideId === guide.id ? 'rgba(255, 42, 95, 0.15)' : 'transparent',
                    border: activeGuideId === guide.id ? '1px solid rgba(255, 42, 95, 0.4)' : '1px solid transparent',
                    color: activeGuideId === guide.id ? '#ffffff' : 'var(--text-secondary)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{guide.title}</div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: activeGuideId === guide.id ? 'var(--accent-crimson)' : 'var(--text-muted)' }}>
                    {guide.badge}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Active Guide Content View */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            {/* Guide Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-brand">{activeGuide.badge}</span>
            </div>

            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              {activeGuide.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              {activeGuide.summary}
            </p>

            {/* Prerequisites */}
            <div style={{ background: 'rgba(5, 8, 14, 0.65)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '2.5rem' }}>
              <h4 style={{ fontSize: '0.825rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '0.75rem', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Cpu size={14} />
                <span>Prerequisites &amp; Environment</span>
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {activeGuide.requirements.map((req, idx) => (
                  <li key={idx} style={{ color: '#cbd5e1', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#00f0ff' }}>&bull;</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps & Code Snippets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {activeGuide.steps.map((step, idx) => (
                <div key={idx}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                    {step.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                    {step.description}
                  </p>

                  {step.code && (
                    <div style={{ position: 'relative' }}>
                      <pre className="code-block">
                        <code>{step.code}</code>
                      </pre>
                      <button
                        onClick={() => handleCopyCode(step.code!, idx)}
                        style={{
                          position: 'absolute',
                          top: '1.5rem',
                          right: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.35rem 0.65rem',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: 'var(--radius-sm)',
                          color: copiedIndex === idx ? '#34d399' : '#e2e8f0',
                          cursor: 'pointer',
                          transition: 'all var(--transition-fast)'
                        }}
                        aria-label="Copy snippet to clipboard"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check size={12} />
                            <span>COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>COPY</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
