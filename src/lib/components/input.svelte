<script lang="ts">
	export let value: string;
	export let label: string;
	export let placeholder: string;
</script>

<label
	class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
	for="grid-{label.replace(' ', '-').toLowerCase()}"
>
	{label}
</label>
<input
	class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
	id="grid-{label.replace(' ', '-')}"
	type="text"
	{placeholder}
	bind:value
/>
