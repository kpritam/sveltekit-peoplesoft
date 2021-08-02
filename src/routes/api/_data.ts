import type { BenchList } from '../../models';
import faker from 'faker';

const generateUsers = (): BenchList =>
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
