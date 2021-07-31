import type { EndpointOutput } from '@sveltejs/kit';

import { data } from './_data';

export async function get(): Promise<EndpointOutput> {
	return { body: data };
}
