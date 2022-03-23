import { getContracts } from '../contract/contract.api';
import { testContracts } from '../../test-utils/data';
import { renderWithProviders } from '../../test-utils/customRender';
import { Usage } from './Usage';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('../contract/contract.api');
const mockGetContracts = getContracts as jest.Mock;

describe('Usage', () => {
    beforeEach(() => {
        mockGetContracts.mockResolvedValue(testContracts);
    });

    test('should calculate contract price when usage is defined and a contract is selected', async () => {
        renderWithProviders(<Usage />);

        await waitFor(() => expect(screen.getAllByRole('option').length).toBe(4));

        userEvent.type(screen.getByRole('spinbutton', { name: 'Usage' }), '4');
        userEvent.selectOptions(
            screen.getByRole('combobox', { name: 'Contract' }),
            testContracts[0].machineName
        );

        expect(screen.getByTestId('contractPrice')).toHaveTextContent('12,00 €');
    });
});
