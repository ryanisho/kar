# KAR Wiki

A collaborative knowledge base built with Next.js 15, TypeScript, and React by Katherine, Ashley, and Ryan.

## 🚀 Features

- **Personal Pages**: Individual pages for each team member showcasing their skills, projects, and blog posts
- **Projects Showcase**: Comprehensive project listings with detailed pages
- **Blog System**: Technical articles and tutorials on web development
- **Resources Library**: Curated collection of tools, libraries, and learning resources
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Dark Mode**: Automatic theme switching based on system preferences
- **Navigation**: Fixed navigation bar for easy access to all sections

## 📁 Project Structure

```
kar/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page with hero and quick links
│   │   ├── layout.tsx            # Root layout with fonts and metadata
│   │   ├── globals.css           # Global styles with dark mode support
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── projects/
│   │   │   ├── page.tsx          # Projects listing
│   │   │   └── kar-wiki/
│   │   │       └── page.tsx      # Sample project detail page
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing
│   │   │   └── getting-started-nextjs-15/
│   │   │       └── page.tsx      # Sample blog post
│   │   ├── resources/
│   │   │   └── page.tsx          # Resources page
│   │   ├── katherine/
│   │   │   └── page.tsx          # Katherine's profile
│   │   ├── ashley/
│   │   │   └── page.tsx          # Ashley's profile
│   │   └── ryan/
│   │       └── page.tsx          # Ryan's profile
│   └── components/
│       ├── Navigation.tsx        # Reusable navigation component
│       └── WikiCard.tsx          # Reusable card component
├── public/                       # Static assets
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Font**: Geist Sans & Geist Mono
- **Development**: ESLint, PostCSS

## 🏃 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd kar
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📄 Pages Overview

### Home Page (`/`)

- Large "KAR" hero section with clickable letters
- Welcome message and quick links to all main sections
- Grid of WikiCard components for easy navigation

### Team Pages (`/katherine`, `/ashley`, `/ryan`)

Each team member has a dedicated page featuring:

- About section with bio and links
- Skills & Expertise organized by category
- Recent Projects with links to project details
- Blog Posts authored by the team member
- Interests and hobbies
- Links to other team members

### About Page (`/about`)

- Wiki mission and values
- Technology stack information
- Team introduction
- Call to action for contributions

### Projects Page (`/projects`)

- Grid layout of all projects
- Each project card shows title, description, and link
- Individual project detail pages with:
  - Overview and key features
  - Technical stack
  - Challenges & solutions
  - Future enhancements

### Blog Page (`/blog`)

- List of blog posts with excerpts
- Author, date, and read time information
- Individual blog post pages with:
  - Full article content
  - Author attribution
  - Related posts

### Resources Page (`/resources`)

- Organized by category (Learning, Tools, Design, Community)
- External links to helpful resources
- Grid layout for easy browsing

## 🧩 Components

### Navigation Component

A fixed navigation bar that appears on all pages (except the home page initially) with links to:

- Home (KAR Wiki logo)
- About
- Projects
- Blog
- Resources

### WikiCard Component

A reusable card component used throughout the site for:

- Project listings
- Quick links on the home page
- Consistent hover effects and styling

## 🎨 Design Philosophy

- **Minimalism**: Clean, distraction-free interface
- **Readability**: Large, readable fonts with proper line-height
- **Consistency**: Reusable components for uniform look and feel
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Server-side rendering and optimized assets

## 🚧 Future Enhancements

- [ ] Search functionality
- [ ] Markdown support for blog posts
- [ ] Comments system
- [ ] Analytics integration
- [ ] RSS feed for blog
- [ ] i18n support
- [ ] More project detail pages
- [ ] More blog posts
- [ ] Admin panel for content management

## 👥 Team

- **Katherine** - Full-stack developer
- **Ashley** - Frontend developer & designer
- **Ryan** - Software engineer

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or reach out to any team member.

---

Built with ❤️ by the KAR team
