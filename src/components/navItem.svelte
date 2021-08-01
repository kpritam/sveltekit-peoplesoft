<script lang="ts">
	import { page } from '$app/stores';

	export let name: string;
	export let link: string;

	let item;
	$: active = $page.path === link;
</script>

<div
	class="cursor-pointer p-2 {active && 'bg-[#266974]'}  hover:bg-[#266974] rounded-xl group
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
