import DailyStatusModel from '../schema/DailyStatus';

export const addRandomDailyStatus = async (date: Date) => {
	await DailyStatusModel.deleteMany({});
	const income = Math.floor(Math.random() * 200);
	const outcome = Math.floor(Math.random() * 150);
	const revenue = income - outcome;
	const newStatus = new DailyStatusModel({ date, income, outcome, revenue });
	await newStatus.save();
};
