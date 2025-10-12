# CodeRisk Frontend

Landing page for CodeRisk - Trust infrastructure for AI-generated code.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment Instructions

### 1. Push to GitHub

```bash
# Add and commit your changes
git add .
git commit -m "Initial commit: CodeRisk landing page"

# Create GitHub repository (if you have gh CLI)
gh repo create coderisk-frontend --public --source=. --remote=origin
git push -u origin main

# OR manually create repo on GitHub and:
git remote add origin https://github.com/YOUR_USERNAME/coderisk-frontend.git
git push -u origin main
```

### 2. Deploy to Vercel

**Option A: Vercel Dashboard (Recommended)**

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New" → "Project"
3. Import your `coderisk-frontend` repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy"

**Option B: Vercel CLI**

```bash
npm i -g vercel
vercel login
vercel --prod
```

### 3. Connect GoDaddy Domain to Vercel

**In Vercel Dashboard:**

1. Go to your project → Settings → Domains
2. Add `coderisk.dev` and `www.coderisk.dev`
3. Vercel will show you DNS records to configure

**In GoDaddy Portal:**

1. Go to My Products → DNS → Manage DNS for `coderisk.dev`
2. Add these records:

For apex domain (coderisk.dev):
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP)
TTL: 600 seconds
```

For www subdomain:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com.
TTL: 600 seconds
```

3. Save changes (DNS propagation takes 5-48 hours, usually ~1 hour)

### 4. Verify Domain Connection

In Vercel dashboard, wait for the domain status to show "Valid Configuration".

Check propagation status:
```bash
dig coderisk.dev
dig www.coderisk.dev
```

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel

## Project Structure

```
coderisk-frontend/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── public/              # Static assets
└── 00-product/          # Product documentation (gitignored)
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
