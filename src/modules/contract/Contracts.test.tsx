import { renderWithProviders } from '../../test-utils/customRender';
import { Contracts } from './Contracts';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import { Contract } from '../../common/model/contract.model';
import { addContract, deleteContract, getContracts, updateContract } from './contract.api';
import { testContract, testContracts, testNewContract } from '../../test-utils/data';
import { CONTRACTS_QUERY_KEY } from './useGetContracts';

jest.mock('./contract.api');
const mockGetContracts = getContracts as jest.Mock;
const mockAddContract = addContract as jest.Mock;
const mockUpdateContract = updateContract as jest.Mock;
const mockDeleteContract = deleteContract as jest.Mock;

describe('Contracts', () => {
    test('should show a list of contracts', async () => {
        mockGetContracts.mockResolvedValue(testContracts);
        renderWithProviders(<Contracts />);

        expect(await screen.findByText(testContracts[0].machineName)).toBeInTheDocument();
        expect(screen.getByText(testContracts[1].machineName)).toBeInTheDocument();
        expect(screen.getByText(testContracts[2].machineName)).toBeInTheDocument();
    });

    describe('when adding a new contract', () => {
        test('add contract api should be called', async () => {
            renderWithProviders(<Contracts />);

            userEvent.click(screen.getByTestId('createContractBtn'));
            fillContractForm(testNewContract);
            await clickSave();

            await waitFor(() =>
                expect(mockAddContract).toHaveBeenNthCalledWith(1, testNewContract)
            );
        });

        test('contracts query should be invalidated', async () => {
            const { queryClient } = renderWithProviders(<Contracts />);
            const spyQueryClient = jest.spyOn(queryClient, 'invalidateQueries');

            userEvent.click(screen.getByTestId('createContractBtn'));
            fillContractForm(testNewContract);
            await clickSave();

            await waitFor(() =>
                expect(spyQueryClient).toHaveBeenNthCalledWith(1, CONTRACTS_QUERY_KEY)
            );
        });
    });

    describe('when updating a contract', () => {
        beforeEach(() => {
            mockGetContracts.mockResolvedValue([testContract]);
        });

        test('update contract api should be called', async () => {
            renderWithProviders(<Contracts />);

            userEvent.click(await screen.findByText(/edit/i));
            userEvent.clear(screen.getByRole('textbox', { name: /machine name/i }));
            userEvent.clear(screen.getByRole('spinbutton', { name: /usage fee/i }));
            userEvent.clear(screen.getByRole('spinbutton', { name: /one-time fee/i }));

            fillContractForm({
                machineName: 'new name',
                usageFee: 9,
                oneTimeFee: 4
            });

            await clickSave();

            await waitFor(() =>
                expect(mockUpdateContract).toHaveBeenNthCalledWith(1, {
                    ...testContract,
                    machineName: 'new name',
                    usageFee: 9,
                    oneTimeFee: 4
                })
            );
        });

        test('contracts query should be invalidated', async () => {
            const { queryClient } = renderWithProviders(<Contracts />);
            const spyQueryClient = jest.spyOn(queryClient, 'invalidateQueries');

            userEvent.click(await screen.findByText(/edit/i));
            await clickSave();

            await waitFor(() =>
                expect(spyQueryClient).toHaveBeenNthCalledWith(1, CONTRACTS_QUERY_KEY)
            );
        });
    });

    describe('when deleting a contract', () => {
        beforeEach(() => {
            mockGetContracts.mockResolvedValue([testContract]);
        });

        test('delete contract api should be called', async () => {
            renderWithProviders(<Contracts />);

            userEvent.click(await screen.findByText(/delete/i));

            await waitFor(() =>
                expect(mockDeleteContract).toHaveBeenNthCalledWith(1, testContract)
            );
        });

        test('contracts query should be invalidated', async () => {
            const { queryClient } = renderWithProviders(<Contracts />);
            const spyQueryClient = jest.spyOn(queryClient, 'invalidateQueries');

            userEvent.click(await screen.findByText(/delete/i));

            await waitFor(() =>
                expect(spyQueryClient).toHaveBeenNthCalledWith(1, CONTRACTS_QUERY_KEY)
            );
        });
    });
});

function fillContractForm(contract: Omit<Contract, '_id' | 'createdAt'>) {
    userEvent.type(screen.getByRole('textbox', { name: /machine name/i }), contract.machineName);
    userEvent.type(screen.getByRole('spinbutton', { name: /usage fee/i }), `${contract.usageFee}`);
    userEvent.type(
        screen.getByRole('spinbutton', { name: /one-time fee/i }),
        `${contract.oneTimeFee}`
    );
}

async function clickSave() {
    expect(await screen.findByText(/save/i)).toBeEnabled();
    userEvent.click(screen.getByText(/save/i));
}
