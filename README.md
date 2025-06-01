# Next.js Blog with Decap CMS

A modern blog built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Decap CMS for content management.

## Features

- ✅ **Next.js 15** with React 19 and TypeScript
- ✅ **Decap CMS** for content management
- ✅ **Tailwind CSS** for styling
- ✅ **Static Site Generation** for optimal performance
- ✅ **Netlify Identity** for authentication
- ✅ **Git-based content storage**
- ✅ **Editorial workflow** support
- ✅ **Image uploads** and media management
- ✅ **Markdown** content support

## Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd phs-nextjs-starter
npm install
```

### 2. Local Development with CMS

**📖 For detailed localhost setup instructions, see [LOCALHOST_SETUP.md](./LOCALHOST_SETUP.md)**

Quick start:

```bash
# Terminal 1: Start Decap server
npx decap-server

# Terminal 2: Start Next.js dev server
npm run dev
```

Then visit:

- **Website**: http://localhost:3000
- **CMS Admin**: http://localhost:3000/admin

### 3. Production Deployment

**📖 For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

#### Deploy to Netlify

1. **Push to GitHub**: Ensure your code is in a GitHub repository

2. **Deploy to Netlify**:

    - Connect your GitHub repo to Netlify
    - Build command: `npm run build && npm run export`
    - Publish directory: `out`

3. **Enable Netlify Identity**:

    - Go to **Site Settings > Identity**
    - Click **Enable Identity**
    - Under **Registration preferences**, choose **Invite only** (recommended)
    - Optionally enable external providers (Google, GitHub, etc.)

4. **Enable Git Gateway**:

    - Go to **Site Settings > Identity > Services**
    - Click **Enable Git Gateway**
    - This allows CMS users to edit content without direct Git access

5. **Update Configuration**:
    - Update `site_url` in `public/admin/config.yml` with your Netlify URL
    - Update repository settings if needed

## Project Structure

```
├── app/
│   ├── admin/              # CMS admin page & layout
│   ├── layout.tsx          # Root layout with Netlify Identity
│   └── ...
├── content/
│   ├── posts/              # Blog posts (managed by CMS)
│   └── pages/              # Static pages (managed by CMS)
├── lib/
│   └── posts.ts            # Utility functions for content
├── public/
│   ├── admin/
│   │   ├── config.yml      # CMS configuration
│   │   └── index.html      # CMS admin interface
│   └── uploads/            # Media uploads
├── scripts/
│   └── test-localhost.js   # Setup verification script
├── netlify.toml            # Netlify configuration
├── next.config.ts          # Next.js configuration
├── LOCALHOST_SETUP.md      # Local development guide
├── DEPLOYMENT.md           # Deployment checklist
├── TROUBLESHOOTING.md      # Error resolution guide
└── SETUP_SUMMARY.md        # Complete setup overview
```

## Content Management

### Creating Blog Posts

1. Visit `/admin` on your deployed site (or localhost)
2. Log in with Netlify Identity (production) or access directly (localhost)
3. Go to **Collections > Blog Posts**
4. Click **"New Blog Posts"**
5. Fill in the fields and publish

### Content Structure

Blog posts include:

- **Title**: Post title
- **Date**: Publication date
- **Description**: Post excerpt
- **Author**: Post author
- **Tags**: Post categories
- **Featured Image**: Optional thumbnail
- **Body**: Markdown content

## Configuration

### CMS Configuration (`public/admin/config.yml`)

Key settings:

- **Backend**: Git Gateway for authentication
- **Local Backend**: Enabled for local development
- **Collections**: Blog posts and pages
- **Media**: Upload folder configuration
- **Workflow**: Editorial workflow settings

### Next.js Configuration (`next.config.ts`)

Configured for:

- Static export (`output: 'export'`)
- Image optimization disabled for static hosting
- Trailing slashes for Netlify compatibility

### Netlify Configuration (`netlify.toml`)

Includes:

- Build settings
- Admin redirects
- Security headers

## Development

### Local CMS Development

**📖 See [LOCALHOST_SETUP.md](./LOCALHOST_SETUP.md) for complete instructions**

The `local_backend: true` setting in `config.yml` enables local development:

1. Start the Decap server: `npx decap-server`
2. Start Next.js: `npm run dev`
3. Access CMS at `http://localhost:3000/admin`

**Note**: The Decap server runs an unauthenticated Express server on port 8081. Only use for local development.

### Content Utilities

Use the functions in `lib/posts.ts` to:

- `getSortedPostsData()`: Get all posts sorted by date
- `getPostData(slug)`: Get individual post data
- `getAllPostSlugs()`: Get all post slugs for static generation
- `getPageData(pageName)`: Get page content

## Troubleshooting

**📖 For comprehensive troubleshooting, see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)**

### React 19 Compatibility

This project uses package overrides to ensure Decap CMS works with React 19:

```json
"overrides": {
  "decap-cms-app": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

### Build Issues

If you encounter build issues:

1. Clear Next.js cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npm run lint`

### CMS Access Issues

**For localhost issues**: See [LOCALHOST_SETUP.md](./LOCALHOST_SETUP.md)

**For production issues**:

1. Ensure Netlify Identity is enabled
2. Check that Git Gateway is configured
3. Verify the repository permissions
4. Check browser console for errors

### Common Error: ENOENT pages-manifest.json

This error has been **resolved** in the current setup. If you encounter it:

1. Clean build: `rm -rf .next out && npm run build`
2. See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for details

## Key Updates for Next.js 15

### Metadata API

- Uses Next.js 15 `metadata` API instead of deprecated `next/head`
- Admin route has dedicated layout for proper metadata handling
- Follows App Router conventions

### Modern React Features

- Compatible with React 19
- Uses proper TypeScript interfaces
- Follows current Next.js best practices

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with both dev server and CMS
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For issues related to:

- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **Decap CMS**: [Decap CMS Documentation](https://decapcms.org/docs/)
- **Netlify**: [Netlify Documentation](https://docs.netlify.com/)

---

**Happy blogging!** 🚀
