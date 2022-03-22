import { addContract, CONTRACTS_PATH } from './contract.api';
import { NewContract } from '../../common/model/contract.model';

global.fetch = jest.fn(() => Promise.resolve()) as jest.Mock;

describe('Contracts API', () => {
    let testNewContract: NewContract;

    beforeEach(() => {
        testNewContract = {
            machineName: 'any name',
            oneTimeFee: 2,
            usageFee: 4
        };
    });

    test('should do a post request with given data when addContract is called', () => {
        const spyFetch = jest.spyOn(window, 'fetch');

        addContract(testNewContract);

        expect(spyFetch).toHaveBeenCalledWith(
            CONTRACTS_PATH,
            expect.objectContaining({ body: JSON.stringify(testNewContract), method: 'POST' })
        );
    });
});
