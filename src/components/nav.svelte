<script lang="ts">
	import NavItem from './navItem.svelte';
	let selectedMenu = 'Home';

	function selectMenu(name: string) {
		selectedMenu = name;
	}
</script>

<div class="flex space-x-6 sticky top-0 bg-[#27575f] items-center p-6 shadow-md justify-center">
	<NavItem {selectMenu} {selectedMenu} link="/" name="Home" />
	<NavItem {selectMenu} {selectedMenu} link="/bench" name="Bench" />
	<NavItem {selectMenu} {selectedMenu} link="/admin" name="Admin" />
	<NavItem {selectMenu} {selectedMenu} link="/login" name="Login" />
</div>
