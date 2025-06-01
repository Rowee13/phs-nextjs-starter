# DecapBridge Implementation Guide

## 🚀 Complete Setup Guide for DecapBridge with Decap CMS

DecapBridge is the modern authentication solution specifically built for Decap CMS, replacing deprecated Netlify Identity.

---

## 📋 **Prerequisites**

- ✅ **Existing Decap CMS** setup
- ✅ **GitHub repository** with your site
- ✅ **Netlify deployment** (or any static hosting)
- ✅ **Admin access** to your repository

---

## 🔧 **Step 1: Sign Up for DecapBridge**

### **1.1 Create Account**

1. **Visit**: [decapbridge.com](https://decapbridge.com/)
2. **Click**: "Get Started" or "Sign Up"
3. **Choose**: Authentication method (GitHub recommended)
4. **Complete**: Account verification

### **1.2 Create New Project**

1. **Dashboard**: Click "New Project"
2. **Project Name**: Enter your site name
3. **Repository**: Connect your GitHub repository
4. **Branch**: Select your main branch (usually `main` or `master`)

---

## 🔧 **Step 2: Configure Repository Access**

### **2.1 GitHub Integration**

DecapBridge will request permissions to:

- ✅ **Read repository** content
- ✅ **Write to repository** (for content changes)
- ✅ **Create pull requests** (for editorial workflow)

**Grant these permissions** when prompted.

### **2.2 Repository Settings**

In DecapBridge dashboard:

1. **Repository URL**: Verify it's correct
2. **Content Directory**: Set to your content folder (e.g., `content/`)
3. **Media Directory**: Set to your media folder (e.g., `public/uploads/`)

---

## 🔧 **Step 3: Update CMS Configuration**

### **3.1 Backup Current Config**

First, backup your current `public/admin/config.yml`:

```bash
cp public/admin/config.yml public/admin/config.yml.backup
```

### **3.2 Update config.yml**

Replace your backend configuration:

```yaml
# OLD (Netlify Identity)
# backend:
#   name: git-gateway
#   branch: main

# NEW (DecapBridge)
backend:
    name: decap-bridge
    url: https://api.decapbridge.com
    auth_endpoint: auth
    branch: main

# Keep your existing configuration
local_backend: true # For local development

media_folder: 'public/uploads'
public_folder: '/uploads'

site_url: https://cms-decap-next-blog.netlify.app
display_url: https://cms-decap-next-blog.netlify.app

publish_mode: editorial_workflow
show_preview_links: true

# Your existing collections configuration...
collections:
    - name: 'blog'
      label: 'Blog Posts'
      folder: 'content/posts'
      create: true
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
      preview_path: 'blog/{{slug}}'
      fields:
          - {
                label: 'Layout',
                name: 'layout',
                widget: 'hidden',
                default: 'blog',
            }
          - { label: 'Title', name: 'title', widget: 'string' }
          - { label: 'Publish Date', name: 'date', widget: 'datetime' }
          - {
                label: 'Featured Image',
                name: 'thumbnail',
                widget: 'image',
                required: false,
            }
          - { label: 'Description', name: 'description', widget: 'text' }
          - {
                label: 'Author',
                name: 'author',
                widget: 'string',
                default: 'Admin',
            }
          - { label: 'Tags', name: 'tags', widget: 'list', default: ['blog'] }
          - { label: 'Body', name: 'body', widget: 'markdown' }
```

---

## 🔧 **Step 4: Remove Netlify Identity**

### **4.1 Remove Identity Scripts**

Remove Netlify Identity widget from your layout files:

**From `app/layout.tsx`** (or your root layout):

```tsx
// REMOVE these lines:
// <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

// REMOVE the identity initialization script:
// <script>
//   if (window.netlifyIdentity) {
//     window.netlifyIdentity.on("init", user => {
//       if (!user) {
//         window.netlifyIdentity.on("login", () => {
//           document.location.href = "/admin/";
//         });
//       }
//     });
//   }
// </script>
```

### **4.2 Clean Up Admin Page**

Update `app/admin/page.tsx` to remove Netlify Identity references:

```tsx
'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function AdminPage() {
    const [cmsLoaded, setCmsLoaded] = useState(false)

    return (
        <>
            {/* Decap CMS - No additional auth scripts needed */}
            <Script
                src='https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js'
                strategy='afterInteractive'
                onLoad={() => {
                    console.log('Decap CMS loaded with DecapBridge')
                    setCmsLoaded(true)
                }}
            />

            {/* Loading state */}
            {!cmsLoaded && (
                <div className='flex items-center justify-center min-h-screen bg-gray-50'>
                    <div className='text-center'>
                        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
                        <p className='text-gray-600'>
                            Loading Content Management System...
                        </p>
                        <Link
                            href='/'
                            className='inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                        >
                            ← Back to Homepage
                        </Link>
                    </div>
                </div>
            )}

            {/* Homepage button (your existing implementation) */}
            {cmsLoaded && (
                <style jsx>{`
                    .homepage-button {
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        z-index: 10000;
                        background: #1976d2;
                        color: white;
                        border: none;
                        border-radius: 8px;
                        padding: 12px 20px;
                        font-size: 14px;
                        font-weight: 500;
                        cursor: pointer;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                        transition: all 0.2s ease;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }
                    .homepage-button:hover {
                        background: #1565c0;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    }
                `}</style>
            )}

            {/* CMS will mount here */}
            <div id='nc-root'></div>
        </>
    )
}
```

---

## 👥 **Step 5: Configure User Access**

### **5.1 Add Users in DecapBridge Dashboard**

1. **Navigate**: DecapBridge project dashboard
2. **Go to**: "Users" or "Team" section
3. **Click**: "Add User" or "Invite User"

### **5.2 User Configuration Options**

For each user, configure:

#### **Basic Information**

- **Email**: User's email address
- **Name**: Display name
- **Role**: Admin, Editor, or Viewer

#### **Access Permissions**

- **Repository Access**: Read/Write permissions
- **Content Collections**: Which collections they can edit
- **Workflow Permissions**: Can publish or draft only

#### **Authentication Method**

- **GitHub**: Link to their GitHub account
- **Email/Password**: Traditional login
- **Google**: OAuth with Google account

### **5.3 Role-Based Access Control**

#### **Admin Role**

- ✅ **Full access** to all content
- ✅ **User management** permissions
- ✅ **Site configuration** access
- ✅ **Publish/unpublish** content

#### **Editor Role**

- ✅ **Create/edit** content
- ✅ **Upload** media files
- ✅ **Submit for review** (editorial workflow)
- ❌ **Cannot publish** without approval

#### **Viewer Role**

- ✅ **View** content and drafts
- ❌ **Cannot edit** or create content
- ❌ **Cannot publish** content

---

## 🔧 **Step 6: Deploy and Test**

### **6.1 Deploy Changes**

1. **Commit** your configuration changes:

```bash
git add public/admin/config.yml app/admin/page.tsx app/layout.tsx
git commit -m "Migrate from Netlify Identity to DecapBridge"
git push origin main
```

2. **Deploy** to your hosting platform (Netlify, Vercel, etc.)

### **6.2 Test Authentication**

1. **Visit**: `https://your-site.com/admin`
2. **Click**: "Login with DecapBridge"
3. **Authenticate**: Using your configured method
4. **Verify**: You can access the CMS interface

### **6.3 Test Content Management**

1. **Create**: A test blog post
2. **Save**: As draft (if using editorial workflow)
3. **Verify**: Changes appear in your repository
4. **Publish**: The content (if you have permissions)

---

## 🔧 **Step 7: Advanced Configuration**

### **7.1 Custom Domain (Optional)**

If you have a custom domain for your CMS:

1. **DecapBridge Dashboard**: Go to project settings
2. **Custom Domain**: Add your domain
3. **DNS Configuration**: Follow provided instructions
4. **SSL Certificate**: Will be auto-generated

### **7.2 Webhook Configuration**

Set up webhooks for build triggers:

1. **DecapBridge Dashboard**: Go to "Webhooks"
2. **Add Webhook**: Enter your build hook URL
3. **Events**: Select "Content Published"
4. **Test**: Webhook functionality

### **7.3 API Access (Advanced)**

For programmatic access:

1. **Generate**: API key in dashboard
2. **Configure**: Environment variables
3. **Use**: DecapBridge API for custom integrations

---

## 🚨 **Troubleshooting**

### **Common Issues**

#### **"Failed to load config.yml"**

- ✅ **Check**: File path is `public/admin/config.yml`
- ✅ **Verify**: YAML syntax is valid
- ✅ **Ensure**: File is deployed correctly

#### **"Authentication failed"**

- ✅ **Verify**: DecapBridge project is configured
- ✅ **Check**: Repository permissions are granted
- ✅ **Confirm**: User is added to project

#### **"Cannot save content"**

- ✅ **Check**: User has write permissions
- ✅ **Verify**: Repository access is working
- ✅ **Ensure**: Branch exists and is accessible

#### **"Homepage button not working"**

- ✅ **Check**: Button styles are loaded
- ✅ **Verify**: CMS has finished loading
- ✅ **Ensure**: No JavaScript errors in console

### **Debug Steps**

1. **Browser Console**: Check for error messages
2. **Network Tab**: Look for failed requests
3. **DecapBridge Logs**: Check dashboard for errors
4. **Repository**: Verify commits are being created

---

## 💰 **Pricing Information**

### **Free Tier**

- ✅ **Up to 10 users**
- ✅ **Unlimited repositories**
- ✅ **Basic support**
- ✅ **Standard features**

### **Enterprise Tier**

- ✅ **Unlimited users**
- ✅ **Priority support**
- ✅ **Advanced features**
- ✅ **Custom integrations**
- ✅ **SLA guarantees**

### **Self-Hosted (Coming Soon)**

- ✅ **Open source**
- ✅ **Full control**
- ✅ **No user limits**
- ✅ **Custom deployment**

---

## 📚 **Additional Resources**

### **Documentation**

- [DecapBridge Docs](https://decapbridge.com/docs)
- [Decap CMS Docs](https://decapcms.org/docs/)
- [GitHub Integration Guide](https://decapbridge.com/docs/github)

### **Support**

- [DecapBridge Support](https://decapbridge.com/support)
- [Community Discord](https://discord.gg/decap)
- [GitHub Issues](https://github.com/decaporg/decap-cms/issues)

### **Migration Guides**

- [From Netlify Identity](https://decapbridge.com/docs/migrate-netlify)
- [From Forestry](https://decapbridge.com/docs/migrate-forestry)
- [From Other CMS](https://decapbridge.com/docs/migrate-other)

---

## ✅ **Setup Checklist**

- [ ] **DecapBridge account** created
- [ ] **Project configured** with repository
- [ ] **CMS config.yml** updated with DecapBridge backend
- [ ] **Netlify Identity scripts** removed
- [ ] **Admin page** updated
- [ ] **Users added** to project
- [ ] **Permissions configured** for each user
- [ ] **Changes deployed** to production
- [ ] **Authentication tested** successfully
- [ ] **Content creation** tested
- [ ] **Homepage button** working correctly

---

## 🎉 **You're Done!**

Your Decap CMS is now powered by DecapBridge! You have:

- ✅ **Modern authentication** system
- ✅ **User management** capabilities
- ✅ **Role-based access** control
- ✅ **Future-proof** solution
- ✅ **Better user experience**

**Next Steps:**

1. **Train your team** on the new login process
2. **Monitor** the system for any issues
3. **Explore** advanced DecapBridge features
4. **Plan** for future content workflows

**Need help?** Check the troubleshooting section or reach out to DecapBridge support!
