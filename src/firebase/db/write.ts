import firebase from 'firebase';

export function writeUser(
	userId: string,
	name: string,
	email: string,
	imageUrl: string
): Promise<any> {
	return firebase
		.database()
		.ref('users/' + userId)
		.set({
			username: name,
			email: email,
			profile_picture: imageUrl
		});
}
