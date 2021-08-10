import type { Employee } from '$lib/models/employee';
import type { UserService } from '$lib/UserService';
import * as fb from './utils';

const tableName = 'users';
export class FirebaseUserService implements UserService {
	readAllUsers(): Promise<Employee[]> {
		return fb.readAll(tableName);
	}

	readUser(id: string): Promise<Employee> {
		fb.read(id, tableName).then((r) => console.log(r.val()));
		throw Error('Not Implemented');
	}

	writeUser(demand: Employee): Promise<void> {
		return fb.write(demand, tableName);
	}

	removeUser(id: string): Promise<void> {
		return fb.remove(id, tableName);
	}
}
