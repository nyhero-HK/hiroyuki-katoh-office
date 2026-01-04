# 加藤事務所 (Katoh Office) - Website

A modern, Stripe-compliant website for Katoh Office providing medical education consulting and educational software services.

## ✨ Features

- **Bilingual Support**: Full Japanese/English language toggle
- **Stripe-Ready**: All required compliance pages for Stripe account activation
- **Modern Design**: "Neo-Academic" aesthetic with distinctive typography and color palette
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Smooth animations using Framer Motion for enhanced user experience

## 🎨 Design System

### Color Palette
- **Primary (Neo Teal)**: `#0B5563` - Professional and trustworthy
- **Accent (Neo Coral)**: `#FF6B6B` - Energetic and approachable
- **Secondary (Neo Amber)**: `#FBBF24` - Educational and optimistic

### Typography
- **Display Font**: Outfit (Headings)
- **Body Font**: Manrope (Content)

## 📄 Stripe Compliance Pages

All required pages for Stripe business account:

1. **Homepage**: `/` - Business website
2. **Support**: `/support` - Customer support and contact form
3. **Privacy Policy**: `/privacy-policy` - Data protection and privacy
4. **Terms of Service**: `/terms-of-service` - Service agreement
5. **Specified Commercial Transaction Act**: `/specified-commercial-transaction` - Japanese legal requirement (特定商取引法に基づく表記)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

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

### Development

The dev server will start at `http://localhost:5173` by default.

## 📋 Stripe Integration Setup

### 1. Required URLs for Stripe

When setting up your Stripe account, use these URLs:

- **Business Website**: `https://hkmedtech.ny-hero.workers.dev/`
- **Customer Support URL**: `https://hkmedtech.ny-hero.workers.dev/support`
- **Privacy Policy**: `https://hkmedtech.ny-hero.workers.dev/privacy-policy`
- **Terms of Service**: `https://hkmedtech.ny-hero.workers.dev/terms-of-service`
- **Specified Commercial Transaction Act**: `https://hkmedtech.ny-hero.workers.dev/specified-commercial-transaction`
- **Support Email**: `hiroyuki.katoh.office@gmail.com`

### 2. Next Steps for Stripe Integration

To add Stripe payment functionality:

```bash
# Install Stripe dependencies
npm install @stripe/stripe-js @stripe/react-stripe-js
```

Then create payment components:
- Checkout page for one-time payments
- Subscription management page
- Customer portal integration

## 🌐 Deploying to Cloudflare Workers

### Option 1: Using Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Cloudflare Workers
wrangler pages publish dist --project-name=katoh-office
```

### Option 2: Using Cloudflare Dashboard

1. Build the project: `npm run build`
2. Go to Cloudflare Dashboard > Pages
3. Create a new project
4. Upload the `dist` folder

### Custom Domain Setup

Once deployed, configure your domain:
1. Go to Pages project settings
2. Add custom domain: `hkmedtech.ny-hero.workers.dev`
3. Update DNS settings as instructed

## 📝 Customization

### Update Business Information

Edit `/src/pages/SpecifiedCommercial.jsx` to update:
- Business address
- Phone number (if applicable)
- Any other specific business details

### Add Your Photo

Replace the placeholder in the Hero section (`/src/pages/Home.jsx`) with your headshot photo for a more personal touch.

### Modify Content

All content is bilingual and can be edited in the respective page components:
- `/src/pages/Home.jsx` - Homepage content
- `/src/pages/Support.jsx` - Contact form and FAQ
- `/src/pages/PrivacyPolicy.jsx` - Privacy policy content
- `/src/pages/TermsOfService.jsx` - Terms of service content
- `/src/pages/SpecifiedCommercial.jsx` - Legal disclosure

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Outfit + Manrope)

## 📱 Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)

## 📧 Support

For questions or issues, contact: hiroyuki.katoh.office@gmail.com

## 📄 License

© 2026 加藤事務所 (Katoh Office). All rights reserved.

---

Built with ❤️ for the future of medical education.
