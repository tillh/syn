import { NewContract } from '../../common/model/contract.model';

const HEADERS: HeadersInit = {
    'content-type': 'application/json;charset=UTF-8'
};
export const CONTRACTS_PATH = '/api/contracts';

export async function addContract(contract: NewContract) {
    await fetch(CONTRACTS_PATH, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(contract)
    });
}
