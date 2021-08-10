import firebase from 'firebase/app';

export type DatabaseRef = firebase.database.Reference;
export type DataSnapshot = firebase.database.DataSnapshot;

export const dbRef = (path?: string): DatabaseRef => firebase.database().ref(path);

export const read = (id: string, path: string): Promise<DataSnapshot> =>
	dbRef()
		.child(path)
		.child(id)
		.get()
		.then((snapshot) => {
			console.log(`[Firebase] Read result from ${path} id: ${id} is ${snapshot.val()}`);
			return snapshot;
		})
		.catch((error) => {
			console.error(`[Firebase] Failed to read data for ${path} id: ${id}, reason: ${error}`);
			throw error;
		});

export const readAll = <T>(path: string): Promise<T[]> =>
	dbRef()
		.child(path)
		.limitToFirst(50)
		.get()
		.then((s) => {
			const rawVal = s.val();
			const val = Object.keys(rawVal).map((key) => ({ id: key, ...rawVal[key] }));
			return val;
		});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const write = <T extends { id: string; [key: string]: any }>(
	{ id, ...rest }: T,
	path: string
): Promise<void> =>
	dbRef(`${path}/${id}`).set(rest, (error) => {
		if (error) {
			console.error(`[Firebase] Failed to save ${path} id: ${id}, reason: ${error}`);
			throw error;
		}
		console.log(`[Firebase] ${path} id: ${id} saved successfully.`);
	});

export const remove = (id: string, path: string): Promise<void> =>
	dbRef(`${path}/${id}`).remove((error) => {
		if (error) {
			console.error(`[Firebase] Failed to delete ${path} id: ${id}, reason: ${error}`);
			throw error;
		}
		console.log(`[Firebase] ${path} id: ${id} deleted successfully.`);
	});
