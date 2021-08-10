import type { Demand } from '$lib/models/demand';
import type { DemandService } from '$lib/DemandService';
import * as fb from './utils';

const tableName = 'demands';
export class FirebaseDemandService implements DemandService {
	readAllDemands(): Promise<Demand[]> {
		return fb.readAll(tableName);
	}

	readDemand(id: string): Promise<Demand> {
		fb.read(id, tableName).then((r) => console.log(r.val()));
		throw Error('Not Implemented');
	}

	writeDemand(demand: Demand): Promise<void> {
		return fb.write(demand, tableName);
	}

	removeDemand(id: string): Promise<void> {
		return fb.remove(id, tableName);
	}
}
