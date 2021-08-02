<script lang="ts">
	import { writeEmployeeDetails } from '../firebase/db/write';

	import { mkEmployeeDetails } from '../models';

	import authStore from '../stores/authStore';

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
		const empDetails = mkEmployeeDetails(
			id,
			firstName,
			lastName,
			designation,
			region,
			location,
			empType,
			primarySkills
		);
		console.log('Writing employee details to firebase', empDetails);
		writeEmployeeDetails(empDetails)
			.then(() => (submitted = true))
			.catch(() => (error = true));
	}
</script>

<svelte:head>
	<title>Admin</title>
</svelte:head>

<div class="container mx-auto">
	{#if !$authStore.isLoggedIn}
		<div class="flex justify-center">
			<div role="alert">
				<div
					class="bg-red-400 text-gray-100 font-bold text-2xl rounded-t flex justify-center px-4 py-4 w-full max-w-md mt-10"
				>
					Access Denied!
				</div>
				<div
					class="border border-t-0 border-red-400 text-xl rounded-b bg-red-100 flex justify-center px-20 py-4 text-red-700"
				>
					<p>Please login to continue.</p>
				</div>
			</div>
		</div>
	{:else}
		<form class="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl m-4 p-4">
			<div class="flex flex-wrap -mx-3 mb-6 md:space-x-4 xl:space-x-8">
				<div class="w-full md:w-1/3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						First Name
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Jane"
						bind:value={firstName}
					/>
					<!-- <p class="text-red-500 text-xsitalic">Please fill out this field.</p> -->
				</div>
				<div class="w-full md:w-1/3">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-last-name"
					>
						Last Name
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-last-name"
						type="text"
						placeholder="Doe"
						bind:value={lastName}
					/>
				</div>
			</div>

			<div class="flex flex-wrap -mx-3 mb-6 md:space-x-4 xl:space-x-8">
				<div class="md:w-1/6 w-full mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-id"
					>
						Emp ID
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
						id="grid-id"
						type="text"
						placeholder="1001"
						bind:value={id}
					/>
				</div>
				<div class="md:w-2/6 w-full mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-designation"
					>
						Designation
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
						id="grid-designation"
						type="text"
						placeholder="Developer"
						bind:value={designation}
					/>
				</div>
				<div class="md:w-2/6 w-full md:mb-0">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-emp-type"
					>
						Employee Type
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-emp-type"
						type="text"
						placeholder="Contractor"
						bind:value={empType}
					/>
				</div>
			</div>

			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/2">
					<label
						class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-primary-skills"
					>
						Primary Skills
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-primary-skills"
						type="text"
						placeholder="Typescript, Scala"
						bind:value={primarySkills}
					/>
				</div>
			</div>

			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="flex flex-wrap -mx-3 mb-2">
					<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-region"
						>
							Region
						</label>
						<input
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-region"
							type="text"
							placeholder="Albuquerque"
							bind:value={region}
						/>
					</div>
					<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-location"
						>
							Location
						</label>
						<div class="relative">
							<select
								class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-location"
								bind:value={location}
							>
								<option>New Mexico</option>
								<option>Missouri</option>
								<option>Texas</option>
							</select>
							<div
								class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
							>
								<svg
									class="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									><path
										d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
									/></svg
								>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-wrap -mx-3 mb-6">
				<button
					class="bg-[#258897] hover:bg-[#27575f] text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline"
					type="button"
					on:click={() => handleSubmit()}
				>
					Submit
				</button>
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
