# Kiran Services Corporate Website

Production-ready Next.js 15 website for Kiran Services, a workforce solutions and manpower deployment company headquartered in Andhra Pradesh, India.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy to GitHub Pages

This project is configured for static export. Push to `main`, then enable GitHub Pages with **Source: GitHub Actions** in the repository settings.

For this repository, the workflow builds with:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_GITHUB_REPOSITORY_NAME=spark npm run build
```

The exported site is uploaded from `out/`.
