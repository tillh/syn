if (!process.env.SYN_APP_CONTRACTS_COLLECTION)
    throw new Error('SYN_APP_CONTRACTS_COLLECTION not defined!');

export const CONTRACTS_COLLECTION = process.env.SYN_APP_CONTRACTS_COLLECTION;
