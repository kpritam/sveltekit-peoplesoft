import type { Demand } from '$lib/models/demand';

export interface DemandService {
	readAllDemands(): Promise<Demand[]>;
	readDemand(id: string): Promise<Demand>;

	writeDemand(demand: Demand): Promise<void>;

	removeDemand(id: string): Promise<void>;
}
