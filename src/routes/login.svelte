<script context="module" lang="ts">
	import { initFirebase } from '$lib/auth/initFirebase';
	import fbStore from '$lib/stores/fbStore';
	import { onMount } from 'svelte';
	export async function load() {
		await initFirebase();
		return {
			props: {}
		};
	}
</script>

<script lang="ts">
	import { browser } from '$app/env';
	// const promise = loginWithGoogle();
	onMount(async () => {
		if (browser) {
			const fbUi: any = await import('firebaseui');
			await import('firebaseui/dist/firebaseui.css');
			console.log(browser);
			console.log('Running in browser');

			const fb: any = $fbStore.fb;

			// FirebaseUI config.
			const uiConfig = {
				signInSuccessUrl: '/',
				signInOptions: [
					// Leave the lines as is for the providers you want to offer your users.
					fb.auth.GoogleAuthProvider.PROVIDER_ID,
					fb.auth.FacebookAuthProvider.PROVIDER_ID,
					fb.auth.TwitterAuthProvider.PROVIDER_ID,
					fb.auth.GithubAuthProvider.PROVIDER_ID,
					fb.auth.EmailAuthProvider.PROVIDER_ID,
					fb.auth.PhoneAuthProvider.PROVIDER_ID,
					fbUi.auth.AnonymousAuthProvider.PROVIDER_ID
				]
			};
			// Initialize the FirebaseUI Widget using Firebase.
			const ui = fbUi.auth.AuthUI.getInstance() || new fbUi.auth.AuthUI(fb.auth());
			// The start method will wait until the DOM is loaded.
			ui.start('#firebaseui-auth-container', uiConfig);
		}
	});
</script>

<div id="firebaseui-auth-container" />
