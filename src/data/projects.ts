import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "tg-media-sync",
    title: "TG Media Sync Manager",
    category: "telegram-bots",
    categoryLabel: "Telegram Bots",
    description: "High-performance multi-account Telegram media synchronization and file management utility with modern desktop UI.",
    longDescription: "Engineered with Python, Telethon, and PyQt6, TG Media Sync Manager coordinates multi-account synchronization, channel mirroring, resumeable large-file transfers, and real-time bandwidth throttling with zero packet loss.",
    status: "active",
    tags: ["Python", "Telethon", "PyQt6", "AsyncIO", "Multi-Session"],
    githubUrl: "https://github.com/luciferopensource/tg-media-sync-manager",
    telegramUrl: "https://t.me/Lucifer_Open_Source",
    docsUrl: "#docs",
    featured: true,
    highlights: [
      "Concurrent multi-account session rotation",
      "Automatic flood wait backoff handling",
      "Live progress telemetry & GUI dashboard",
      "Chunked sha256 file validation"
    ],
    icon: "Bot"
  },
  {
    id: "ott-poster-bot",
    title: "Lucifer OTT Poster Bot",
    category: "telegram-bots",
    categoryLabel: "Telegram Bots",
    description: "Automated OTT media metadata scraper, custom poster canvas renderer, and channel dispatch bot.",
    longDescription: "Monitors official streaming networks and TMDB APIs to fetch 4K backdrops, generate branded watermarks with cyber gradients, and publish customized media release notices directly to Telegram channels.",
    status: "active",
    tags: ["Python", "Pillow", "TMDB API", "Telegram Bot API", "Docker"],
    githubUrl: "https://github.com/luciferopensource/ott-poster-bot",
    telegramUrl: "https://t.me/Lucifer_Open_Source",
    featured: true,
    highlights: [
      "Sub-second TMDB and IMDb metadata lookups",
      "Dynamic typography and gradient overlay rendering",
      "Auto-tagging and channel broadcasting queue",
      "Custom channel layout presets"
    ],
    icon: "Sparkles"
  },
  {
    id: "telestream-bridge",
    title: "TeleStream Bridge",
    category: "media-streaming",
    categoryLabel: "Media & Streaming",
    description: "Ultra-fast HTTP streaming gateway converting Telegram document IDs to high-bitrate media playback URLs.",
    longDescription: "TeleStream Bridge exposes a lightweight HTTP/Websocket streaming server capable of chunked range-requests, allowing players like VLC, IINA, and Web video players to stream media directly from Telegram channels.",
    status: "active",
    tags: ["Go", "HTTP/2", "Telegram MTProto", "Range Requests", "Docker"],
    githubUrl: "https://github.com/luciferopensource/telestream-bridge",
    demoUrl: "https://t.me/Lucifer_Open_Source",
    featured: true,
    highlights: [
      "Full RFC-7233 byte-range request compliance",
      "Multi-client concurrent stream demuxing",
      "Embedded web player with subtitles support",
      "Minimal RAM footprint (<35MB idle)"
    ],
    icon: "Radio"
  },
  {
    id: "omnistream-transcoder",
    title: "OmniStream Transcoder",
    category: "media-streaming",
    categoryLabel: "Media & Streaming",
    description: "Distributed hardware-accelerated transcoding engine tuned for NVENC, QSV, and Apple Silicon.",
    longDescription: "Automates ingestion pipelines, converts high-bitrate raw captures to optimized AV1 and HEVC formats with HDR tone mapping, and outputs multi-bitrate HLS packaging.",
    status: "active",
    tags: ["FFmpeg", "NVENC", "AV1/HEVC", "Python", "Redis Queue"],
    githubUrl: "https://github.com/luciferopensource/omnistream-transcoder",
    featured: false,
    highlights: [
      "Hardware NVENC & QuickSync automatic detection",
      "Lossless audio preservation (E-AC-3 / TrueHD passthrough)",
      "Automated chapter extraction and thumbnail generation",
      "Distributed worker nodes coordination via Redis"
    ],
    icon: "Video"
  },
  {
    id: "subsync-engine",
    title: "SubSync Engine",
    category: "media-streaming",
    categoryLabel: "Media & Streaming",
    description: "Acoustic fingerprinting subtitle synchronization and multi-language translation pipeline.",
    longDescription: "Analyzes audio waveforms using machine learning to detect speech boundaries, adjusting asynchronous subtitle files to sub-millisecond precision with automated format conversions (SRT, VTT, ASS).",
    status: "beta",
    tags: ["Python", "Librosa", "Whisper", "FFmpeg", "CLI"],
    githubUrl: "https://github.com/luciferopensource/subsync-engine",
    featured: false,
    highlights: [
      "Speech boundary detection using acoustic modeling",
      "Batch subtitle alignment across whole seasons",
      "ASS styling parser and font embedding",
      "Zero audio transcode requirement"
    ],
    icon: "Languages"
  },
  {
    id: "lucifer-deploy-orchestrator",
    title: "Lucifer Deploy Stack",
    category: "cloud-infra",
    categoryLabel: "Cloud & Infrastructure",
    description: "Production-ready Docker Compose & WireGuard cluster stack for self-hosting Telegram automation bots.",
    longDescription: "A sovereign infrastructure-as-code repository providing hardened Docker compose files, automated TLS renewal via Caddy, Prometheus/Grafana metric scrapers, and WireGuard mesh networking.",
    status: "active",
    tags: ["Docker", "Docker Compose", "Caddy", "Prometheus", "WireGuard"],
    githubUrl: "https://github.com/luciferopensource/lucifer-deploy-stack",
    featured: true,
    highlights: [
      "One-click zero-downtime deployment script",
      "Automated TLS 1.3 certificates via ACME",
      "Prometheus & Grafana dashboard pre-configured",
      "Hardened non-root containers"
    ],
    icon: "Server"
  },
  {
    id: "server-sentinel",
    title: "Server Sentinel Daemon",
    category: "cloud-infra",
    categoryLabel: "Cloud & Infrastructure",
    description: "Lightweight resource monitor and process watchdog dispatching instant Telegram alert notifications.",
    longDescription: "Monitors CPU, RAM, disk I/O, network spikes, and critical bot daemon processes. Sends interactive Telegram messages with kill/restart command buttons upon threshold violations.",
    status: "active",
    tags: ["Rust", "Telegram Bot API", "Systemd", "Linux", "Zero-Config"],
    githubUrl: "https://github.com/luciferopensource/server-sentinel",
    featured: false,
    highlights: [
      "Sub-5MB binary written in safe Rust",
      "Interactive inline Telegram action buttons",
      "Smart threshold dampening to prevent alert spam",
      "Zero external runtime dependencies"
    ],
    icon: "ShieldAlert"
  },
  {
    id: "pyqt-cyber-theme",
    title: "PyQt Cyber Theme Engine",
    category: "tools-utilities",
    categoryLabel: "Tools & Utilities",
    description: "Modern, dark glassmorphism QSS styling toolkit for PyQt6 and PySide6 desktop applications.",
    longDescription: "Delivers responsive CSS-like palettes, neon glow states, custom scrollbars, and SVG icon sets directly into Python GUI applications without native platform glitches.",
    status: "active",
    tags: ["Python", "PyQt6", "PySide6", "QSS", "UI Library"],
    githubUrl: "https://github.com/luciferopensource/pyqt-cyber-theme",
    featured: false,
    highlights: [
      "Fully vectorized SVG icons and glyphs",
      "Live theme hot-reloading during development",
      "High-DPI 4K and Retina scaling support",
      "Drop-in 2-line initialization"
    ],
    icon: "Layers"
  },
  {
    id: "config-crypt",
    title: "Config Crypt CLI",
    category: "tools-utilities",
    categoryLabel: "Tools & Utilities",
    description: "Zero-knowledge encrypted configuration storage for developer scripts and bot credentials.",
    longDescription: "Protects sensitive Telegram session strings, database connection URIs, and config JSONs with AES-256-GCM. Unlocks seamlessly via environment key or system keyring.",
    status: "active",
    tags: ["Go", "Cryptography", "AES-256", "CLI", "Cross-Platform"],
    githubUrl: "https://github.com/luciferopensource/config-crypt",
    featured: false,
    highlights: [
      "AES-256-GCM authenticated encryption",
      "System keyring integration (Windows Credential Manager / Keychain)",
      "Zero plain-text residual data in RAM or swap",
      "CLI pipeable for CI/CD environments"
    ],
    icon: "Key"
  },
  {
    id: "fasthash-verifier",
    title: "FastHash Verifier",
    category: "tools-utilities",
    categoryLabel: "Tools & Utilities",
    description: "Multi-threaded disk hasher and duplicate file detector supporting SHA-256, BLAKE3, and MD5.",
    longDescription: "Engineered to verify vast media storage arrays at full NVMe speeds. Compares hash manifests against Telegram channel records to ensure mirror parity.",
    status: "active",
    tags: ["C++", "BLAKE3", "SIMD", "Multi-Threading", "File Integrity"],
    githubUrl: "https://github.com/luciferopensource/fasthash-verifier",
    featured: false,
    highlights: [
      "AVX-512 and NEON SIMD accelerated hashing",
      "Full NVMe drive saturation (>4GB/sec throughput)",
      "Automatic duplicate detection reports",
      "Export to JSON, CSV, and checksum manifests"
    ],
    icon: "Cpu"
  }
];
