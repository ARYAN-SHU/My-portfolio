# My Portfolio

A modern, responsive full-stack portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern UI**: Clean, professional design with advanced animations using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **Full-Stack**: Built with Next.js for both frontend and API routes
- **TypeScript**: Type-safe development
- **Contact Form**: Functional contact form with API endpoint
- **Sections**:
  - Hero section with animated introduction
  - About section with personal information
  - Skills section with progress bars
  - Projects showcase with links
  - Experience timeline
  - Contact form

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Next.js API Routes

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/contact/     # Contact form API
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form
│   ├── Experience.tsx   # Experience section
│   ├── Hero.tsx         # Hero section
│   ├── Navbar.tsx       # Navigation bar
│   ├── Projects.tsx     # Projects showcase
│   └── Skills.tsx       # Skills section
```

## Customization

- Update personal information in the components
- Replace placeholder images with your own
- Modify colors and styling in Tailwind classes
- Add more sections or features as needed

## Deployment

This project can be deployed to Vercel, Netlify, or any platform that supports Next.js applications.