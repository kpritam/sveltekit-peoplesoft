<svelte:head>
	<title>Admin</title>
</svelte:head>

<form class="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl m-4 p-4">
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/2 mb-6 md:mb-0">
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
			/>
			<!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
		</div>
		<div class="w-full md:w-1/2 md:space-x-4">
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
			/>
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/2 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-first-name"
			>
				Designation
			</label>
			<input
				class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
				id="grid-developer"
				type="text"
				placeholder="Developer"
			/>
		</div>
		<div class="w-full md:w-1/2 md:space-x-4">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-last-name"
			>
				Employee Type
			</label>
			<input
				class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="grid-contractor"
				type="text"
				placeholder="Contractor"
			/>
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/2">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-last-name"
			>
				Primary Skills
			</label>
			<input
				class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="grid-primary-skills"
				type="text"
				placeholder="Typescript, Scala"
			/>
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="flex flex-wrap -mx-3 mb-2">
			<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-city"
				>
					Region
				</label>
				<input
					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="grid-city"
					type="text"
					placeholder="Albuquerque"
				/>
			</div>
			<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
				<label
					class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					for="grid-state"
				>
					Location
				</label>
				<div class="relative">
					<select
						class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-state"
					>
						<option>New Mexico</option>
						<option>Missouri</option>
						<option>Texas</option>
					</select>
					<div
						class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
					>
						<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
							><path
								d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
							/></svg
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</form>
