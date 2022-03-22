import { NextApiRequest, NextApiResponse } from 'next';
import { deleteContract, methodNotAllowed, updateContract } from '../../../backend';

export default async function contractRequestHandler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    if (method === 'PUT') return updateContract(req, res);
    if (method === 'DELETE') return deleteContract(req, res);

    return methodNotAllowed(req, res);
}
