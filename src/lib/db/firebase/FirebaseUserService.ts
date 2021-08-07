import type { Employee } from '$lib/models';
import type { UserService } from '$lib/UserService';
import { dbRef, DataSnapshot } from './utils';

const readUser = (id: string): Promise<DataSnapshot> =>
	dbRef()
		.child('users')
		.child(id)
		.get()
		.then((snapshot) => {
			console.log(`[Firebase] Read result from employee id: ${id} is ${snapshot.val()}`);
			return snapshot;
		})
		.catch((error) => {
			console.error(`[Firebase] Failed to read data for employee id: ${id}, reason: ${error}`);
			throw error;
		});

const readAllUsers = (): Promise<Employee[]> =>
	dbRef()
		.child('users')
		.limitToFirst(50)
		.get()
		.then((s) => {
			const rawUsers = s.val();
			const users = Object.keys(rawUsers).map((key) => ({ id: key, ...rawUsers[key] }));
			return users;
		});

const writeEmployee = ({ id, ...rest }: Employee): Promise<void> =>
	dbRef('users/' + id).set(rest, (error) => {
		if (error) {
			console.error(`[Firebase] Failed to save employee id: ${id}, reason: ${error}`);
			throw error;
		}
		console.log(`[Firebase] Employee id: ${id} saved successfully.`);
	});

const removeEmployee = (id: string): Promise<void> =>
	dbRef('users/' + id).remove((error) => {
		if (error) {
			console.error(`[Firebase] Failed to delete employee id: ${id}, reason: ${error}`);
			throw error;
		}
		console.log(`[Firebase] Employee id: ${id} deleted successfully.`);
	});

export class FirebaseUserService implements UserService {
	readAllUsers(): Promise<Employee[]> {
		return readAllUsers();
	}

	readUser(id: string): Promise<Employee> {
		readUser(id).then((r) => console.log(r.val()));
		throw Error('Not Implemented');
	}

	writeUser(user: Employee): Promise<void> {
		return writeEmployee(user);
	}

	removeUser(id: string): Promise<void> {
		return removeEmployee(id);
	}
}
