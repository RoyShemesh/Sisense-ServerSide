import { addRandomDailyStatus, dropTable } from './mongo/conrollers/dailyStatusController';

export const generateData = async () => {
	await dropTable();
	const start = new Date('1/2/2021');
	const end = new Date('1/1/2022');

	let loop = new Date(start);
	try {
		while (loop <= end) {
			addRandomDailyStatus(loop);
			const newDate = loop.setDate(loop.getDate() + 1);
			loop = new Date(newDate);
		}
		console.log('seeded successfully!');
	} catch (error) {
		console.log('error');
		console.log(error);
	}
};
