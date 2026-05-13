# Deployment Guide

## Local Development

1. Copy `config.example.js` to `config.js`:
   ```bash
   cp config.example.js config.js
   ```

2. Add your Web3Forms access key to `config.js`

3. Open `index.html` in your browser

## Vercel Deployment

### Method 1: Add config.js After Deployment (Easiest)

1. Deploy to Vercel normally
2. After deployment, go to your Vercel project → **Settings** → **Files**
3. Click **Add** and create `config.js` with your key:
   ```javascript
   const CONFIG = {
       web3formsAccessKey: 'your_actual_key_here'
   };
   ```

### Method 2: Use Environment Variables (Recommended for Security)

1. In your Vercel project → **Settings** → **Environment Variables**
2. Add variable: `WEB3_ACCESS_KEY` = `your_web3forms_access_key`
3. In the deployment, the script will automatically use `window.__WEB3_ACCESS_KEY__`

> Note: This requires a build step. For pure static HTML, Method 1 is simpler.

### Method 3: Create config.js During Build (With Build Process)

If you set up a package.json with a build script, you can generate `config.js` dynamically using Vercel environment variables.

## Security Notes

- `config.js` is in `.gitignore` - it will never be committed
- Your Web3Forms access key should never be in version control
- Always keep `.env` and `config.js` in `.gitignore`
