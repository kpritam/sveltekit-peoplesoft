<script lang="ts">
	export let name: string;
	export let link: string;

	let item;
</script>

<div
	class="cursor-pointer p-2  hover:bg-[#266974] rounded-xl group
hover:animate-bounce ease-out transition scale-100"
	on:click={() => item.click()}
>
	<a
		href={link}
		bind:this={item}
		class="font-semibold uppercase group-hover:text-[#ffffff] text-[#d6eaee]"
	>
		{name}
	</a>
</div>
