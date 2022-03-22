import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../common/db/mongodb';
import { Contract } from '../../../common/model/contract.model';
import { Db, ObjectId } from 'mongodb';

export default async function contractHandler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;
    const { db } = await connectToDatabase();

    switch (method) {
        case 'PUT': {
            await updateContract(db, body);

            return res.status(204).end();
        }

        case 'DELETE': {
            await deleteContract(db, body);

            return res.status(204).end();
        }

        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

async function updateContract(db: Db, contract: Contract) {
    const contractsCollection = await db.collection('contracts');

    return contractsCollection.updateOne(
        { _id: ObjectId.createFromHexString(contract._id) },
        {
            $set: {
                machineName: contract.machineName,
                usageFee: contract.usageFee,
                oneTimeFee: contract.oneTimeFee
            }
        }
    );
}

async function deleteContract(db: Db, contract: Contract) {
    const contractsCollection = await db.collection('contracts');

    return contractsCollection.deleteOne({ _id: ObjectId.createFromHexString(contract._id) });
}
