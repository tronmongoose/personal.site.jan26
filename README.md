# Terminal Portfolio

A retro terminal-themed portfolio site with a CLI aesthetic. Built with Next.js, TypeScript, and Tailwind CSS.

![Terminal Portfolio](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)

## Features

- **Full Terminal Aesthetic**: Authentic CLI/terminal look and feel with CRT scanline effects
- **Warm Amber Theme**: Customizable color scheme with amber/orange terminal colors
- **Click-Only Interaction**: No typing required - all navigation through clickable commands
- **RSS Feed Integration**: Automatically fetches latest articles from Medium RSS
- **Content Management**: Single source of truth in `content.ts` for easy updates
- **Responsive Design**: Works on desktop and mobile devices
- **Server-Side Rendering**: Fast load times with Next.js App Router
- **Type-Safe**: Full TypeScript support throughout

## Demo

Check out the live demo at [erikhuckle.com](https://www.erikhuckle.com)

## Quick Start

### Prerequisites

- Node.js 18.17 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tronmongoose/portfolio.site.jan26.git
cd portfolio.site.jan26
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Your Content

Edit `src/content/content.ts` to customize all content:

```typescript
export const content = {
  profile: {
    name: "Your Name",
    tagline: "Your tagline here"
  },
  links: {
    medium: "https://medium.com/@yourname",
    linkedin: "https://linkedin.com/in/yourname",
    twitter: "https://x.com/yourhandle",
    // Add or remove links as needed
  },
  writing: {
    rss: "https://medium.com/feed/@yourname",
    curated: [
      // Your curated articles
    ]
  },
  // ... more sections
}
```

### Customize Colors

Edit `src/app/globals.css` to change the color scheme:

```css
:root {
  --bg: #0B0E10;          /* Background color */
  --fg: #FFCC66;          /* Primary text color */
  --fg-dim: #996600;      /* Dimmed text */
  --muted: #7F8A96;       /* Muted text */
  --accent: #FFCC66;      /* Accent color */
  --border: #25303A;      /* Border color */
  --highlight: #332200;   /* Highlight background */
}
```

Popular terminal color schemes:
- **Amber**: `#FFCC66` (current)
- **Green**: `#33ff33` (classic terminal)
- **Blue**: `#00AAFF` (modern CLI)
- **Purple**: `#B084EB` (synthwave)

### Add Your Own Image

Replace `public/media/punk2845.png` with your own image, or remove the image section from `src/app/page.tsx`.

### Modify Sections

The main page structure is in `src/app/page.tsx`. Add, remove, or reorder sections as needed:

```tsx
<Section title="Your New Section">
  <OutputBlock>
    Your content here
  </OutputBlock>
</Section>
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page with terminal layout
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles and theme
│   ├── components/
│   │   └── terminal/          # Terminal UI components
│   ├── content/
│   │   └── content.ts         # Single source of truth for content
│   └── lib/
│       └── rss.ts             # RSS feed fetcher
├── public/
│   └── media/                 # Images and media files
└── tailwind.config.ts         # Tailwind configuration
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy
4. Connect your custom domain in Vercel settings

### Other Deployment Options

- **Netlify**: Connect GitHub repo and deploy
- **Cloudflare Pages**: Similar to Vercel
- **Self-hosted**: Build with `npm run build` and serve the `out` directory

## Building for Production

```bash
npm run build
npm start
```

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Unstyled components
- [Lucide Icons](https://lucide.dev/) - Icons

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

MIT License - feel free to use this for your own portfolio!

## Credits

Originally created by [Erik Huckle](https://www.erikhuckle.com) with assistance from Claude Code.

## Support

If you find this useful, consider:
- Starring the repository
- Sharing it with others
- Following [@Beyourhuckberry](https://x.com/Beyourhuckberry) on X/Twitter

---

Built with Terminal aesthetics in mind. Happy coding! 🖥️
