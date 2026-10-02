import type { TelegramBot } from '../types';

export const telegramBots: TelegramBot[] = [
  {
    id: "lucifer-media-sync-bot",
    name: "Media Sync Core Bot",
    handle: "@LuciferMediaSyncBot",
    purpose: "Coordinates multi-account channel mirroring, batch transfers, and file archiving across Telegram.",
    status: "online",
    tags: ["Telethon", "AsyncIO", "Channel Mirroring", "Batch DL"],
    commands: [
      { command: "/sync", description: "Trigger synchronization between source and target channels" },
      { command: "/status", description: "Display live queue metrics, transfer rates, and remaining files" },
      { command: "/filter", description: "Set inclusion/exclusion regex patterns for file types or sizes" },
      { command: "/accounts", description: "Inspect active worker account sessions and health" }
    ],
    features: [
      "Zero flood-wait session switching mechanism",
      "Chunked SHA-256 verification on incoming documents",
      "Smart folder grouping and tag extraction",
      "Bandwidth scheduling and rate limiting"
    ],
    botUrl: "https://t.me/Lucifer_Open_Source",
    githubUrl: "https://github.com/luciferopensource/tg-media-sync-manager"
  },
  {
    id: "lucifer-ott-poster-bot",
    name: "Lucifer OTT Poster Bot",
    handle: "@LuciferOTTPosterBot",
    purpose: "Instantly scrapes movie/series metadata, builds branded 4K banner posters, and posts to channels.",
    status: "online",
    tags: ["Pillow", "TMDB", "Automation", "Canvas Engine"],
    commands: [
      { command: "/poster [query]", description: "Fetch metadata and generate a custom poster instantly" },
      { command: "/preview", description: "Preview current channel banner styling template" },
      { command: "/template", description: "Switch between Cyber, Minimal, and Broadcast canvas themes" },
      { command: "/schedule", description: "Queue future media announcements with automatic publishing" }
    ],
    features: [
      "Real-time TMDB API integration with high-res poster scraping",
      "Custom brand typography, watermark overlays, and rating badges",
      "Direct one-click forward to broadcast channels",
      "Multi-language synopsis and audio/subtitle tag extraction"
    ],
    botUrl: "https://t.me/Lucifer_Open_Source",
    githubUrl: "https://github.com/luciferopensource/ott-poster-bot"
  },
  {
    id: "lucifer-telestream-bot",
    name: "TeleStream Fast Gateway",
    handle: "@LuciferTeleStreamBot",
    purpose: "Provides direct streaming links and player endpoints for files stored inside Telegram channels.",
    status: "online",
    tags: ["HTTP/2", "VLC / IINA Support", "Fast Stream", "MTProto"],
    commands: [
      { command: "/stream [link]", description: "Generate instant high-speed streaming URL for any media file" },
      { command: "/webplayer", description: "Launch secure web player with subtitle and audio track selectors" },
      { command: "/speedtest", description: "Measure direct Telegram DC download latency" }
    ],
    features: [
      "Instant seek support via HTTP byte-range slicing",
      "Generates direct URLs compatible with VLC, Infuse, and Kodi",
      "Tokenized expirable URLs to protect private storage channels",
      "High-speed concurrent chunk demuxing"
    ],
    botUrl: "https://t.me/Lucifer_Open_Source",
    githubUrl: "https://github.com/luciferopensource/telestream-bridge"
  },
  {
    id: "lucifer-sentinel-bot",
    name: "Server Sentinel Alert Bot",
    handle: "@LuciferSentinelBot",
    purpose: "Pushes real-time server vitals, process crashes, and security alerts to Telegram with interactive controls.",
    status: "online",
    tags: ["DevOps", "Monitoring", "Alerts", "System Vitals"],
    commands: [
      { command: "/metrics", description: "Fetch real-time snapshot of CPU, RAM, Disk, and Network I/O" },
      { command: "/restart [service]", description: "Trigger authenticated systemctl service restart" },
      { command: "/logs [service]", description: "Tail last 50 lines of systemd journal logs" }
    ],
    features: [
      "Sub-second alert dispatch upon memory or CPU spikes",
      "End-to-end encrypted command verification",
      "Inline button actions for quick service recovery",
      "Daily health and backup digests"
    ],
    botUrl: "https://t.me/Lucifer_Open_Source",
    githubUrl: "https://github.com/luciferopensource/server-sentinel"
  }
];
