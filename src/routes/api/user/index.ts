import type { EndpointOutput, Request } from '@sveltejs/kit';
import { EmployeeRow, mkEmployeeFrom } from '$lib/models/employee';
import { userService } from '../_instances';

export async function post(
	req: Request<Record<string, any>, EmployeeRow>
): Promise<EndpointOutput> {
	try {
		const empDetails: EmployeeRow = JSON.parse(req.body as any);
		await userService.writeUser(mkEmployeeFrom(empDetails));
		return { status: 201 };
	} catch (e) {
		console.error('Firebase write failed, reason: ', e);
		return { status: 500, body: 'Internal Server Error' };
	}
}
