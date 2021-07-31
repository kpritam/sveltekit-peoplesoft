export type EmployeeDetails = {
	name: string;
	imgUrl: string;
	designation: string;
	region: string;
	location: string;
	empType: string;
	primarySkills: string[];
};

export type BenchList = EmployeeDetails[];
