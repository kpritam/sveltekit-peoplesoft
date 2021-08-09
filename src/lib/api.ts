import type { EmployeeRow } from '$lib/models/employee';
import type { Demand } from '$lib/models/demand';
import type { TableRow } from '$lib/models/table';

async function deleteRows(rows: TableRow[], url: string): Promise<void> {
	const res = rows.map(({ id }) => fetch(`${url}/${id}`, { method: 'DELETE' }));

	try {
		await Promise.all(res);
		console.log(`Successfully deleted row details for given ids.`);
	} catch (e) {
		console.error(`Failed to delete row details.`);
	}
}

async function deleteRow(id: string, url: string): Promise<void> {
	try {
		await fetch(`${url}/${id}`, { method: 'DELETE' });
		console.log(`Successfully deleted row details for id: ${id}`);
	} catch (e) {
		console.error(`Failed to delete row details for id: ${id}`);
	}
}

async function updateRow(row: TableRow, url: string): Promise<void> {
	try {
		await fetch(url, { method: 'POST', body: JSON.stringify(row) });
		console.log(`Successfully updated row details for id: ${row.id}`);
	} catch (e) {
		return console.error(`Failed to update row details for id: ${row.id}`);
	}
}

const userUrl = '/api/user';
export const deleteEmployees = (employees: EmployeeRow[]): Promise<void> =>
	deleteRows(employees, userUrl);
export const deleteEmployeeId = (id: string): Promise<void> => deleteRow(id, userUrl);
export const updateEmployee = (employee: EmployeeRow): Promise<void> =>
	updateRow(employee, userUrl);

const demandUrl = '/api/demand';
export const deleteDemands = (demands: Demand[]): Promise<void> => deleteRows(demands, demandUrl);
export const deleteDemand = (id: string): Promise<void> => deleteRow(id, demandUrl);
export const updateDemand = (demand: Demand): Promise<void> => updateRow(demand, demandUrl);
