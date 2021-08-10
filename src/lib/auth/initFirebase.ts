/* eslint-disable @typescript-eslint/no-explicit-any */
import { FIREBASE_CONFIG } from '$lib/db/firebase/env';
import type firebase from 'firebase/app';

export async function initFirebase(): Promise<firebase.app.App> {
	if (typeof window !== 'undefined') {
		// You need to use firebase/app for the client side
		const fb: any = (await import('firebase/app')).default;
		await import('firebase/auth');
		if (fb.apps.length == 0) {
			fb.initializeApp(FIREBASE_CONFIG);
		}
		return fb;
	}

	const fb: any = await import('firebase');
	if (fb.apps.length == 0) {
		fb.initializeApp(FIREBASE_CONFIG);
		return;
	}
	return fb;
}
