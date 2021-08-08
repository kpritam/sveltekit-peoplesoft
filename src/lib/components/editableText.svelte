<script lang="ts">
	export let value: string;
	export let readonly: boolean = true;
	export let onChange: (value: string) => void;
</script>

<input
	{readonly}
	placeholder={value}
	class="placeholder-gray-500 w-full outline-none p-2 {readonly
		? 'text-gray-500'
		: 'text-gray-400 border-b border-gray-300'}"
	on:change={(e) => onChange(e.currentTarget.value)}
	bind:value
/>
