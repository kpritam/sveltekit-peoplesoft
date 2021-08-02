import faker from 'faker';

export type EmployeeDetails = {
	id: string;
	name: string;
	imgUrl: string;
	designation: string;
	region: string;
	location: string;
	empType: string;
	primarySkills: string[];
};

export type BenchList = EmployeeDetails[];

export const mkEmployeeDetails = (
	id: string,
	firstName: string,
	lastName: string,
	designation: string,
	region: string,
	location: string,
	empType: string,
	primarySkills: string
): EmployeeDetails => ({
	id,
	name: firstName + ' ' + lastName,
	imgUrl: faker.image.avatar(),
	designation,
	region,
	location,
	empType,
	primarySkills: primarySkills && primarySkills.split(',').map((v) => v.trim())
});
