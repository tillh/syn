import { Contract, NewContract } from '../../common/model/contract.model';

const HEADERS: HeadersInit = {
    'content-type': 'application/json;charset=UTF-8'
};
export const CONTRACTS_PATH = '/api/contracts';

export async function getContracts(): Promise<Array<Contract>> {
    const response = await fetch(CONTRACTS_PATH);

    return response.json();
}

export async function addContract(contract: NewContract) {
    await fetch(CONTRACTS_PATH, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(contract)
    });
}

export async function updateContract(contract: Contract) {
    await fetch(`${CONTRACTS_PATH}/${contract._id}`, {
        method: 'PUT',
        headers: HEADERS,
        body: JSON.stringify(contract)
    });
}

export async function deleteContract(contract: Contract) {
    await fetch(`${CONTRACTS_PATH}/${contract._id}`, {
        method: 'DELETE',
        headers: HEADERS
    });
}
