import { NextApiRequest, NextApiResponse } from 'next';

export function methodNotAllowed(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
