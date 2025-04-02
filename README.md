# Modern Developer Portfolio

A stunning, responsive portfolio website built with Vite, React, TypeScript, and Tailwind CSS to showcase my skills and projects as a fullstack developer.

## Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Ready for Vercel/Netlify

## Features

- **Responsive Design**: Looks great on all device sizes
- **Modern UI**: Clean, professional aesthetic with subtle animations
- **Interactive Elements**: Dynamic components that engage visitors
- **Optimized Performance**: Fast loading and rendering
- **Accessibility**: Built with a11y best practices

## Site Sections

- **Hero Section**: Eye-catching animated introduction
- **About Me**: Professional background and personal journey
- **Experience Timeline**: Visual representation of career path
- **Projects Showcase**: Interactive gallery of key projects
- **Skills & Technologies**: Visual representation of technical skills
- **Teaching & Mentorship**: Highlighting educational experience
- **Contact Section**: Easy-to-use contact form

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/modern-portfolio.git
   cd modern-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Customization

### Personalization

1. Update personal information in the component files:
   - Update your name, title, and bio in `src/components/sections/Hero.tsx` and `src/components/sections/About.tsx`
   - Update your social links in `src/components/layout/Footer.tsx` and `src/components/sections/Contact.tsx`

2. Replace project data:
   - Update the project information in `src/components/sections/Projects.tsx`

3. Modify skills and experience:
   - Update your skills in `src/components/sections/Skills.tsx`
   - Customize your experience timeline in `src/components/sections/Experience.tsx`

### Styling

- Main color scheme can be adjusted in `tailwind.config.js`
- Section-specific styling is contained within each component

## Deployment

The project is configured for easy deployment to Vercel, Netlify, or similar platforms.

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. No additional configuration needed - Vercel will detect the Vite build setup

### Build for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

The output will be in the `dist` directory.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Framer Motion for animation capabilities
- Tailwind CSS for styling
- React and TypeScript for the component structure
- Vite for the fast development experience

---

Feel free to reach out with any questions or suggestions!
