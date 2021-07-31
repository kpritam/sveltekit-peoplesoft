<script lang="ts">
	import type { BenchList } from '../types';
	export let data: BenchList;

	const dd = data.map((d) => [...Object.values(d)]);

	console.log(data);

	const thead = 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider';
	const headers = ['name', 'designation', 'region', 'location', 'empType', 'primarySkills'];
</script>

<div class="flex flex-col">
	<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
			<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
				<table class="min-w-full divide-y divide-gray-200">
					<thead class="bg-gray-50">
						<tr>
							{#each headers as header}
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
						{#each data as row}
							<tr>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="flex items-center">
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
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
