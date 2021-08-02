import type { EmployeeDetails } from '../../models';
import { dbRef } from './utils';

export const writeEmployeeDetails = ({ id, ...rest }: EmployeeDetails): Promise<void> =>
	dbRef('users/' + id)
		.set(rest)
		.then((r) => console.log(`Firebase write succeeded for ${id}, response: ${r}`))
		.catch((e) => console.error(`Firebase write failed for ${id}, reason: ${e}`));
