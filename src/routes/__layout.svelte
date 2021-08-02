<script context="module" lang="ts">
	import { initFirebase } from '../firebase/auth/initFirebase';
	export async function load() {
		await initFirebase();
		return {
			props: {}
		};
	}
</script>

<script lang="ts">
	import Nav from '../components/nav.svelte';
	import '../app.postcss';
	import firebase from 'firebase/app';
	import 'firebase/auth';
	import { onMount } from 'svelte';
	import authStore from '../stores/authStore';

	onMount(() => {
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
