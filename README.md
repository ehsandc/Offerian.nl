# Offerian.nl - Dutch Affiliate Comparison Website

A production-ready MVP for comparing health insurance (zorgverzekering) and energy providers in the Netherlands. Built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Features

- **Comparison Pages**: Health insurance and energy provider comparisons
- **Cashback System**: Transparent affiliate commission sharing
- **Mobile-First Design**: Optimized for all devices
- **SEO-Ready**: Meta tags, sitemap, robots.txt
- **Legal Compliance**: Privacy policy, cookie policy, terms, and affiliate disclosure
- **Dutch Content**: Conversion-focused copy in Dutch

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
Offerian.NL/
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout with header/footer
│   ├── globals.css                 # Global styles
│   ├── zorgverzekering/           # Health insurance comparison
│   ├── energie/                    # Energy comparison
│   ├── cashback/                   # Cashback explanation
│   ├── over-ons/                   # About us & contact
│   ├── privacy/                    # Privacy policy
│   ├── cookies/                    # Cookie policy
│   ├── affiliate-disclaimer/       # Affiliate disclosure
│   ├── terms/                      # Terms & conditions
│   ├── robots.ts                   # SEO robots.txt
│   └── sitemap.ts                  # SEO sitemap
├── components/
│   ├── Header.tsx                  # Navigation header
│   ├── Footer.tsx                  # Footer with links
│   ├── Button.tsx                  # Reusable button component
│   ├── Card.tsx                    # Card component
│   ├── Badge.tsx                   # Badge component
│   ├── Container.tsx               # Container wrapper
│   └── AffiliateDisclaimer.tsx    # Affiliate notice
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies
```

## 🎨 Design System

### Colors

- **Primary (Blue)**: Main CTAs and links
- **Secondary (Green)**: Energy-related elements, success states
- **Accent (Yellow)**: Urgency messages, highlights

### Components

- `Button`: Primary, secondary, and outline variants
- `Card`: Hover effects for interactive cards
- `Badge`: Success, warning, info, and default variants
- `Container`: Responsive container with max-width

## 📄 Pages

1. **Home (/)**: Hero, category cards, how it works
2. **/zorgverzekering**: Health insurance comparison with filters
3. **/energie**: Energy provider comparison (fixed/variable)
4. **/cashback**: Transparent cashback explanation
5. **/over-ons**: About us, mission, contact form
6. **/privacy**: Privacy policy (AVG compliant)
7. **/cookies**: Cookie policy
8. **/affiliate-disclaimer**: Affiliate transparency
9. **/terms**: General terms and conditions

## 🔧 Configuration

### Before Going Live

1. **Update Company Information**:
   - Add KvK number in Footer and legal pages
   - Add BTW number in over-ons page
   - Add company address
   - Update contact email

2. **Configure Affiliate Links**:
   - Replace placeholder `#` links with real affiliate URLs
   - Set up tracking with Daisycon/TradeTracker/Awin
   - Configure cashback amounts

3. **Update Domain**:
   - Change `offerian.nl` references to your actual domain
   - Update sitemap.ts with your domain

4. **Legal Review**:
   - Have privacy policy reviewed by legal advisor
   - Review and customize all legal pages
   - Ensure AVG compliance

5. **Analytics & Tracking**:
   - Add Google Analytics
   - Implement cookie consent banner
   - Set up affiliate tracking pixels

## 🎯 SEO Features

- ✅ Semantic HTML with proper heading hierarchy
- ✅ Meta titles and descriptions on all pages
- ✅ OpenGraph tags for social sharing
- ✅ XML sitemap
- ✅ robots.txt
- ✅ Fast load times with Next.js optimization
- ✅ Mobile-responsive design
- ✅ Internal linking structure

## 📱 Responsive Design

- Mobile-first approach
- Sticky CTA on mobile comparison pages
- Hamburger menu for mobile navigation
- Touch-friendly buttons and cards

## 🚨 Important Notes

1. **Legal Templates**: All legal pages are templates and must be reviewed by a legal professional before going live.

2. **Placeholder Data**: Provider information, prices, and logos are placeholders. Update with real data.

3. **Affiliate Compliance**: Always display affiliate disclaimers prominently.

4. **Testing**: Test all affiliate links and tracking before launch.

5. **Performance**: Run Lighthouse audits and optimize images before production.

## 📈 Conversion Optimization

- Urgency messaging for December deadline
- Clear CTAs on every page
- Trust signals (independent, transparent)
- Social proof placeholders
- Cashback incentives
- Mobile-optimized forms

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Ready for Vercel, Netlify, or any Node.js host

## 📞 Support

For questions or issues, contact: info@offerian.nl

## 📝 License

Proprietary - All rights reserved

---

**Built for**: Dutch affiliate comparison market
**Target**: November-December switching season
**Focus**: Health insurance & energy providers
# Trigger Vercel rebuild
