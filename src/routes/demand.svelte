<script context="module">
	export async function load({ fetch }) {
		const url = `/api/demands`;
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
	import DemandTable from '$lib/components/demandTable.svelte';

	import type { Demand } from '$lib/models/demand';

	export let data: Demand[];
</script>

<svelte:head>
	<title>Demands</title>
</svelte:head>

<div class="m-6">
	<DemandTable {data} />
</div>
