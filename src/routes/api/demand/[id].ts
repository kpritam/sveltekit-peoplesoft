import type { EndpointOutput, Request } from '@sveltejs/kit';
import { demandService } from '../_instances';

export async function del({ params }: Request): Promise<EndpointOutput> {
	const { id } = params;
	try {
		await demandService.removeDemand(id);
		return { status: 200 };
	} catch (e) {
		console.error(`Demand id ${id} deletion failed, reason: ${e}`);
		return { status: 500, body: 'Internal Server Error' };
	}
}
