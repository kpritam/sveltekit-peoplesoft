const API_KEY = import.meta.env.VITE_API_KEY as string;
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN as string;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID as string;
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET as string;
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID as string;
const APP_ID = import.meta.env.VITE_APP_ID as string;
const MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID as string;
const DATABASE_URL = import.meta.env.VITE_DATABASE_URL as string;

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
