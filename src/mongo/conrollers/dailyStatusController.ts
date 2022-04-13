import DailyStatusModel from '../schema/DailyStatus';

export const dropTable = async () => {
	await DailyStatusModel.deleteMany({});
};
export const addRandomDailyStatus = async (date: Date) => {
	const income = Math.floor(Math.random() * 200);
	const outcome = Math.floor(Math.random() * 150);
	const revenue = income - outcome;
	const newStatus = new DailyStatusModel({ date, income, outcome, revenue });
	console.log(newStatus);
	await newStatus.save();
};
