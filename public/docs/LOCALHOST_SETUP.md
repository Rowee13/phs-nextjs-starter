# Localhost Setup Guide for Decap CMS

This guide will walk you through setting up Decap CMS to work on your local development environment.

## Prerequisites

- Node.js 18+ installed
- Git repository initialized
- Dependencies installed (`npm install`)

## Step-by-Step Setup

### 1. Install Dependencies

Make sure all dependencies are installed:

```bash
npm install
```

### 2. Start the Decap Server

The Decap server is required for local CMS functionality. Open a terminal and run:

```bash
npx decap-server
```

**Expected output:**

```
Starting Decap Server...
Server listening on port 8081
```

**Important Notes:**

- Keep this terminal window open while developing
- The server runs on port 8081 by default
- If port 8081 is busy, the server will fail to start

### 3. Start Next.js Development Server

In a **separate terminal window**, start the Next.js development server:

```bash
npm run dev
```

**Expected output:**

```
▲ Next.js 15.3.1
- Local:        http://localhost:3000
- Ready in 2.1s
```

### 4. Access the CMS

Now you can access the CMS at:

**🌐 Website:** http://localhost:3000
**⚙️ CMS Admin:** http://localhost:3000/admin

## Local CMS Configuration

The `public/admin/config.yml` file is already configured for local development with:

```yaml
# Enable local backend for development
local_backend: true
```

This setting allows the CMS to work with your local Git repository without requiring authentication.

## Testing the CMS Locally

### 1. Access the Admin Interface

1. Go to http://localhost:3000/admin
2. You should see the Decap CMS interface
3. No login is required for local development

### 2. Create a Test Blog Post

1. Click on **"Blog Posts"** in the CMS
2. Click **"New Blog Posts"**
3. Fill in the form:
    - **Title:** "My Test Post"
    - **Date:** Select today's date
    - **Description:** "This is a test post"
    - **Author:** "Test Author"
    - **Tags:** Add some tags like "test", "blog"
    - **Body:** Write some markdown content

### 3. Save and Verify

1. Click **"Save"** in the CMS
2. Check your `content/posts/` directory
3. You should see a new `.md` file created
4. The file should contain frontmatter and your content

## Troubleshooting

### Issue: CMS Admin Page Shows "Loading..."

**Possible Causes:**

- Decap server is not running
- Port 8081 is blocked or in use
- Browser cache issues

**Solutions:**

1. Ensure `npx decap-server` is running in a separate terminal
2. Check if port 8081 is available:

    ```bash
    # Windows
    netstat -an | findstr :8081

    # macOS/Linux
    lsof -i :8081
    ```

3. Clear browser cache and reload
4. Check browser console for errors (F12 → Console)

### Issue: "Failed to load config.yml"

**Possible Causes:**

- Config file syntax error
- File path issues

**Solutions:**

1. Verify `public/admin/config.yml` exists
2. Check YAML syntax using an online YAML validator
3. Ensure proper indentation (use spaces, not tabs)

### Issue: Content Not Saving

**Possible Causes:**

- Git repository not initialized
- File permissions
- Decap server connection issues

**Solutions:**

1. Ensure you're in a Git repository:
    ```bash
    git status
    ```
2. Check file permissions in `content/` directory
3. Restart the Decap server

### Issue: Port 8081 Already in Use

**Solution:**
Kill the process using port 8081:

```bash
# Windows
netstat -ano | findstr :8081
taskkill /PID <PID_NUMBER> /F

# macOS/Linux
lsof -ti:8081 | xargs kill -9
```

## Development Workflow

### Recommended Terminal Setup

**Terminal 1 - Decap Server:**

```bash
npx decap-server
# Keep this running
```

**Terminal 2 - Next.js:**

```bash
npm run dev
# Keep this running
```

**Terminal 3 - Git Commands:**

```bash
# Use this for git operations, file management, etc.
git add .
git commit -m "Add new blog post"
```

### File Structure After Creating Content

After creating content through the CMS, your structure should look like:

```
content/
├── posts/
│   ├── 2024-01-01-welcome-to-my-blog.md
│   └── 2024-06-01-my-test-post.md
└── pages/
    └── about.md

public/
└── uploads/
    └── (uploaded images will appear here)
```

## Important Notes

### Security Warning

The local Decap server runs **without authentication** and should **NEVER** be used in production. It's designed only for local development.

### Git Integration

- All content changes are saved directly to your local files
- Changes are **not** automatically committed to Git
- You need to manually commit changes:
    ```bash
    git add content/
    git commit -m "Add new content via CMS"
    ```

### Editorial Workflow

The editorial workflow feature is **disabled** in local development mode. All content is saved directly without approval process.

## Next Steps

Once your local setup is working:

1. **Test Content Creation:** Create a few test posts and pages
2. **Test Image Uploads:** Try uploading images through the CMS
3. **Verify File Generation:** Check that markdown files are created correctly
4. **Test Build Process:** Run `npm run build` to ensure everything builds correctly
5. **Prepare for Deployment:** Follow the deployment guide when ready

## Quick Commands Reference

```bash
# Start local development
npx decap-server          # Terminal 1
npm run dev               # Terminal 2

# Test build
npm run build

# Check CMS
open http://localhost:3000/admin

# Check website
open http://localhost:3000
```

---

**Need Help?** Check the main README.md for additional troubleshooting or refer to the [Decap CMS Documentation](https://decapcms.org/docs/).
