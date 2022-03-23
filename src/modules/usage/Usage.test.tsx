import { testContracts } from '../../test-utils/data';
import { renderWithProviders } from '../../test-utils/customRender';
import { Usage } from './Usage';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Usage', () => {
    test('should calculate contract price when usage is defined and a contract is selected', async () => {
        renderWithProviders(<Usage contracts={testContracts} />);

        userEvent.type(screen.getByRole('spinbutton', { name: 'Usage' }), '4');
        userEvent.selectOptions(
            screen.getByRole('combobox', { name: 'Contract' }),
            testContracts[0].machineName
        );

        expect(screen.getByTestId('contractPrice')).toHaveTextContent('12,00 €');
    });
});
