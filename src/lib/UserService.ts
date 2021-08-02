import type { Employee } from './models';

export interface UserService {
	readAllUsers(): Promise<Employee[]>;
	readUser(id: string): Promise<Employee>;

	writeUser(user: Employee): Promise<void>;
}
