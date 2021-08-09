import type { EndpointOutput } from '@sveltejs/kit';
import { demandService } from './_instances';

export async function get(): Promise<EndpointOutput> {
	return { body: await demandService.readAllDemands() };
}
