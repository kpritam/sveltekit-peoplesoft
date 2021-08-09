import type { Demand } from '$lib/models/demand';
import type { EndpointOutput, Request } from '@sveltejs/kit';
import { demandService } from '../_instances';

export async function post(req: Request<Record<string, any>, Demand>): Promise<EndpointOutput> {
	try {
		const demand: Demand = JSON.parse(req.body as any);
		await demandService.writeDemand(demand);
		return { status: 201 };
	} catch (e) {
		console.error('Firebase write failed, reason: ', e);
		return { status: 500, body: 'Internal Server Error' };
	}
}
