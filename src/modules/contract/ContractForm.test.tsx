import { screen, waitFor } from '@testing-library/react';
import { ContractForm } from './ContractForm';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test-utils/customRender';
import { testNewContract } from '../../test-utils/data';

describe('ContractForm', () => {
    test('should submit the entered values', async () => {
        const spySubmit = jest.fn();
        renderWithProviders(<ContractForm onSubmit={spySubmit} onCancel={jest.fn()} />);

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
