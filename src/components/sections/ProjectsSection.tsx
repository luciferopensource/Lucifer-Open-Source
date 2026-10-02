import React, { useState, useMemo } from 'react';
import { 
  Search, Bot, Sparkles, Radio, Video, Languages, 
  Server, ShieldAlert, Layers, Key, Cpu, 
  Send, Info 
} from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import type { Project, ProjectCategory } from '../../types';
import { projects } from '../../data/projects';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  selectedCategory?: ProjectCategory;
  onCategoryChange?: (category: ProjectCategory) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  onSelectProject, 
  selectedCategory = 'all',
  onCategoryChange
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(selectedCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (category: ProjectCategory) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'telegram-bots', label: 'Telegram Bots' },
    { id: 'media-streaming', label: 'Media & Streaming' },
    { id: 'cloud-infra', label: 'Cloud & Infrastructure' },
    { id: 'tools-utilities', label: 'Tools & Utilities' }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot size={22} />;
      case 'Sparkles': return <Sparkles size={22} />;
      case 'Radio': return <Radio size={22} />;
      case 'Video': return <Video size={22} />;
      case 'Languages': return <Languages size={22} />;
      case 'Server': return <Server size={22} />;
      case 'ShieldAlert': return <ShieldAlert size={22} />;
      case 'Layers': return <Layers size={22} />;
      case 'Key': return <Key size={22} />;
      case 'Cpu': return <Cpu size={22} />;
      default: return <Bot size={22} />;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span>// DEPLOYMENT REPOSITORY</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Open-Source Ecosystem</span>
          </h2>
          <p className="section-desc">
            Explore battle-tested Telegram bots, resilient media pipelines, and systems utilities built for 24/7 autonomous operation.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="filters-bar">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="search-box">
            <Search size={16} color="var(--text-muted)" />
            <input
              type="text"
              className="search-input"
              placeholder="Search by name, tag, or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="glass-card project-card">
                {/* Header */}
                <div className="project-card-header">
                  <div className="project-icon-wrapper">
                    {renderIcon(project.icon)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="badge badge-brand" style={{ fontSize: '0.68rem' }}>
                      {project.categoryLabel}
                    </span>
                    <span className="badge badge-active" style={{ fontSize: '0.68rem' }}>
                      <span className="beacon-dot"></span>
                      {project.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Tags */}
                <div className="project-tech-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Controls */}
                <div className="project-card-footer">
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => onSelectProject(project)}
                  >
                    <Info size={14} color="#00f0ff" />
                    <span>Inspect</span>
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {project.telegramUrl && (
                      <a
                        href={project.telegramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost btn-sm"
                        title="Telegram Channel"
                        aria-label="Telegram Channel"
                      >
                        <Send size={14} color="#00f0ff" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={14} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div 
            className="glass-card" 
            style={{ 
              padding: '4rem 2rem', 
              textAlign: 'center',
              maxWidth: '540px',
              margin: '0 auto' 
            }}
          >
            <div style={{ color: 'var(--accent-crimson)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
              <Bot size={48} />
            </div>
            <h3 style={{ color: '#ffffff', marginBottom: '0.5rem', fontSize: '1.25rem' }}>No matching modules found</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              We could not find any projects matching &quot;{searchQuery}&quot;. Try selecting another category or clearing your search term.
            </p>
            <button 
              className="btn btn-ghost btn-sm"
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
