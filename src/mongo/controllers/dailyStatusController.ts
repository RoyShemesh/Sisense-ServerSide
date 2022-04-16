import { DailyStatus } from '../../utils/interface';
import DailyStatusModel from '../schema/DailyStatus';
import { nextDayFunc } from '../../utils/dateFuncUtils';
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

export const getDataByRange = async (from: string, to: string) => {
	const newToDate = nextDayFunc(to);
	const data: DailyStatus[] = await DailyStatusModel.find({
		date: {
			$gte: new Date(from),
			$lte: newToDate,
		},
	});
	return data;
};
