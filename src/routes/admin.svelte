<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import Input from '$lib/components/input.svelte';
	import Error from './__error.svelte';
	import { mkEmployee } from '$lib/models/employee';
	import authStore from '$lib/stores/authStore';

	let id: string;
	let firstName: string;
	let lastName: string;
	let designation: string;
	let region: string;
	let location: string;
	let empType: string;
	let primarySkills: string;

	let submitted: boolean = false;
	let error: boolean = false;

	function handleSubmit() {
		const empDetails = mkEmployee(
			id,
			firstName,
			lastName,
			designation,
			region,
			location,
			empType,
			primarySkills
		);
		console.log('Employee details', empDetails);

		if (
			id &&
			firstName &&
			lastName &&
			designation &&
			region &&
			location &&
			empType &&
			primarySkills
		) {
			console.log('Writing employee details to firebase', empDetails);

			fetch('/api/user', { method: 'POST', body: JSON.stringify(empDetails) })
				.then((result) =>
					result
						.json()
						.then(() => (submitted = true))
						.catch(() => (error = true))
				)
				.catch(() => (error = true));
		} else {
			error = true;
			console.error('Fill all the mandatory fields.');
		}
	}
</script>

<svelte:head>
	<title>Admin</title>
</svelte:head>

<div class="container mx-auto">
	{#if !$authStore.isLoggedIn}
		<Error status="404" error="Not Found" />
	{:else}
		<form class="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl m-4 p-4">
			<div class="flex flex-wrap -mx-3 mb-6 md:space-x-4 xl:space-x-8">
				<div class="w-full md:w-1/3 mb-6 md:mb-0">
					<Input bind:value={firstName} label="First Name" placeholder="Jane" />
				</div>
				<div class="w-full md:w-1/3">
					<Input bind:value={lastName} label="Last Name" placeholder="Doe" />
				</div>
			</div>

			<div class="flex flex-wrap -mx-3 mb-6 md:space-x-4 xl:space-x-8">
				<div class="md:w-1/6 w-full mb-6 md:mb-0">
					<Input bind:value={id} label="Emp ID" placeholder="1001" />
				</div>
				<div class="md:w-2/6 w-full mb-6 md:mb-0">
					<Input bind:value={designation} label="Designation" placeholder="Developer" />
				</div>
				<div class="md:w-2/6 w-full md:mb-0">
					<Input bind:value={empType} label="Employee Type" placeholder="Contractor" />
				</div>
			</div>

			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/2">
					<Input
						bind:value={primarySkills}
						label="Primary Skills"
						placeholder="Scala, Typescript"
					/>
				</div>
			</div>

			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="flex flex-wrap -mx-3 mb-2">
					<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<Input bind:value={region} label="Region" placeholder="Albuquerque" />
					</div>
					<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<Input bind:value={location} label="Location" placeholder="New Mexico" />
					</div>
				</div>
			</div>

			<div class="flex flex-wrap -mx-3 mb-6">
				<Button name="Submit" onClick={handleSubmit} />
			</div>
			{#if submitted}
				<p class="text-green-500 text-xsitalic">Form submission successful.</p>
			{/if}
			{#if error}
				<p class="text-red-500 text-xsitalic">Form submission failed.</p>
			{/if}
		</form>
	{/if}
</div>
