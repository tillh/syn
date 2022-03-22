import { screen, waitFor } from '@testing-library/react';
import { ContractForm } from './ContractForm';
import userEvent from '@testing-library/user-event';
import { addContract } from './contract.api';
import { renderWithProviders } from '../../test-utils/customRender';
import { NewContract } from '../../common/model/contract.model';

jest.mock('./contract.api');
const mockAddContract = addContract as jest.Mock;

describe('ContractForm', () => {
    test('should submit the entered values', async () => {
        const testNewContract: NewContract = {
            machineName: 'any machine name',
            usageFee: 2,
            oneTimeFee: 4
        };
        const spySubmit = jest.fn();
        renderWithProviders(<ContractForm onSubmit={spySubmit} />);

        userEvent.type(
            screen.getByRole('textbox', { name: /machine name/i }),
            testNewContract.machineName
        );
        userEvent.type(
            screen.getByRole('spinbutton', { name: /usage fee/i }),
            `${testNewContract.usageFee}`
        );
        userEvent.type(
            screen.getByRole('spinbutton', { name: /one-time fee/i }),
            `${testNewContract.oneTimeFee}`
        );
        userEvent.click(screen.getByText(/save/i));

        await waitFor(() => expect(spySubmit).toHaveBeenCalledWith(testNewContract));
    });
});
