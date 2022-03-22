import { NextApiRequest, NextApiResponse } from 'next';
import { addContract, getContracts, methodNotAllowed } from '../../../backend';

export default async function contractsRequestHandler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    if (method === 'GET') return getContracts(req, res);
    if (method === 'POST') return addContract(req, res);

    return methodNotAllowed(req, res);
}
