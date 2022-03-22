import { ObjectId } from 'mongodb';
import { Contract } from '../common/model/contract.model';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../common/db/mongodb';

type ContractQuery = {
    id: string;
};

const CONTRACTS_COLLECTION = 'contracts';

export async function getContracts(req: NextApiRequest, res: NextApiResponse<Array<Contract>>) {
    const { db } = await connectToDatabase();
    const contracts = await db
        .collection<Contract>(CONTRACTS_COLLECTION)
        .find({})
        .sort({ createdAt: -1 })
        .toArray();

    res.json(contracts);
}

export async function addContract(req: NextApiRequest, res: NextApiResponse<Array<Contract>>) {
    const { body: newContract } = req;

    const { db } = await connectToDatabase();
    await db.collection(CONTRACTS_COLLECTION).insertOne({
        ...newContract,
        createdAt: new Date()
    });

    res.status(201).end();
}

export async function updateContract(req: NextApiRequest, res: NextApiResponse) {
    const { body, query } = req;
    const contract = body as Contract;
    const { id } = query as ContractQuery;

    console.log(id);

    const { db } = await connectToDatabase();
    await db.collection(CONTRACTS_COLLECTION).updateOne(
        { _id: ObjectId.createFromHexString(id) },
        {
            $set: {
                machineName: contract.machineName,
                usageFee: contract.usageFee,
                oneTimeFee: contract.oneTimeFee
            }
        }
    );

    res.status(204).end();
}

export async function deleteContract(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req;
    const { id } = query as ContractQuery;

    const { db } = await connectToDatabase();
    await db.collection(CONTRACTS_COLLECTION).deleteOne({ _id: ObjectId.createFromHexString(id) });

    res.status(204).end();
}
