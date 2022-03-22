import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../common/db/mongodb';
import { NewContract } from '../../../common/model/contract.model';
import { Db } from 'mongodb';

export default async function contractsHandler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;
    const { db } = await connectToDatabase();

    switch (method) {
        case 'GET': {
            const contracts = await getContracts(db);

            return res.json(contracts);
        }

        case 'POST': {
            await addContract(db, body);

            return res.status(201).end();
        }

        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

async function getContracts(db: Db) {
    return db.collection('contracts').find({}).sort({ createdAt: -1 }).toArray();
}

async function addContract(db: Db, newContract: NewContract) {
    const contractsCollection = await db.collection('contracts');

    return contractsCollection.insertOne({
        ...newContract,
        createdAt: new Date()
    });
}
