import { readAllUsers } from './../../firebase/db/read';
import type { EndpointOutput, Request } from '@sveltejs/kit';
import type { EmployeeDetails } from '../../models';
import { writeEmployeeDetails } from '../../firebase/db/write';

export async function get(): Promise<EndpointOutput> {
	return { body: await readAllUsers() };
}

export async function post(
	req: Request<Record<string, any>, EmployeeDetails>
): Promise<EndpointOutput> {
	try {
		const empDetails = JSON.parse(req.body as any);
		await writeEmployeeDetails(empDetails);
		return { status: 201 };
	} catch (e) {
		console.error('Firebase write failed, reason: ', e);
		return { status: 500, body: 'Internal Server Error' };
	}
}
