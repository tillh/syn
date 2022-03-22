import { render, screen } from '@testing-library/react';
import { Card } from './Card';

const TestComponent = () => {
    return <div>Test content</div>;
};

describe('Card', () => {
    test('should render children', () => {
        render(
            <Card selected={false} opacity={false}>
                <TestComponent />
            </Card>
        );

        expect(screen.getByText('Test content')).toBeInTheDocument();
    });
});
