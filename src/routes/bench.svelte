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
	import EmployeeTable from '$lib/components/employeeTable.svelte';
	import type { Employee } from '$lib/models/employee';
	import { mkEmployeeRowFrom } from '$lib/models/employee';

	export let data: Employee[];

	$: tableData = data.map((e) => mkEmployeeRowFrom(e));
</script>

<svelte:head>
	<title>Bench</title>
</svelte:head>

<div class="m-6">
	<EmployeeTable data={tableData} />
</div>
