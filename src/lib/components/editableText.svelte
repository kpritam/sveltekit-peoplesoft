<script lang="ts">
	export let value: string;
	export let readonly: boolean = true;
	export let onChange: (value: string) => void;
</script>

{#if readonly}
	{#each value.split(/\n/) as line, i}
		{line}
		{#if i < value.split(/\n/).length - 1}
			<br />
		{/if}
	{/each}
{:else}
	<textarea
		placeholder={value}
		class="placeholder-gray-500 w-full outline-none p-2 text-gray-400 border-b border-gray-300"
		on:change={(e) => onChange(e.currentTarget.value)}
		bind:value
	/>
{/if}
