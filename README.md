# WalletRIP 💸
The AI-powered expense tracker that roasts your bad financial decisions.

## 🧐 The Philosophy
Most expense trackers are boring spreadsheets. WalletRIP is built on three core beliefs:

1. **Friction kills consistency.** I should be able to type "Starbucks 15" and be done.
2. **Needs vs. Wants.** Knowing I spent $2K is useless. Knowing $500 went to Lego (Want) vs. $1.5K to Rent (Need) is actionable.
3. **Shame is a motivator.** If I buy something stupid, the AI should roast me in Hinglish.

## ⚡ How It Works
1. **Dump** – Type naturally: "Spent 50 cad on pizza"
2. **Parse** – Google Gemini AI extracts the data and context.
3. **Roast** – The AI detects if it's a "Want" and generates a sarcastic comment (e.g., "Bhai, ghar ka khaana kha le").
4. **Visualize** – Data lands in Supabase and updates your "Lego vs. Life" charts instantly.

## ✨ Features
- **🧠 Natural Language Parsing** – No forms. Just talk to it.
- **🤬 Hinglish Roasts** – Context-aware sarcasm based on what you buy.
- **📊 Visual Analytics** – Donut charts to track Needs vs. Wants ratios.
- **🔐 Callsign Auth** – Privacy-first. No email required. Just a username & invite code.
- **🛡️ Military-Grade Security** – Row Level Security (RLS) ensures only YOU see your data.
- **📲 PWA Ready** – Installs on iPhone/Android as a native app.

## 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Framer Motion (Animations)
- **Database**: Supabase (PostgreSQL + RLS)
- **Intelligence**: Google Gemini 1.5 Flash
- **Charts**: Recharts

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/tejalgoyal/spendlog.git
cd spendlog
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file with your keys (Supabase & Gemini):

```env
GEMINI_API_KEY=...
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

### 4. Run the app
```bash
npm run dev
```

## 🗺️ Roadmap
- [x] Phase 1: AI Parsing & Database Setup
- [x] Phase 2: Secure "Callsign" Auth & RLS
- [x] Phase 3: Visual Charts & Delete Functionality
- [x] Phase 4: Hinglish Meme/Roast Engine
- [ ] Phase 5: Gamification (Streak System)
- [ ] Phase 6: Subscription Hunter

---
Built with ☕ and anxiety by Tejal.
