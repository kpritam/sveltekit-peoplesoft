<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error: error.message,
				status: status
			}
		};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/button.svelte';

	export let status;
	export let error;
</script>

<svelte:head>
	<title>{status}:{error}</title>
</svelte:head>

<div class="w-9/12 m-auto py-8 min-h-screen flex justify-center">
	<div class="text-center pt-8">
		<h1 class="text-9xl font-bold text-gray-700">{status}</h1>
		<h1 class="text-4xl font-medium py-8 text-gray-600">Oops!</h1>
		<h1 class="text-4xl font-medium py-8 text-gray-500">{error}.</h1>
		<Button name="Home" onClick={() => goto('/')} />
	</div>
</div>
