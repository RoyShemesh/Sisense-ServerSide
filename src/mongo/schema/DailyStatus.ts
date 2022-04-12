import { model, Schema } from 'mongoose';
import { DailyStatus } from '../../utils/interface';

const dailyStatusSchema = new Schema<DailyStatus>({
	date: { type: Date, required: true },
	income: { type: Number, required: true },
	outcome: { type: Number, required: true },
	revenue: { type: Number, required: true },
});

const DailyStatusModel = model<DailyStatus>('DailySchema', dailyStatusSchema);

export default DailyStatusModel;
