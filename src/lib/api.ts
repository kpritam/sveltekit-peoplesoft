import type { EmployeeRow } from '$lib/models/employee';

export async function deleteEmployees(employees: EmployeeRow[]): Promise<void> {
	const res = employees.map(({ id }) => fetch('/api/user/' + id, { method: 'DELETE' }));

	try {
		await Promise.all(res);
		console.log(`Successfully deleted employee details for given ids.`);
	} catch (e) {
		console.error(`Failed to delete employee details.`);
	}
}

export async function deleteEmployeeId(id: string): Promise<void> {
	try {
		await fetch('/api/user/' + id, { method: 'DELETE' });
		console.log(`Successfully deleted employee details for id: ${id}`);
	} catch (e) {
		console.error(`Failed to delete employee details for id: ${id}`);
	}
}

export async function updateEmployee(employee: EmployeeRow): Promise<void> {
	try {
		await fetch('/api/user', { method: 'POST', body: JSON.stringify(employee) });
		console.log(`Successfully updated employee details for id: ${employee.id}`);
	} catch (e) {
		return console.error(`Failed to update employee details for id: ${employee.id}`);
	}
}
