# Tumusiime Kevin - Resume & Portfolio

A modern, responsive resume and portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**, deployed on **GitHub Pages**.

## 🚀 Live Demo

Visit: `https://kevin-password.github.io/portfolio/`

## 📋 Features

- ✨ Modern, responsive design
- 📱 Mobile-friendly interface
- 🎨 Professional Tailwind CSS styling
- 📄 Complete resume/CV display
- 🔗 Contact information and links
- ⚡ Fast performance (static export)
- 🚀 Auto-deploy via GitHub Actions
- 🎯 SEO-optimized

## 🛠️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages
- **Build Tool:** Next.js static export

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kevin-password/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build & Deploy

### Local Build
```bash
npm run build
npm start
```

### Deploy to GitHub Pages
The repository includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to `main`.

**Manual deployment:**
```bash
npm run export
# Files will be in ./out directory
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Header.tsx        # Navigation header
│       ├── Hero.tsx          # Hero section with intro
│       ├── Education.tsx     # Education & awards
│       ├── Experience.tsx    # Work & leadership experience
│       ├── Skills.tsx        # Skills & competencies
│       ├── Contact.tsx       # Contact information
│       └── Footer.tsx        # Footer
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🎨 Customization

### Colors
Update color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#1e40af',
  secondary: '#1e3a8a',
  accent: '#0ea5e9',
}
```

### Content
Edit component files in `src/components/` to update:
- Professional information in `Hero.tsx`
- Education details in `Education.tsx`
- Experience/leadership in `Experience.tsx`
- Skills in `Skills.tsx`
- Contact info in `Contact.tsx`

### Metadata
Update site metadata in `src/app/layout.tsx`

## 📝 License

Free to use and modify.

## 👤 Author

Tumusiime Kevin
- Email: tumusiimekevin3@gmail.com
- Phone: +256 785 365 538
- Location: Kabale, Uganda
