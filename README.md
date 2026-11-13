# keerthy-vanam-portfolio

Personal portfolio for **Keerthy Priya Vanam**, a data engineer working on multi-tenant pipelines with AWS Glue, PySpark, PostgreSQL, and Databricks.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Dark theme, fully responsive, reduced-motion aware

## Design

- Ink navy base with electric blue and teal accents
- Syne for headings, Inter for body text, JetBrains Mono for labels and tags
- Hero background is a slow-moving node graph, a nod to the DAGs behind every pipeline

## Structure

```
app/
  components/   Navbar, Footer
  sections/     Hero, About, Experience, Projects, Skills, Contact
  globals.css   Fonts and shared utility classes
  layout.tsx    Root layout and metadata
  page.tsx      Page composition
```

## Local setup

```bash
git clone <your-repo-url>
cd keerthy-vanam-portfolio
npm install
npm run dev
```

Open http://localhost:3000.

## Updating content

Each section file keeps its content in a plain array at the top, so edits to experience, projects, or skills do not touch layout code.
