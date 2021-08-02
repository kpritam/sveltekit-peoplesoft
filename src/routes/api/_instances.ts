import { FirebaseUserService } from '$lib/db/firebase/FirebaseUserService';
import type { UserService } from '$lib/UserService';

export const userService: UserService = new FirebaseUserService();
