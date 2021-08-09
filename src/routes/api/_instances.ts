import { FirebaseUserService } from '$lib/db/firebase/FirebaseUserService';
import { FirebaseDemandService } from '$lib/db/firebase/FirebaseDemandService';
import type { UserService } from '$lib/UserService';
import type { DemandService } from '$lib/DemandService';

export const userService: UserService = new FirebaseUserService();
export const demandService: DemandService = new FirebaseDemandService();
