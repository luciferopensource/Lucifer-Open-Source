import type { ChangelogRelease } from '../types';

export const changelogReleases: ChangelogRelease[] = [
  {
    version: "v2.5.0",
    date: "October 2026",
    title: "Multi-Account Concurrency & AV1 Transcoding Support",
    badge: "MAJOR",
    highlights: [
      "Added multi-session worker pool rotation to TG Media Sync Manager, achieving up to 4x faster bulk channel transfers.",
      "Released AV1 10-bit hardware transcoding pipeline with automated NVENC and Apple Silicon acceleration in OmniStream.",
      "Integrated live byte-range request streaming server for seamless playback in VLC and web players.",
      "Upgraded UI aesthetic across all desktop tools to Cyber Obsidian Theme."
    ]
  },
  {
    version: "v2.4.2",
    date: "September 2026",
    title: "Poster Bot Dynamic Canvas & Watermark Engine",
    badge: "FEATURE",
    highlights: [
      "Overhauled Lucifer OTT Poster Bot canvas generator with 4K resolution support and adaptive typography.",
      "Added multi-language synopsis fetching from TMDB and IMDb fallback scrapers.",
      "Added automated channel broadcast queue with customizable publication schedules."
    ]
  },
  {
    version: "v2.3.0",
    date: "August 2026",
    title: "Server Sentinel & Security Hardening",
    badge: "SECURITY",
    highlights: [
      "Launched Server Sentinel daemon in Rust for sub-second system crash alerts via Telegram.",
      "Released Config Crypt utility with AES-256-GCM authenticated credential vaulting.",
      "Hardened Docker container setups with rootless user execution and read-only root filesystems."
    ]
  },
  {
    version: "v2.0.0",
    date: "July 2026",
    title: "Lucifer Open Source Architecture Rebirth",
    badge: "MAJOR",
    highlights: [
      "Consolidated individual scripts into unified modular open-source repositories.",
      "Standardized command syntax across all Telegram bot implementations.",
      "Introduced shared PyQt6 desktop theme library with hot-reloading."
    ]
  }
];
