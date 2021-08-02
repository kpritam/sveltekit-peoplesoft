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
