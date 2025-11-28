# Firebase OAuth Domain Configuration Fix

## Issue
The following error is occurring:
```
The current domain is not authorized for OAuth operations. This will prevent signInWithPopup, signInWithRedirect, linkWithPopup and linkWithRedirect from working. Add your domain (www.ayanpal.tech) to the OAuth redirect domains list in the Firebase console -> Authentication -> Settings -> Authorized domains tab.
```

## Solution
You need to add your production domain to Firebase's authorized domains list.

### Steps to Fix:

1. **Go to Firebase Console**
   - Visit https://console.firebase.google.com/
   - Select your project: `portfolio-e408a`

2. **Navigate to Authentication Settings**
   - Click on "Authentication" in the left sidebar
   - Click on the "Settings" tab
   - Click on "Authorized domains"

3. **Add Your Production Domain**
   - Click "Add domain"
   - Enter: `www.ayanpal.tech`
   - Click "Add"

4. **Optional: Add Additional Domains**
   You may also want to add:
   - `ayanpal.tech` (without www)
   - `localhost` (for local development)

### Current Authorized Domains Should Include:
- `localhost` (for development)
- `www.ayanpal.tech` (for production)
- `ayanpal.tech` (alternative production domain)

### After Adding the Domain:
- The OAuth errors should disappear
- Authentication should work properly on the live site
- The NextAuth session issues should be resolved

### Note:
This change needs to be made in the Firebase Console as it's a server-side configuration that cannot be changed through code.