<script lang="ts">
	import type { TableData, TableRow } from '$lib/models/table';
	import Delete from '$lib/components/icons/delete.svelte';
	import Edit from '$lib/components/icons/edit.svelte';
	import Tick from '$lib/components/icons/tick.svelte';
	import Cross from '$lib/components/icons/cross.svelte';
	import authStore from '$lib/stores/authStore';
	import EditableText from '$lib/components/editableText.svelte';

	export let data: TableData;
	export let headers: string[];
	export let onSelectedRowDelete: (rowId: string) => Promise<void>;
	export let onSelectedRowUpdate: (row: TableRow) => Promise<void>;
	export let onSelectedRowsDelete: (rows: TableRow[]) => Promise<void>;

	let selectAllCheckbox = false;
	let selectedRows: TableRow[] = [];
	let modifiedRow: TableRow | null = null;

	$: loggedIn = $authStore.isLoggedIn;

	function selectAllRows() {
		selectedRows = data;
	}

	function resetSelection() {
		selectedRows = [];
	}

	function onSelectAllChanged() {
		selectAllCheckbox ? selectAllRows() : resetSelection();
	}

	function selectRow(row: TableRow) {
		const isSelected = selectedRows.includes(row);
		if (isSelected) {
			selectedRows = selectedRows.filter((e) => e.id !== row.id);
			selectAllCheckbox = false;
		} else {
			selectedRows = [...selectedRows, row];
		}
	}

	function deleteSelectedRows() {
		onSelectedRowsDelete(selectedRows).then(() => {
			data = data.filter((d) => !selectedRows.map((e) => e.id).includes(d.id));
		});
	}

	function deleteRowId(id: string) {
		onSelectedRowDelete(id).then(() => {
			data = data.filter((e) => e.id !== id);
		});
	}

	function updateRow(row: TableRow, index: number) {
		onSelectedRowUpdate(row).then(() => {
			data[index] = row;
			modifiedRow = null;
		});
	}

	$: unprotectedHeaders = headers.map((s) => s.replace(/([A-Z])/g, ' $1'));
	$: protectedHeaders = [...unprotectedHeaders, 'Actions'];
	$: newHeaders = loggedIn ? protectedHeaders : unprotectedHeaders;

	function compareRow(a: TableRow, b: TableRow) {
		return a && b && a.id === b.id;
	}

	function getRow(row: TableRow) {
		if (modifiedRow === null) return row;

		return compareRow(row, modifiedRow) ? modifiedRow : row;
	}
</script>

{#if loggedIn}
	<div class="flex justify-start p-2 m-2">
		<button
			on:click={() => deleteSelectedRows()}
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
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs text-gray-900 font-bold uppercase tracking-widest flex"
							>
								{#if loggedIn}
									<input
										type="checkbox"
										class="mr-4 items-center"
										bind:checked={selectAllCheckbox}
										on:change={() => onSelectAllChanged()}
									/>
								{/if}
								{newHeaders[0]}
							</th>
							{#each newHeaders.slice(1) as header}
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs text-gray-900 font-bold uppercase tracking-widest"
								>
									{header}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody class="bg-white divide-y divide-gray-200">
						{#each data as row, index (row.id)}
							<tr>
								{#each headers as key, index}
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<!-- Display selection checkbox only if user is logged in -->
										<!-- Display image in first coloum if imgUrl property presents -->
										{#if loggedIn && index === 0}
											<div class="flex items-center">
												<input
													type="checkbox"
													class="mr-4 items-center"
													on:change={() => selectRow(row)}
													checked={selectAllCheckbox || selectedRows.includes(row)}
												/>
												{#if 'imgUrl' in row}
													<div class="mr-2 flex-shrink-0 h-10 w-10 ">
														<img class="h-10 1-10 rounded-full" src={row['imgUrl']} alt="" />
													</div>
												{/if}
												<EditableText
													value={getRow(row)[key]}
													readonly={!compareRow(row, modifiedRow)}
													onChange={(v) => (modifiedRow[key] = v)}
												/>
											</div>
										{:else}
											<EditableText
												value={getRow(row)[key]}
												readonly={!compareRow(row, modifiedRow)}
												onChange={(v) => (modifiedRow[key] = v)}
											/>
										{/if}
									</td>
								{/each}

								{#if loggedIn}
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{#if modifiedRow && row.id === modifiedRow.id}
											<button
												on:click={() => {
													updateRow(modifiedRow, index);
												}}
												class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
											>
												<Tick />
											</button>
											<button
												on:click={() => {
													modifiedRow = null;
													data = data.filter((e) => e);
												}}
												class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
											>
												<Cross />
											</button>
										{:else}
											<button
												on:click={() => (modifiedRow = { ...row })}
												class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
											>
												<Edit />
											</button>
											<button
												on:click={() => deleteRowId(row.id)}
												class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
											>
												<Delete />
											</button>
										{/if}
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
