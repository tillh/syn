import { ComponentType, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { QUERY_CONFIG } from '../constant/config';

export const renderWithProviders = (ui: ReactElement, renderOptions: RenderOptions = {}) => {
    const queryClient = new QueryClient(QUERY_CONFIG);

    const AllProviders: ComponentType = ({ children }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    return {
        ...render(ui, { wrapper: AllProviders, ...renderOptions }),
        queryClient
    };
};
