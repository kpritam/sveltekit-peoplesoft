import type { Employee } from './models/employee';

export interface UserService {
	readAllUsers(): Promise<Employee[]>;
	readUser(id: string): Promise<Employee>;

	writeUser(user: Employee): Promise<void>;

	removeUser(userId: string): Promise<void>;
}
