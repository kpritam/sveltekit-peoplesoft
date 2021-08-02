import { FIREBASE_CONFIG } from '$lib/db/firebase/env';

export async function initFirebase(): Promise<void> {
	if (typeof window !== 'undefined') {
		// You need to use firebase/app for the client side
		const fb: any = (await import('firebase/app')).default;
		await import('firebase/auth');
		if (fb.apps.length == 0) {
			fb.initializeApp(FIREBASE_CONFIG);
		}
		return;
	}

	const fb: any = await import('firebase');
	if (fb.apps.length == 0) {
		fb.initializeApp(FIREBASE_CONFIG);
		return;
	}
}
