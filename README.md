# keerthy-priya-vanam-portfolio

Personal portfolio website for **Keerthy Priya Vanam** — Cloud Data Engineer specializing in AWS/Azure pipelines, distributed systems, and high-throughput ETL.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Fully responsive** — mobile-first design
- **Dark mode** by default
- **Zero external dependencies** beyond Next.js & Tailwind

## Design Direction

- Deep navy/ink palette (`#0A0E1A`) with electric blue (`#3B6FFF`) and teal signal (`#00D9A3`) accents
- `Syne` display typeface (bold, architectural), `Inter` for body, `JetBrains Mono` for code/labels
- Animated node-graph canvas in the hero — reflects the data pipeline / graph topology domain
- Signature element: live particle graph that echoes a DAG (directed acyclic graph), the mental model of every data pipeline

## Sections

| Section | Description |
|---|---|
| Hero | Tagline, key stats, animated node graph |
| About | Narrative, core tech stack, certifications, education |
| Experience | Tabbed job history with impact bullets |
| Projects | Featured projects with outcomes and tech tags |
| Skills | Grouped skill bars across 6 categories |
| Contact | Direct links to email, phone, LinkedIn, GitHub |

## Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/keerthy-priya-vanam-portfolio.git
cd keerthy-priya-vanam-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Customization

All content lives in the section files under `app/sections/`. Each file is self-contained and easy to update:

- `Hero.tsx` — stats, tagline, CTAs
- `About.tsx` — narrative, stack, certs, education
- `Experience.tsx` — job history array
- `Projects.tsx` — projects array
- `Skills.tsx` — skill groups with proficiency levels
- `Contact.tsx` — contact links

Colors and typography tokens are defined in `tailwind.config.ts` and `app/globals.css`.
