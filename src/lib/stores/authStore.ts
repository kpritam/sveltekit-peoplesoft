import { writable } from 'svelte/store';
import type firebase from 'firebase/app';

export type AuthStore = {
	isLoggedIn: boolean;
	user?: firebase.UserInfo;
	firebaseControlled: boolean;
};

const authStore = writable<AuthStore>({
	isLoggedIn: false,
	firebaseControlled: false
});

export default {
	subscribe: authStore.subscribe,
	set: authStore.set
};
