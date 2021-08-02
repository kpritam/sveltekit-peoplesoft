import type { Employee } from '$lib/models';
import type { UserService } from '$lib/UserService';
import { dbRef, DataSnapshot } from './utils';

const readUser = (id: string): Promise<DataSnapshot> =>
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
	dbRef('users/' + id)
		.set(rest)
		.then(() => console.log('Firebase write succeeded.'))
		.catch((e) => console.error(`Firebase write failed for ${id}, reason: ${e}`));

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
}
