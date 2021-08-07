<script lang="ts">
	import { page } from '$app/stores';

	export let name: string;
	export let link: string;

	let item: HTMLAnchorElement;
	$: active = $page.path === link;
</script>

<div
	class="cursor-pointer z-50 px-4 py-2 {active &&
		'bg-[#266974]'}  hover:bg-[#266974] rounded-xl group"
	on:click={() => item.click()}
>
	<a href={link} bind:this={item} class="uppercase group-hover:text-[#ffffff] text-[#d6eaee]">
		{name}
	</a>
</div>
