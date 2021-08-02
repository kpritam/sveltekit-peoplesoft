<script lang="ts">
	export let name: string;
	export let onClick: () => void;
</script>

<button
	class="bg-[#258897] hover:bg-[#27575f] text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline"
	type="button"
	on:click={onClick}
>
	{name}
</button>
