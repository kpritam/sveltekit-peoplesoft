import type { Demand } from '$lib/models/demand';
import type { DemandService } from '$lib/DemandService';
import { dbRef, DataSnapshot } from './utils';

const readDemand = (id: string): Promise<DataSnapshot> =>
	dbRef()
		.child('demands')
		.child(id)
		.get()
		.then((snapshot) => {
			console.log(`[Firebase] Read result from demand id: ${id} is ${snapshot.val()}`);
			return snapshot;
		})
		.catch((error) => {
			console.error(`[Firebase] Failed to read data for demand id: ${id}, reason: ${error}`);
			throw error;
		});

const readAllDemands = (): Promise<Demand[]> =>
	dbRef()
		.child('demands')
		.limitToFirst(50)
		.get()
		.then((s) => {
			const rawDemands = s.val();
			const demands = Object.keys(rawDemands).map((key) => ({ id: key, ...rawDemands[key] }));
			return demands;
		});

const writeDemand = ({ id, ...rest }: Demand): Promise<void> =>
	dbRef('demands/' + id).set(rest, (error) => {
		if (error) {
			console.error(`[Firebase] Failed to save demand id: ${id}, reason: ${error}`);
			throw error;
		}
		console.log(`[Firebase] Demand id: ${id} saved successfully.`);
	});

const removeDemand = (id: string): Promise<void> =>
	dbRef('demands/' + id).remove((error) => {
		if (error) {
			console.error(`[Firebase] Failed to delete demand id: ${id}, reason: ${error}`);
			throw error;
		}
		console.log(`[Firebase] Demand id: ${id} deleted successfully.`);
	});

export class FirebaseDemandService implements DemandService {
	readAllDemands(): Promise<Demand[]> {
		return readAllDemands();
	}

	readDemand(id: string): Promise<Demand> {
		readDemand(id).then((r) => console.log(r.val()));
		throw Error('Not Implemented');
	}

	writeDemand(demand: Demand): Promise<void> {
		return writeDemand(demand);
	}

	removeDemand(id: string): Promise<void> {
		return removeDemand(id);
	}
}
