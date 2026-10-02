import React from 'react';
import { X, Send, ExternalLink, BookOpen, CheckCircle, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigateToDocs: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNavigateToDocs }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2.25rem' }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: 'var(--text-secondary)',
            padding: '0.4rem',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)'
          }}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span className="badge badge-brand">{project.categoryLabel}</span>
          <span className="badge badge-active">
            <span className="beacon-dot"></span>
            {project.status.toUpperCase()}
          </span>
        </div>

        <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          {project.title}
        </h2>

        {/* Detailed Description */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
          {project.longDescription}
        </p>

        {/* Architectural Highlights */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '0.85rem', letterSpacing: '0.08em' }}>
            // Key Engineering Highlights
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.65rem' }}>
            {project.highlights.map((h, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#e2e8f0', fontSize: '0.9rem' }}>
                <CheckCircle size={15} color="#34d399" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>
            // Technology Stack
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tech-tag" style={{ fontSize: '0.8rem', padding: '0.3rem 0.65rem' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Clone Snippet Box */}
        {project.githubUrl && (
          <div style={{ marginBottom: '2rem' }}>
            <div className="code-block" style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Terminal size={14} color="#ff2a5f" />
                <span>git clone {project.githubUrl}.git</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary btn-sm"
            >
              <GithubIcon size={15} />
              <span>GitHub Repository</span>
            </a>
          )}

          {project.telegramUrl && (
            <a 
              href={project.telegramUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-cyan btn-sm"
            >
              <Send size={15} />
              <span>Launch / Channel</span>
            </a>
          )}

          {project.docsUrl && (
            <button 
              onClick={() => {
                onClose();
                onNavigateToDocs();
              }}
              className="btn btn-ghost btn-sm"
            >
              <BookOpen size={15} />
              <span>Setup Guide</span>
            </button>
          )}

          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-ghost btn-sm"
            >
              <ExternalLink size={15} />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
