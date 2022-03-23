import {
    addContract,
    CONTRACTS_PATH,
    deleteContract,
    getContracts,
    updateContract
} from './contract.api';
import { testContract, testNewContract } from '../../test-utils/data';

global.fetch = jest.fn(() => Promise.resolve({ json: jest.fn() })) as jest.Mock;

describe('Contracts API', () => {
    let spyFetch: jest.SpyInstance;

    beforeEach(() => {
        spyFetch = jest.spyOn(window, 'fetch');
    });

    afterEach(() => jest.resetAllMocks());

    test('getContracts should do a get request to "/api/contracts"', () => {
        getContracts();

        expect(spyFetch).toHaveBeenCalledWith(CONTRACTS_PATH);
    });

    test('addContract should do a post request to "/api/contracts" with given data', () => {
        const spyFetch = jest.spyOn(window, 'fetch');

        addContract(testNewContract);

        expect(spyFetch).toHaveBeenCalledWith(
            CONTRACTS_PATH,
            expect.objectContaining({ body: JSON.stringify(testNewContract), method: 'POST' })
        );
    });

    test('updateContract should do a put request to "/api/contracts/CONTRACT_ID" with given data', () => {
        const spyFetch = jest.spyOn(window, 'fetch');

        updateContract(testContract);

        expect(spyFetch).toHaveBeenCalledWith(
            `${CONTRACTS_PATH}/${testContract._id}`,
            expect.objectContaining({ body: JSON.stringify(testContract), method: 'PUT' })
        );
    });

    test('deleteContract should do a delete request to "/api/contracts/CONTRACT_ID"', () => {
        const spyFetch = jest.spyOn(window, 'fetch');

        deleteContract(testContract);

        expect(spyFetch).toHaveBeenCalledWith(
            `${CONTRACTS_PATH}/${testContract._id}`,
            expect.objectContaining({ method: 'DELETE' })
        );
    });
});
