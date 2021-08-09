import type { Demand } from '$lib/models/demand';
import type { Employee } from '$lib/models/employee';
import faker from 'faker/locale/en_US';

const generateUsers = (): Employee[] =>
	[...Array(10)].map(() => {
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();

		return {
			id: faker.datatype.uuid(),
			name: firstName + ' ' + lastName,
			imgUrl: faker.image.avatar(),
			designation: faker.name.jobTitle(),
			region: faker.address.stateAbbr(),
			location: faker.address.city(),
			empType: faker.random.arrayElement(['Manager', 'Developer', 'Designer']),
			primarySkills: faker.random.arrayElements(
				['Angular', 'React', 'Vue', 'Scala', 'Spark', 'Hadoop', 'Java', 'C/C++'],
				faker.datatype.number({ min: 1, max: 4 })
			)
		};
	});

export const data = generateUsers();

const generateDemands = (): Demand[] =>
	[...Array(1)].map(() => {
		const creationDate = faker.date.past(2020);
		return {
			id: faker.datatype.uuid(),
			codeRequisition: faker.datatype.number().toString(),
			codePosition: faker.datatype.number().toString(),
			myHireId: faker.datatype.number({ min: 6, max: 6 }).toString(),
			creationDate: creationDate.toLocaleDateString(),
			positionStartDate: faker.date.between(creationDate, new Date()).toLocaleDateString(),
			accountName: faker.company.companyName(),
			codeCountry: faker.address.countryCode(),
			location: faker.address.city(),
			roleList: faker.random.arrayElement([
				'Solution Architect',
				'Data Analyst',
				'BA',
				'Manager',
				'Developer',
				'Designer'
			]),
			skillList: faker.random.arrayElement(['Kafka', 'CloudFormation', 'Python', 'Java']),
			projectName: faker.company.catchPhrase(),
			demandCreatorName: faker.name.firstName() + ' ' + faker.name.lastName(),
			demandRequestName: faker.company.companySuffix(),
			originatorName: faker.name.firstName() + ' ' + faker.name.lastName(),
			recruiter: faker.name.firstName() + ' ' + faker.name.lastName(),
			recruitmentStartDate: faker.date.future(2021).toLocaleDateString(),
			localGrade: faker.random.arrayElement([
				'A1',
				'A2',
				'B1',
				'B2',
				'C1',
				'C2',
				'D1',
				'D2',
				'E1',
				'E2',
				'F1',
				'F2',
				'G1',
				'G2'
			]),
			bu: faker.company.companyName(),
			roleNotes: faker.lorem.lines(3)
		};
	});

export const demands = generateDemands();
