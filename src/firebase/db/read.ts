import type { EmployeeDetails } from '../../models';
import { dbRef, DataSnapshot } from './utils';

export const readUser = (id: string): Promise<DataSnapshot> =>
	dbRef()
		.child('users')
		.child(id)
		.get()
		.then((snapshot) => {
			console.log(`Read result for ${id} is ${snapshot.val()}`);
			return snapshot;
		})
		.catch((error) => {
			console.error(`Read failed for ${id}, reason: ${error}`);
			throw error;
		});

export const readAllUsers = (): Promise<EmployeeDetails[]> =>
	dbRef()
		.child('users')
		.limitToFirst(50)
		.get()
		.then((s) => {
			const rawUsers = s.val();
			const users = Object.keys(rawUsers).map((key) => ({ id: key, ...rawUsers[key] }));
			return users;
		});
