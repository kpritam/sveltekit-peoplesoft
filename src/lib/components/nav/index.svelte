<script lang="ts">
	import NavItem from './navItem.svelte';
	import LoginStatus from '../loginStatus.svelte';
	import authStore from '$lib/stores/authStore';
</script>

<div class="flex space-x-6 sticky top-0 bg-[#27575f] items-center lg:justify-center p-6 shadow-md">
	<NavItem link="/" name="Home" />
	<NavItem link="/bench" name="Bench" />
	<NavItem link="/demand" name="Demand" />
	{#if $authStore.isLoggedIn}
		<NavItem link="/admin" name="Admin" />
	{/if}
	<LoginStatus />
</div>
