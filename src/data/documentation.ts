import type { DocSection } from '../types';

export const documentationSections: DocSection[] = [
  {
    id: "getting-started",
    title: "Telegram API & Account Setup",
    badge: "Core Setup",
    summary: "Instructions for safely obtaining and configuring Telegram MTProto API credentials without security leaks.",
    requirements: [
      "A valid Telegram account with 2FA enabled",
      "Access to https://my.telegram.org/apps",
      "Python 3.10+ or Docker installed"
    ],
    steps: [
      {
        title: "1. Obtain API Credentials",
        description: "Log into https://my.telegram.org using your phone number and 2FA password. Navigate to 'API development tools' and create a new application to generate your API ID and API HASH.",
        code: `# Store credentials securely in your local environment or .env
export TELEGRAM_API_ID="1234567"
export TELEGRAM_API_HASH="0123456789abcdef0123456789abcdef"`
      },
      {
        title: "2. Security Warning",
        description: "Never commit your API Hash or bot tokens into git repositories. All Lucifer Open Source utilities use environment variables or encrypted credential vaults.",
        code: `# Always verify .gitignore contains sensitive paths
echo "*.session" >> .gitignore
echo ".env" >> .gitignore
echo "config/credentials.json" >> .gitignore`
      }
    ]
  },
  {
    id: "tg-media-sync-guide",
    title: "TG Media Sync Manager Deployment",
    badge: "Bot & Desktop UI",
    summary: "Comprehensive guide to running the multi-account media synchronization manager locally or on a headless server.",
    requirements: [
      "Python 3.11+",
      "PyQt6 (for GUI mode) or headless mode via CLI",
      "Active Telegram worker accounts"
    ],
    steps: [
      {
        title: "1. Clone and Install Dependencies",
        description: "Clone the official repository and initialize an isolated Python virtual environment.",
        code: `git clone https://github.com/luciferopensource/tg-media-sync-manager.git
cd tg-media-sync-manager
python -m venv venv
source venv/bin/activate  # On Windows: .\\venv\\Scripts\\activate
pip install -r requirements.txt`
      },
      {
        title: "2. Authenticate Worker Accounts",
        description: "Launch the session authenticator to login your worker phone numbers. Telethon stores `.session` binary tokens locally with cryptographic protection.",
        code: `python main.py --login-account
# Follow on-screen phone verification & 2FA prompts`
      },
      {
        title: "3. Launch GUI or Daemon",
        description: "Run the full PyQt6 visual dashboard, or start headless sync daemon for background 24/7 mirroring.",
        code: `# Launch Visual Desktop Dashboard:
python main.py

# Or run Headless Daemon on Linux/Docker:
python main.py --headless --source-channel -1001234567 --target-channel -1009876543`
      }
    ]
  },
  {
    id: "ott-poster-guide",
    title: "Lucifer OTT Poster Bot Configuration",
    badge: "Automation",
    summary: "Setup guide for automatic metadata extraction, 4K poster rendering, and automated channel posting.",
    requirements: [
      "Telegram Bot Token from @BotFather",
      "Free TMDB API Key from https://www.themoviedb.org",
      "Broadcast Channel ID where the bot has admin rights"
    ],
    steps: [
      {
        title: "1. Environment Setup",
        description: "Configure the bot's runtime variables via environment or a `.env` file.",
        code: `BOT_TOKEN="123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ"
TMDB_API_KEY="your_tmdb_v3_api_key_here"
BROADCAST_CHANNEL_ID="-100192837465"
DEFAULT_THEME="cyberpunk_dark"`
      },
      {
        title: "2. Run with Docker",
        description: "The fastest way to deploy the poster bot is using the hardened pre-built Docker image.",
        code: `docker run -d \\
  --name lucifer-poster-bot \\
  --restart unless-stopped \\
  --env-file .env \\
  luciferopensource/ott-poster-bot:latest`
      }
    ]
  },
  {
    id: "telestream-bridge-guide",
    title: "TeleStream Gateway Self-Hosting",
    badge: "Streaming Pipeline",
    summary: "How to deploy the high-throughput HTTP/2 media streaming server with byte-range seek acceleration.",
    requirements: [
      "Docker & Docker Compose",
      "VPS with at least 1Gbps network port",
      "Reverse proxy (Caddy / Nginx / Cloudflare)"
    ],
    steps: [
      {
        title: "1. Docker Compose Configuration",
        description: "Define the TeleStream service in your `docker-compose.yml` file.",
        code: `version: '3.8'
services:
  telestream:
    image: luciferopensource/telestream-bridge:latest
    container_name: telestream-bridge
    restart: always
    ports:
      - "8080:8080"
    environment:
      - PORT=8080
      - TELEGRAM_API_ID=\${TELEGRAM_API_ID}
      - TELEGRAM_API_HASH=\${TELEGRAM_API_HASH}
      - BOT_TOKEN=\${BOT_TOKEN}
      - STREAM_CACHE_SIZE=1024MB`
      },
      {
        title: "2. Streaming a Media File",
        description: "Obtain a direct streaming link via the bot or API endpoint, then plug it into VLC, mpv, or any web video player.",
        code: `# Play directly via MPV or VLC:
mpv "https://stream.yourdomain.com/v1/play?id=BAACAgUAAxkBA...&token=xyz"`
      }
    ]
  }
];
