import type { EndpointOutput, Request } from '@sveltejs/kit';
// import type { EmployeeDetails } from '../../types';
// import { readUser } from '../../firebase/db/read';
// import { writeUser } from '../../firebase/db/write';
import { data } from './_data';

export async function get(): Promise<EndpointOutput> {
	// readUser('1');
	return { body: data };
}

export async function post(req: Request): Promise<EndpointOutput> {
	// const emp: EmployeeDetails = JSON.parse(req.rawBody as string);

	// writeUser('1', emp.name, emp.designation, emp.imgUrl);
	return { body: { success: true } };
}
