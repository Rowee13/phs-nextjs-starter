# Decap CMS Deployment Checklist

## Pre-Deployment Setup

### ✅ Code Repository

- [ ] Code is pushed to GitHub/GitLab/Bitbucket
- [ ] Repository is public or accessible to Netlify
- [ ] All dependencies are installed and working locally

### ✅ Local Testing

- [ ] `npm run build` completes successfully
- [ ] Admin panel accessible at `/admin` (with local backend)
- [ ] Content creation works locally with `npx decap-server`

## Netlify Deployment

### 1. Site Deployment

- [ ] Connect repository to Netlify
- [ ] Set build command: `npm run build && npm run export`
- [ ] Set publish directory: `out`
- [ ] Deploy site successfully

### 2. Netlify Identity Setup

- [ ] Go to **Site Settings > Identity**
- [ ] Click **Enable Identity service**
- [ ] Choose registration preference:
    - [ ] **Invite only** (recommended for production)
    - [ ] **Open** (for testing only)
- [ ] Configure external providers (optional):
    - [ ] Google OAuth
    - [ ] GitHub OAuth
    - [ ] GitLab OAuth

### 3. Git Gateway Configuration

- [ ] Go to **Site Settings > Identity > Services**
- [ ] Click **Enable Git Gateway**
- [ ] Verify Git provider connection
- [ ] Set roles (leave blank for all users)

### 4. Site Configuration Updates

- [ ] Update `site_url` in `public/admin/config.yml`
- [ ] Update `display_url` in `public/admin/config.yml`
- [ ] Update `logo_url` if you have a custom logo
- [ ] Commit and push changes

### 5. CMS Access Testing

- [ ] Visit `https://your-site.netlify.app/admin`
- [ ] Sign up/login with Netlify Identity
- [ ] Verify CMS interface loads correctly
- [ ] Test creating a new blog post
- [ ] Verify content saves to repository
- [ ] Test editorial workflow (if enabled)

## Post-Deployment Configuration

### Content Management

- [ ] Create initial content through CMS
- [ ] Test image uploads
- [ ] Verify markdown rendering
- [ ] Test content publishing workflow

### User Management

- [ ] Invite team members (if using invite-only)
- [ ] Set up user roles and permissions
- [ ] Test user access levels

### Performance & SEO

- [ ] Verify static site generation works
- [ ] Test page load speeds
- [ ] Check meta tags and SEO elements
- [ ] Verify responsive design

## Troubleshooting Checklist

### CMS Not Loading

- [ ] Check browser console for errors
- [ ] Verify Netlify Identity is enabled
- [ ] Check Git Gateway configuration
- [ ] Verify config.yml syntax

### Authentication Issues

- [ ] Check Netlify Identity settings
- [ ] Verify external provider configuration
- [ ] Check user invitation status
- [ ] Test with different browsers

### Content Not Saving

- [ ] Verify Git Gateway permissions
- [ ] Check repository access rights
- [ ] Verify branch configuration in config.yml
- [ ] Check for merge conflicts

### Build Failures

- [ ] Check build logs in Netlify
- [ ] Verify Node.js version compatibility
- [ ] Check for missing dependencies
- [ ] Verify environment variables

## Security Considerations

### Production Security

- [ ] Use **Invite only** registration
- [ ] Enable external OAuth providers
- [ ] Set up proper user roles
- [ ] Review repository permissions

### Content Security

- [ ] Enable editorial workflow for content review
- [ ] Set up branch protection rules
- [ ] Configure content approval process
- [ ] Regular backup of content

## Maintenance

### Regular Tasks

- [ ] Monitor CMS usage and performance
- [ ] Update dependencies regularly
- [ ] Review and manage user access
- [ ] Backup content and configuration

### Updates

- [ ] Keep Decap CMS updated
- [ ] Monitor for security updates
- [ ] Test updates in staging environment
- [ ] Update documentation as needed

---

## Quick Reference

### Important URLs

- **Site**: `https://your-site.netlify.app`
- **CMS Admin**: `https://your-site.netlify.app/admin`
- **Netlify Dashboard**: `https://app.netlify.com`

### Key Files

- `public/admin/config.yml` - CMS configuration
- `netlify.toml` - Netlify build settings
- `next.config.ts` - Next.js configuration

### Support Resources

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway Documentation](https://docs.netlify.com/visitor-access/git-gateway/)

---

**Note**: Keep this checklist updated as your deployment process evolves!
