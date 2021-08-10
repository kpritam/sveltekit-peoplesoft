<script context="module" lang="ts">
	import { initFirebase } from '$lib/auth/initFirebase';
	export async function load() {
		const fb = await initFirebase();
		return {
			props: {
				fb: fb
			}
		};
	}
</script>

<script lang="ts">
	import firebase from 'firebase/app';
	import { onMount } from 'svelte';
	import 'firebase/auth';
	import Nav from '$lib/components/nav/index.svelte';
	import '../app.postcss';
	import authStore from '$lib/stores/authStore';
	import fbStore from '$lib/stores/fbStore';
	export let fb: firebase.app.App;

	onMount(() => {
		fbStore.set({ fb });
		firebase.auth().onAuthStateChanged((user) => {
			authStore.set({
				isLoggedIn: user !== null,
				user,
				firebaseControlled: true
			});
		});
	});
</script>

<div>
	<Nav />
	<slot />
</div>
