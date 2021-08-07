<script lang="ts">
	import type { Employee } from '$lib/models';
	import Delete from '$lib/components/icons/delete.svelte';
	import Edit from './icons/edit.svelte';
	import authStore from '$lib/stores/authStore';
	export let data: Employee[];

	let selectAllCheckbox = false;
	let selectedEmployees: Employee[] = [];
	$: loggedIn = $authStore.isLoggedIn;

	$: console.log(selectedEmployees.map((e) => e.id).join(', '));

	function selectAllEmployees() {
		selectedEmployees = data;
	}

	function resetSelection() {
		selectedEmployees = [];
	}

	function onSelectAllChanged() {
		selectAllCheckbox ? selectAllEmployees() : resetSelection();
	}

	function selectRow(employee: Employee) {
		const isSelected = selectedEmployees.includes(employee);
		if (isSelected) {
			selectedEmployees = selectedEmployees.filter((e) => e.id !== employee.id);
			selectAllCheckbox = false;
		} else {
			selectedEmployees = [...selectedEmployees, employee];
		}
	}

	function deleteSelectedEmployees() {
		selectedEmployees.forEach(({ id }) => {
			console.log(`Deleting employee id: ${id}`);
			fetch('/api/user/' + id, { method: 'DELETE' }).then(() => {
				// TODO update when all the request are done
				data = data.filter((e) => e.id !== id);
			});
		});
	}

	function deleteEmployeeId(id: string) {
		console.log(`Deleting employee id: ${id}`);
		fetch('/api/user/' + id, { method: 'DELETE' }).then(() => {
			data = data.filter((e) => e.id !== id);
		});
	}

	const thead = 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider';
	const unprotectedHeaders = [
		'Name',
		'Designation',
		'Region',
		'Location',
		'EmpType',
		'Primary Skills'
	];

	const protectedHeaders = [...unprotectedHeaders, 'Actions'];
	$: headers = loggedIn ? protectedHeaders : unprotectedHeaders;
</script>

{#if loggedIn}
	<div class="flex justify-start p-2 m-2">
		<button
			on:click={() => deleteSelectedEmployees()}
			class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
		>
			<Delete />
		</button>
	</div>
{/if}
<div class="flex flex-col">
	<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
			<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
				<table class="min-w-full divide-y divide-gray-200">
					<thead class="bg-gray-50">
						<tr>
							<th scope="col" class={thead}>
								{#if loggedIn}
									<input
										type="checkbox"
										class="mr-4 items-center"
										bind:checked={selectAllCheckbox}
										on:change={() => onSelectAllChanged()}
									/>
								{/if}
								{headers[0]}
							</th>
							{#each headers.slice(1) as header}
								<th scope="col" class={thead}>
									{header}
								</th>
							{/each}
							<th scope="col" class="relative px-6 py-3">
								<span class="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody class="bg-white divide-y divide-gray-200">
						{#each data as row, index}
							<tr>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="flex items-center">
										{#if loggedIn}
											<input
												type="checkbox"
												class="mr-4 items-center"
												on:change={(e) => selectRow(row)}
												checked={selectAllCheckbox || selectedEmployees.includes(row)}
											/>
										{/if}
										<div class="flex-shrink-0 h-10 w-10">
											<img class="h-10 w-10 rounded-full" src={row.imgUrl} alt="" />
										</div>
										<div class="ml-4">
											<div class="text-sm font-medium text-gray-900">
												{row.name}
											</div>
										</div>
									</div>
								</td>

								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{row.designation}
								</td>

								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{row.region}
								</td>

								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{row.location}
								</td>

								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{row.empType}
								</td>

								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{row.primarySkills.join(', ')}
								</td>
								{#if loggedIn}
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<button
											on:click={() => {}}
											class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
										>
											<Edit />
										</button>
										<button
											on:click={() => deleteEmployeeId(row.id)}
											class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
										>
											<Delete />
										</button>
									</td>
								{/if}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
