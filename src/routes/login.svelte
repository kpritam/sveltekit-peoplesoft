<script lang="ts">
	import { goto } from '$app/navigation';

	import firebase from 'firebase/app';

	function loginWithGoogle() {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider);
	}

	const promise = loginWithGoogle();
</script>

{#await promise}
	<p>Loading...</p>
{:then}
	{goto('/')}
{:catch e}
	<p class="text-red-400 font-semibold p-4">Failed to login!</p>
	<p class="m-4 p-4">{e}</p>
{/await}
