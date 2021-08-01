<script lang="ts">
	import NavItem from './navItem.svelte';
</script>

<div class="flex space-x-6 sticky top-0 bg-[#27575f] items-center p-6 shadow-md justify-center">
	<NavItem link="/" name="Home" />
	<NavItem link="/bench" name="Bench" />
	<NavItem link="/admin" name="Admin" />
	<NavItem link="/login" name="Login" />
</div>
