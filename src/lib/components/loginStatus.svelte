<script lang="ts">
	import firebase from 'firebase/app';
	import authStore from '$lib/stores/authStore';
	import { goto } from '$app/navigation';
</script>

{#if $authStore.isLoggedIn}
	<div class="flex p-6 absolute right-0 sm:right-2 items-center">
		<div class="text-sm invisible sm:visible font-medium text-gray-100 mr-4">
			{$authStore.user.displayName}
		</div>
		<div class="flex-shrink-0 h-14 w-14 invisible sm:visible ">
			<img class="h-14 w-14 rounded-full" src={$authStore.user.photoURL} alt="" />
		</div>
		<div
			on:click={() => firebase.auth().signOut()}
			class="ml-4 cursor-pointer p-2 hover:bg-[#266974] rounded-xl group"
		>
			<button on:click class="uppercase hover:text-[#ffffff] text-[#d6eaee]">Logout</button>
		</div>
	</div>
{:else}
	<div class="flex p-6 absolute right-2 items-center">
		<div
			on:click={() => goto('/login')}
			class="ml-4 cursor-pointer p-2 hover:bg-[#266974] rounded-xl group"
		>
			<button on:click class="uppercase hover:text-[#ffffff] text-[#d6eaee]">Login</button>
		</div>
	</div>
{/if}
