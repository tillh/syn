import { render, screen } from '@testing-library/react';
import { Example } from './Example';

describe('Example', () => {
    test('should render example text', () => {
        render(<Example />);

        expect(screen.getByTestId('example')).toHaveTextContent('Example..');
    });
});