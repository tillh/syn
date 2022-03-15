import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../common/db/mongodb';

export default async function contractsHandler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            const { db } = await connectToDatabase();
            const contracts = await db
                .collection('contracts')
                .find({})
                .toArray();

            return res.json(contracts);
    }

}
