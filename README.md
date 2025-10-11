# Nathan Albe - Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, mobile-first design, and a professional layout.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Smooth Animations**: Framer Motion for beautiful transitions and micro-interactions
- **Performance Optimized**: Server-side rendering and automatic optimization
- **SEO Ready**: Built-in SEO optimization with Next.js
- **Type Safe**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main page component
├── components/
│   ├── Navigation.tsx       # Navigation bar component
│   ├── ProfileCard.tsx     # Profile card component
│   ├── HeroSection.tsx     # Hero section component
│   ├── AboutSection.tsx    # About section component
│   ├── ExperienceSection.tsx # Experience section component
│   ├── ProjectsSection.tsx # Projects section component
│   └── ContactSection.tsx  # Contact section component
└── public/
    └── assets/             # Static assets (images, resume, etc.)
```

## 🎨 Customization

### Colors
The portfolio uses a custom color scheme defined in `tailwind.config.ts`:
- **Primary Orange**: #FCA311
- **Secondary Blue**: #14213D
- **Background**: Dark gray theme

### Content
Update the following files to customize your content:
- `src/components/ProfileCard.tsx` - Personal information
- `src/components/HeroSection.tsx` - Hero content and stats
- `src/components/AboutSection.tsx` - About section content
- `src/components/ExperienceSection.tsx` - Work experience
- `src/components/ProjectsSection.tsx` - Featured projects
- `src/components/ContactSection.tsx` - Contact information

### Assets
Replace assets in `public/assets/`:
- `profile-pic.png` - Your profile picture
- `Nathan_Albe_Resume.pdf` - Your resume
- Project images for the projects section

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Nathan Albe - [nathan.albe@outlook.com](mailto:nathan.albe@outlook.com)

Project Link: [https://github.com/nathan-albe/portfolio-nextjs](https://github.com/nathan-albe/portfolio-nextjs)