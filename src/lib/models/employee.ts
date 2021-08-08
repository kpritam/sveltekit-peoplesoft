import faker from 'faker/locale/en_US';

export type Employee = {
	id: string;
	name: string;
	imgUrl: string;
	designation: string;
	region: string;
	location: string;
	empType: string;
	primarySkills: string[];
};

export type EmployeeRow = Omit<Employee, 'primarySkills'> & { primarySkills: string };

export const mkEmployeeFrom = ({ primarySkills, ...rest }: EmployeeRow): Employee => ({
	...rest,
	primarySkills: primarySkills.split(',').map((s) => s.trim())
});

export const mkEmployeeRowFrom = ({ primarySkills, ...rest }: Employee): EmployeeRow => ({
	...rest,
	primarySkills: primarySkills.join(', ')
});

export const mkEmployee = (
	id: string,
	firstName: string,
	lastName: string,
	designation: string,
	region: string,
	location: string,
	empType: string,
	primarySkills: string
): Employee => ({
	id,
	name: firstName + ' ' + lastName,
	imgUrl: faker.image.avatar(),
	designation,
	region,
	location,
	empType,
	primarySkills: primarySkills && primarySkills.split(',').map((v) => v.trim())
});
