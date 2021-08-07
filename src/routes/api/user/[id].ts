import type { EndpointOutput, Request } from '@sveltejs/kit';
import { userService } from '../_instances';

export async function del({ params }: Request): Promise<EndpointOutput> {
	const { id } = params;
	try {
		await userService.removeUser(id);
		return { status: 200 };
	} catch (e) {
		console.error(`Employee id ${id} deletion failed, reason: ${e}`);
		return { status: 500, body: 'Internal Server Error' };
	}
}
