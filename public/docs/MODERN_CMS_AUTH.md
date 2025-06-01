# Modern Authentication for Decap CMS (2025)

## 🚨 Netlify Identity Deprecation Notice

**Netlify Identity was officially deprecated on February 28, 2025**

- ✅ **Still functional** for existing sites
- ❌ **No new features** or bug fixes (security updates only)
- ❌ **Not recommended** for new projects
- ⚠️ **Plan migration** for long-term projects

---

## 🔄 **Modern Authentication Alternatives**

### **1. 🏆 DecapBridge (Recommended)**

**The most promising modern solution built specifically for Decap CMS**

#### **Why DecapBridge?**

- ✅ **Purpose-built** for Decap CMS
- ✅ **Production-ready** (hundreds of sites using it)
- ✅ **Free tier** for small sites (<10 users)
- ✅ **Self-hosted version** coming (open source)
- ✅ **No Git Gateway dependency**
- ✅ **Modern authentication** with better UX

#### **Setup DecapBridge**

1. **Visit**: [decapbridge.com](https://decapbridge.com/)
2. **Sign up** for an account
3. **Connect your repository**
4. **Update your config.yml**:

```yaml
backend:
    name: decap-bridge
    url: https://api.decapbridge.com
    auth_endpoint: auth
```

5. **Remove Netlify Identity** scripts from your site
6. **Deploy and test**

#### **Pricing**

- **Free**: Up to 10 users
- **Enterprise**: Custom pricing for larger teams
- **Self-hosted**: Coming soon (open source)

---

### **2. 🔧 Auth0 Extension (Netlify Official)**

**Netlify's official replacement using Auth0**

#### **Why Auth0?**

- ✅ **Official Netlify support**
- ✅ **Enterprise-grade** features
- ✅ **SSO, MFA, 20+ providers**
- ❌ **More complex setup**
- ❌ **Requires custom Git Gateway**

#### **Setup Auth0 Extension**

1. **Install Auth0 Extension**:

    - Go to Netlify Dashboard
    - Navigate to Integrations
    - Install Auth0 extension

2. **Configure Auth0**:

    - Create Auth0 application
    - Set up callback URLs
    - Configure scopes

3. **Set up custom Git Gateway**:

    - Deploy serverless Git Gateway
    - Configure with Auth0 tokens
    - Update environment variables

4. **Update config.yml**:

```yaml
backend:
    name: git-gateway
    auth_endpoint: auth
    api_root: https://your-auth0-gateway.netlify.app/.netlify/git
```

#### **Complexity**: High (requires custom Git Gateway setup)

---

### **3. 🛠️ Self-Hosted Solutions**

**Community-driven alternatives for advanced users**

#### **A. Node.js Git Gateway**

**Serverless Git Gateway implementation**

- **Repository**: [pspizzo/git-gateway-node](https://github.com/pspizzo/git-gateway-node)
- **Platform**: AWS Lambda, Netlify Functions
- **Features**: No database, environment-based users

**Setup**:

1. Clone the repository
2. Deploy to AWS Lambda or Netlify Functions
3. Configure environment variables for users
4. Update CMS config to point to your gateway

#### **B. PKCE OAuth2 Support**

**In development - allows any OAuth2 provider**

- **Status**: PR #7439 in Decap CMS
- **Features**: Works with any PKCE-compatible provider
- **Benefit**: Decouples from Netlify-specific services

---

### **4. 🔄 Alternative CMS Solutions**

**If you want to move away from Decap entirely**

#### **A. Pages CMS**

- **Website**: [pagescms.org](https://pagescms.org/)
- **Features**: GitHub-only, hosted auth, self-hostable
- **Pros**: Simple setup, good GitHub integration
- **Cons**: GitHub repositories only

#### **B. TinaCMS**

- **Website**: [tina.io](https://tina.io/)
- **Features**: Self-hostable, Auth.js integration
- **Model**: Paid cloud service + self-host option
- **Pros**: Modern architecture, good developer experience

#### **C. Forestry/TinaCMS**

- **Status**: Forestry migrated to TinaCMS
- **Features**: Visual editing, Git-based
- **Pricing**: Freemium model

---

## 📋 **Migration Recommendations**

### **For New Projects (2025)**

1. **🥇 First Choice: DecapBridge**

    - Easiest migration path
    - Built for Decap CMS
    - Free for small teams

2. **🥈 Second Choice: Auth0 Extension**

    - If you need enterprise features
    - Official Netlify support
    - More complex setup

3. **🥉 Third Choice: Alternative CMS**
    - Pages CMS for GitHub-only projects
    - TinaCMS for modern architecture

### **For Existing Projects**

#### **Immediate (2025)**

- ✅ **Continue using Netlify Identity** (still works)
- ✅ **Monitor security updates**
- ✅ **Plan migration timeline**

#### **Short-term (2025-2026)**

- 🔄 **Test DecapBridge** on staging
- 🔄 **Evaluate alternatives**
- 🔄 **Prepare migration plan**

#### **Long-term (2026+)**

- 🚀 **Migrate to chosen solution**
- 🚀 **Update documentation**
- 🚀 **Train team on new workflow**

---

## 🔧 **Configuration Examples**

### **Current (Netlify Identity)**

```yaml
backend:
    name: git-gateway
    branch: main
```

### **DecapBridge**

```yaml
backend:
    name: decap-bridge
    url: https://api.decapbridge.com
    auth_endpoint: auth
```

### **Auth0 Extension**

```yaml
backend:
    name: git-gateway
    auth_endpoint: auth
    api_root: https://your-auth0-gateway.netlify.app/.netlify/git
```

### **Self-hosted Git Gateway**

```yaml
backend:
    name: git-gateway
    api_root: https://your-custom-gateway.com
    auth_endpoint: auth
```

---

## 🚨 **Migration Checklist**

### **Before Migration**

- [ ] **Backup** current user data
- [ ] **Test** new solution on staging
- [ ] **Document** current workflow
- [ ] **Train** team on new system

### **During Migration**

- [ ] **Update** CMS configuration
- [ ] **Remove** Netlify Identity scripts
- [ ] **Test** authentication flow
- [ ] **Verify** content editing works

### **After Migration**

- [ ] **Monitor** for issues
- [ ] **Update** documentation
- [ ] **Inform** content editors
- [ ] **Plan** regular reviews

---

## 💡 **Best Practices**

### **Security**

- ✅ Use **invite-only** registration
- ✅ Enable **MFA** where available
- ✅ Regular **access reviews**
- ✅ Monitor **authentication logs**

### **Performance**

- ✅ Test **loading times**
- ✅ Optimize **script loading**
- ✅ Monitor **CMS responsiveness**

### **User Experience**

- ✅ **Train** content editors
- ✅ Provide **documentation**
- ✅ Set up **support channels**

---

## 📚 **Resources**

### **DecapBridge**

- [Official Website](https://decapbridge.com/)
- [Documentation](https://decapbridge.com/docs)

### **Auth0**

- [Netlify Auth0 Extension](https://www.netlify.com/integrations/auth0/)
- [Auth0 Documentation](https://auth0.com/docs)

### **Community Solutions**

- [Decap CMS Discussions](https://github.com/decaporg/decap-cms/discussions)
- [Node.js Git Gateway](https://github.com/pspizzo/git-gateway-node)

### **Alternative CMS**

- [Pages CMS](https://pagescms.org/)
- [TinaCMS](https://tina.io/)

---

## 🎯 **Conclusion**

**For most users, DecapBridge is the recommended path forward** as it:

- Provides the smoothest migration experience
- Is built specifically for Decap CMS
- Offers a free tier for small teams
- Has an active development roadmap

**The future of Decap CMS authentication is moving toward:**

- More flexible, provider-agnostic solutions
- Better developer experience
- Improved security and compliance
- Self-hosted options for privacy-conscious users

**Your current Netlify Identity setup will continue working**, giving you time to evaluate and migrate to the best solution for your needs.
