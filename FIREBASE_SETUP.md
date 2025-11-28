## 🔥 Firebase Setup & Data Upload Guide

### Step 1: Set Up Firebase Project

1. **Go to Firebase Console:**
   - Visit: https://console.firebase.google.com/
   - Click "Add project" or select existing project

2. **Enable Firestore Database:**
   - Go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode" for now
   - Select a location

3. **Enable Storage (for image uploads):**
   - Go to "Storage"
   - Click "Get started"
   - Choose "Start in test mode"

4. **Get Firebase Configuration:**
   - Go to Project Settings (gear icon)
   - Scroll to "Your apps" section
   - Click "Web" icon to add web app
   - Copy the Firebase config object

### Step 2: Update Your .env.local File

Replace the placeholder values in `.env.local` with your actual Firebase config:

```env
# Firebase Configuration (Replace with your actual config)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef
```

### Step 3: Upload Portfolio Data

Once you've updated `.env.local` with your Firebase config, run:

```bash
# Data is now managed through the admin panel
# No upload script needed - use /admin/dashboard to manage content
```

### Step 4: Set Firestore Security Rules

In Firebase Console, go to Firestore Database > Rules and update:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all documents
    match /{document=**} {
      allow read: if true;
      allow write: if true; // Change this later for production
    }
  }
}
```

### Step 5: Test Admin Panel

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to: http://localhost:3000/admin/login
3. Login with:
   - Username: `admin`
   - Password: `ayanpal01`

### Troubleshooting

**If upload fails:**
- Check your Firebase config in `.env.local`
- Ensure Firestore is enabled in Firebase Console
- Check Firestore security rules
- Make sure your internet connection is stable

**If login fails:**
- Clear browser cookies
- Restart development server
- Check console for errors

### What Gets Uploaded

✅ **Personal Information** (name, title, description, etc.)
✅ **Skills Categories** (Frontend, Backend, Mobile, Tools)
✅ **Projects** (5 sample projects with your actual data)
✅ **Experience** (Work experience entries)
✅ **Education** (Academic qualifications)
✅ **Contact Info** (Social media links)

After upload, you can manage all this data through the admin panel!