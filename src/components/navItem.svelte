<script lang="ts">
	export let name: string;
	export let link: string;
	export let selectedMenu: string;
	export let selectMenu: (name: string) => void;

	let item;
	$: active = selectedMenu === name;

	$: handleClick = () => {
		selectMenu(name);
		item.click();
	};
</script>

<div
	class="cursor-pointer p-2 {active && 'bg-[#266974]'}  hover:bg-[#266974] rounded-xl group
hover:animate-bounce ease-out transition scale-100"
	on:click={() => handleClick()}
>
	<a
		href={link}
		bind:this={item}
		class="font-semibold uppercase group-hover:text-[#ffffff] text-[#d6eaee]"
	>
		{name}
	</a>
</div>
