import '../common/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { QUERY_CONFIG } from '../constant/query.config';
import { Navbar } from '../modules/navbar';

const queryClient = new QueryClient(QUERY_CONFIG);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Navbar />

            <main className={'flex flex-wrap -mx-2 p-4'}>
                <Component {...pageProps} />
            </main>
        </QueryClientProvider>
    );
}

export default MyApp;
