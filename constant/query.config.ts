import { QueryClientConfig } from 'react-query/types/core/types';

export const QUERY_CONFIG: QueryClientConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
};
