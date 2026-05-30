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

The primary custom domain is:

```text
www.kiranservices.in
```

Keep these DNS records so both `www.kiranservices.in` and `kiranservices.in` work:

```text
www  CNAME  kiranservices.github.io
@    A      185.199.108.153
@    A      185.199.109.153
@    A      185.199.110.153
@    A      185.199.111.153
```

For this custom-domain deployment, the workflow builds with:

```bash
GITHUB_PAGES=true GITHUB_PAGES_CUSTOM_DOMAIN=true npm run build
```

The exported site is uploaded from `out/`.
