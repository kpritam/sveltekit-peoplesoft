<script lang="ts">
	export let value: string;
	export let readonly: boolean = true;
	export let onChange: (value: string) => void;
</script>

{#if readonly}
	{value}
{:else}
	<input
		placeholder={value}
		class="text-gray-400 placeholder-gray-500 w-full border-b border-gray-300 outline-none p-2"
		on:change={(e) => onChange(e.currentTarget.value)}
		bind:value
	/>
{/if}
