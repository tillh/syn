import { calculatePrice } from './priceCalculator';

describe('Price calculator', () => {
    test('should calculate price', () => {
        const result = calculatePrice(2, 3, 5);

        expect(result).toContain('17,00');
    });
});
