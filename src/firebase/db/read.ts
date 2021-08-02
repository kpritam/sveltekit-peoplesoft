import firebase from 'firebase';

export function readUser(id: string) {
	return firebase
		.database()
		.ref()
		.child('users')
		.child(id)
		.get()
		.then((snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());
			} else {
				console.log('No data available');
			}
			return snapshot;
		})
		.catch((error) => {
			console.error(error);
		});
}
