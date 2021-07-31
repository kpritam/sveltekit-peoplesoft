<script context="module">
	export async function load({ fetch }) {
		const url = `/api/benchList.json`;
		const res = await fetch(url);

		if (res.ok) {
			console.log(res);
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
	import Table from '../components/table.svelte';
	import type { BenchList } from '../types';

	export let data: BenchList;
</script>

<svelte:head>
	<title>Bench</title>
</svelte:head>

<div class="m-6">
	<Table {data} />
</div>
