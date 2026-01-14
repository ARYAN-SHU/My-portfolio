# My Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **TypeScript**: Type-safe development for better code quality
- **ESLint**: Code quality and consistency checks

## Sections

- **Home**: Hero section with introduction and call-to-action buttons
- **About**: Personal information and key statistics
- **Skills**: Technical skills organized by category
- **Projects**: Showcase of featured projects with descriptions and tech stacks
- **Contact**: Contact form and social media links

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with modern layouts
- **Code Quality**: ESLint, TypeScript

## Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## Customization

### Personal Information

Update the following in `src/App.tsx`:
- Name and title in the hero section
- About text and statistics
- Skills and technologies
- Project descriptions and links
- Contact information

### Styling

Modify `src/App.css` to customize:
- Color scheme
- Layout and spacing
- Animations and transitions
- Responsive breakpoints

### Images

Replace placeholder images with your own:
- Profile photo in the hero section
- Project screenshots in the projects section

## Project Structure

```
my-portfolio/
├── public/
├── src/
│   ├── App.css          # Main styles
│   ├── App.tsx          # Main component
│   ├── index.css        # Global styles
│   └── main.tsx         # App entry point
├── package.json
├── vite.config.ts
└── README.md
```

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and TypeScript
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
