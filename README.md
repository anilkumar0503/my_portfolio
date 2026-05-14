# Portfolio Website - Bakkashetti Anil Kumar

Modern, interactive portfolio website built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful animations with Framer Motion
- 🌙 Dark mode support
- 📊 Interactive metrics dashboard
- 💼 Detailed case studies
- 🏗️ Architecture showcase
- 📱 Mobile-friendly
- ⚡ Fast performance with Next.js 14

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navigation.tsx    # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Metrics.tsx       # Metrics dashboard
│   ├── AIWorkflow.tsx    # AI workflow section
│   ├── Products.tsx      # Products showcase
│   ├── CaseStudies.tsx   # Case studies
│   ├── Architecture.tsx  # Architecture section
│   └── Contact.tsx       # Contact section
├── public/               # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Customization

### Update Contact Information

Edit `components/Contact.tsx`:
- Email address
- LinkedIn URL
- GitHub URL

### Add Your Resume

Place your resume PDF in the `public` folder as `resume.pdf`.

### Modify Content

All content is in the respective component files. Update:
- Metrics in `Metrics.tsx`
- Products in `Products.tsx`
- Case studies in `CaseStudies.tsx`
- Tech stack in `Architecture.tsx`

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

## License

© 2026 Bakkashetti Anil Kumar. All rights reserved.
