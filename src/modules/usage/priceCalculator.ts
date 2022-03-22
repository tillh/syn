const currency = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
});

export const PRICE_DEFAULT_VALUE = '0 €';

export const calculatePrice = (oneTimeFee: number, usageFee: number, usage: number) => {
    return currency.format(oneTimeFee + usageFee * usage);
};
