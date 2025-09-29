# Ladki Bahin eKYC Website

A fast, SEO-optimized website for Maharashtra Government's Ladki Bahin Scheme eKYC process, built with Astro framework supporting both Marathi (default) and English languages.

## Features

- 🚀 **Fast Performance**: Built with Astro for optimal loading speeds
- 🌐 **Multilingual**: Supports Marathi (default) and English
- 📱 **Responsive Design**: Mobile-first approach with modern UI
- 🔒 **Secure eKYC Form**: Client-side validation with security best practices
- 🎯 **SEO Optimized**: Meta tags, structured data, and sitemap
- ♿ **Accessible**: WCAG compliant design
- 🎨 **Modern UI**: Tailwind CSS with custom animations

## Tech Stack

- **Framework**: Astro 4.0
- **Styling**: Tailwind CSS
- **Fonts**: Inter (English), Noto Sans Devanagari (Marathi)
- **Icons**: Heroicons
- **Deployment**: Netlify ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.astro    # Navigation with language switcher
│   ├── Hero.astro      # Hero section with CTA
│   ├── EkycForm.astro  # Main eKYC form with validation
│   ├── Benefits.astro  # Scheme benefits section
│   └── Footer.astro    # Footer with contact info
├── i18n/               # Internationalization
│   ├── index.ts        # Language definitions and translations
│   └── utils.ts        # Translation utilities
├── layouts/            # Page layouts
│   └── Layout.astro    # Base layout with SEO
└── pages/              # Route pages
    ├── index.astro     # Marathi homepage (default)
    └── en/
        └── index.astro # English homepage
```

## Languages

- **Marathi (मराठी)**: Default language - `/`
- **English**: Available at `/en`

## SEO Features

- Meta tags for social sharing
- Structured data (JSON-LD)
- Sitemap generation
- Performance optimization
- Accessibility compliance

## Form Validation

The eKYC form includes:
- Real-time field validation
- Mobile number format checking (10 digits)
- Aadhar number validation (12 digits)
- Required field validation
- Terms and conditions acceptance

## Performance Optimizations

- CSS and JS minification
- Image optimization
- Lazy loading
- Font preloading
- Compressed HTML output

## Deployment

The site is configured for Netlify deployment with:
- Automatic builds from Git
- Form handling
- Redirects for language routing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is developed for the Government of Maharashtra under official guidelines.

## Support

For technical support or queries:
- Email: support@ladkibahin.gov.in
- Phone: 1800-XXX-XXXX

---

**Government of Maharashtra** | **भारत सरकार**
