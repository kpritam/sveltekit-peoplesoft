import type { EndpointOutput } from '@sveltejs/kit';

import { data } from './_data';
export async function get(): Promise<EndpointOutput> {
	const res = await Promise.resolve(data);
	return { body: res };
}
