# Vercel Deployment Guide for P13

## Quick Deploy Command

```bash
cd c:\Users\adime\OneDrive\Desktop\p13
vercel --prod
```

This will:
1. Ask you to log in (browser will open) - **Approve once**
2. Link to your GitHub project
3. Confirm deployment
4. Show live URL in ~2-5 minutes

## What Deploys

✅ Full React frontend (frontend/dist)
✅ Node.js backend API (backend/server.js)
✅ All 6 interactive pages
✅ Search & filtering
✅ Animations & transitions
✅ Database-ready structure

## After Deployment

Your live site: https://adi-s-p13.vercel.app

## Environment Variables (Auto-configured)

- VITE_API_URL → your-vercel-url/api
- NODE_ENV → production
