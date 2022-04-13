import express from 'express';
import { ErrorForbiddenRequest, ErrorInvalidVariable, ErrorMissingInfo } from '../utils/errorClass';
import { getDataByRange } from '../mongo/conrollers/dailyStatusController';
import validator from 'validator';
import { DailyStatus } from '../utils/interface';
const router = express.Router();

router.get('/getByRange', async (req, res, next) => {
	try {
		const from = req.query.from as string;
		const to = req.query.to as string;
		if (!from || !to) throw new ErrorMissingInfo();
		if (!validator.isDate(from) || !validator.isDate(to)) throw new ErrorInvalidVariable();
		if (!validator.isBefore(from, to)) throw new ErrorForbiddenRequest();
		const data: DailyStatus[] = await getDataByRange(from, to);
		data.sort();
		res.send(data);
	} catch (error) {
		next(error);
	}
});

export default router;
