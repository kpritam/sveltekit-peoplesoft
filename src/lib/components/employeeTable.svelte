<script lang="ts">
	import * as api from '$lib/api';
	import Table from '$lib/components/table.svelte';
	import type { EmployeeRow } from '$lib/models/employee';

	export let data: EmployeeRow[];
</script>

<div class="m-6">
	<Table
		{data}
		headers={['name', 'designation', 'region', 'location', 'empType', 'primarySkills']}
		onSelectedRowDelete={(id) => api.deleteEmployeeId(id)}
		onSelectedRowUpdate={(row) => api.updateEmployee(row)}
		onSelectedRowsDelete={(rows) => api.deleteEmployees(rows)}
	/>
</div>
