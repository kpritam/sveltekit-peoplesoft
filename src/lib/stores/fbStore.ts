import { writable } from 'svelte/store';
import type firebase from 'firebase/app';

export type FbApp = {
	fb: firebase.app.App | null;
};

const fbStore = writable<FbApp>({
	fb: null
});

export default {
	subscribe: fbStore.subscribe,
	set: fbStore.set
};
