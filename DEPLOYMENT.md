# Deployment Guide

## Local Development

1. Copy `config.example.js` to `config.js`:
   ```bash
   cp config.example.js config.js
   ```

2. Add your Web3Forms access key to `config.js`

3. Open `index.html` in your browser

## Vercel Deployment (Recommended)

### Step 1: Set Environment Variable in Vercel

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add a new variable:
   - **Name:** `WEB3_ACCESS_KEY`
   - **Value:** `your_web3forms_access_key_here`
   - **Environments:** Production (and Development if needed)

### Step 2: Configure Build Command

1. In Vercel project → **Settings** → **Build & Development Settings**
2. Set **Build Command** to: `node build.js`
3. Leave **Output Directory** empty (this is a static site)

### Step 3: Deploy

Push your changes to GitHub and Vercel will automatically:
1. Run `node build.js` which reads the `WEB3_ACCESS_KEY` environment variable
2. Generate `config.js` with your access key
3. Deploy the site

```
┌─────────────────────────────────────┐
│  Vercel receives your push          │
│  ↓                                  │
│  Runs: node build.js                │
│  ↓                                  │
│  Reads WEB3_ACCESS_KEY env var      │
│  ↓                                  │
│  Generates config.js                │
│  ↓                                  │
│  Deploys your site                  │
└─────────────────────────────────────┘
```

## Troubleshooting

**If contact form still doesn't work:**

1. Check Vercel logs:
   - Go to **Deployments** → Click latest → **View Logs**
   - Look for `config.js generated successfully`

2. Verify environment variable:
   - Settings → Environment Variables → Confirm `WEB3_ACCESS_KEY` is set

3. Clear browser cache and reload

## Security Notes

- `config.js` is in `.gitignore` - it will never be committed
- `build.js` generates `config.js` at build time using the environment variable
- Your Web3Forms access key is **never** in the repository
- Environment variables are only visible to your Vercel project
