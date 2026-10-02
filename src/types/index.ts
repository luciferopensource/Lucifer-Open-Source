export type ProjectCategory = 
  | 'all' 
  | 'telegram-bots' 
  | 'media-streaming' 
  | 'cloud-infra' 
  | 'tools-utilities';

export interface Project {
  id: string;
  title: string;
  category: 'telegram-bots' | 'media-streaming' | 'cloud-infra' | 'tools-utilities';
  categoryLabel: string;
  description: string;
  longDescription: string;
  status: 'active' | 'beta' | 'concept' | 'maintained';
  tags: string[];
  githubUrl?: string;
  telegramUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
  featured: boolean;
  highlights: string[];
  icon: string;
}

export interface BotCommand {
  command: string;
  description: string;
}

export interface TelegramBot {
  id: string;
  name: string;
  handle: string;
  purpose: string;
  status: 'online' | 'beta' | 'maintenance';
  tags: string[];
  commands: BotCommand[];
  features: string[];
  botUrl: string;
  githubUrl?: string;
  accentColor?: string;
}

export interface DocSection {
  id: string;
  title: string;
  badge: string;
  summary: string;
  requirements: string[];
  steps: {
    title: string;
    description: string;
    code?: string;
  }[];
}

export interface ChangelogRelease {
  version: string;
  date: string;
  title: string;
  badge: 'MAJOR' | 'FEATURE' | 'PATCH' | 'SECURITY';
  highlights: string[];
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  subtagline: string;
  telegramChannel: string;
  telegramGroup: string;
  githubUrl: string;
  gitlabUrl: string;
  discordUrl?: string;
  contactEmail: string;
  stats: {
    label: string;
    value: string;
    helper: string;
  }[];
}
