## 🔐 Quick Login Test

### Step 1: Test Login Locally
1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access Admin Panel:**
   - Go to: http://localhost:3000/admin/login
   - Username: `admin`
   - Password: `ayanpal01`

### Step 2: Set Up Firebase (Optional)
If you want to use Firebase for data storage:

1. **Create Firebase Project:**
   - Go to https://console.firebase.google.com/
   - Create new project
   - Enable Firestore Database
   - Enable Storage

2. **Add Firebase Config to .env.local:**
   ```env
   # Replace with your actual Firebase config
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

3. **Upload Portfolio Data:**
   ```bash
   node scripts/migrate-data.js
   ```

### Step 3: Current Login Credentials
- **Username:** admin
- **Password:** ayanpal01

### Troubleshooting
If login still fails:
1. Check browser console for errors
2. Ensure .env.local file exists with correct values
3. Restart the development server
4. Clear browser cookies

The admin system requires Firebase to function. All portfolio data is stored in Firebase Firestore and managed through the admin dashboard.