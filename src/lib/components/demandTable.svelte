<script lang="ts">
	import * as api from '$lib/api';
	import Table from '$lib/components/table.svelte';
	import type { Demand } from '$lib/models/demand';

	export let data: Demand[];

	const headers = [
		'codeRequisition',
		'codePosition',
		'myHireId',
		'creationDate',
		'positionStartDate',
		'accountName',
		'codeCountry',
		'location',
		'roleList',
		'skillList',
		'projectName',
		'demandCreatorName',
		'demandRequestName',
		'originatorName',
		'recruiter',
		'recruitmentStartDate',
		'localGrade',
		'bu',
		'roleNotes'
	];
</script>

<div class="m-6">
	<Table
		{data}
		{headers}
		onSelectedRowDelete={(id) => api.deleteDemand(id)}
		onSelectedRowUpdate={(row) => api.updateDemand(row)}
		onSelectedRowsDelete={(rows) => api.deleteDemands(rows)}
	/>
</div>
