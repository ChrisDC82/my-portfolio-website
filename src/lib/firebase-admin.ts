import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getAuth, Auth } from 'firebase-admin/auth';

let adminApp: App | undefined;
let adminAuth: Auth | undefined;

// Lazy initialization function
function initializeAdminApp() {
  if (adminApp) {
    return adminApp;
  }

  // Check if we're in a build environment
  if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.FIREBASE_PRIVATE_KEY) {
    console.warn('Firebase Admin credentials not found. Admin SDK will not be initialized.');
    return null;
  }

  const firebaseAdminConfig = {
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  };

  adminApp = getApps().length === 0 ? initializeApp(firebaseAdminConfig) : getApps()[0];
  return adminApp;
}

// Lazy initialization function for auth
function getAdminAuth(): Auth {
  if (adminAuth) {
    return adminAuth;
  }

  const app = initializeAdminApp();
  if (!app) {
    throw new Error('Firebase Admin is not initialized. Please check your environment variables.');
  }

  adminAuth = getAuth(app);
  return adminAuth;
}

export { getAdminAuth };
export default initializeAdminApp;

