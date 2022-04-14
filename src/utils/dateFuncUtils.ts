export const nextDayFunc = (date: string) => {
	const newToDate = new Date(date);
	newToDate.setDate(newToDate.getDate() + 1);
	return newToDate;
};
