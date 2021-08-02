import type { EndpointOutput, Request } from '@sveltejs/kit';
import type { Employee } from '$lib/models';
import { userService } from './_instances';

export async function post(req: Request<Record<string, any>, Employee>): Promise<EndpointOutput> {
	try {
		const empDetails = JSON.parse(req.body as any);
		await userService.writeUser(empDetails);
		return { status: 201 };
	} catch (e) {
		console.error('Firebase write failed, reason: ', e);
		return { status: 500, body: 'Internal Server Error' };
	}
}
