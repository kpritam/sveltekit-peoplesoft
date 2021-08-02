import type { EndpointOutput } from '@sveltejs/kit';
import { userService } from './_instances';

export async function get(): Promise<EndpointOutput> {
	return { body: await userService.readAllUsers() };
}
