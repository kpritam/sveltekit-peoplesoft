const API_KEY = import.meta.env.VITE_API_KEY.toString();
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN.toString();
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID.toString();
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET.toString();
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID.toString();
const APP_ID = import.meta.env.VITE_APP_ID.toString();
const MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID.toString();
const DATABASE_URL = import.meta.env.VITE_DATABASE_URL.toString();

export const FIREBASE_CONFIG = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
	measurementId: MEASUREMENT_ID,
	databaseUrl: DATABASE_URL
};
