import type { BenchList } from '../../types';

const imgUrl =
	'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60';
const mkEmployee = (
	name: string,
	imgUrl: string,
	designation: string,
	region: string,
	location: string,
	empType: string,
	primarySkills: string[]
) => ({ name, imgUrl, designation, region, location, empType, primarySkills });

export const data: BenchList = [
	mkEmployee('Pritam', imgUrl, 'Developer', 'India', 'Mumbai', 'Contractor', ['Scala, Typescript']),
	mkEmployee('Tushar', imgUrl, 'Data Engineer', 'US', 'Chicago', 'Permanent', ['Spark, Hadoop'])
];
