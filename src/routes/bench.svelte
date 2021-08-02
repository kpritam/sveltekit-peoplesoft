<script context="module">
	export async function load({ fetch }) {
		const url = `/api/users`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					data: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	import Table from '$lib/components/table.svelte';
	import type { Employee } from '$lib/models';

	export let data: Employee[];
</script>

<svelte:head>
	<title>Bench</title>
</svelte:head>

<div class="m-6">
	<Table {data} />
</div>
