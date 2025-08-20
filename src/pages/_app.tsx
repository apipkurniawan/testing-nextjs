import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

import '@/styles/globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className='prd-font-bca'>
      <QueryClientProvider client={queryClient}>
        <LoadingStoreProvider>
          <Component {...pageProps} />
        </LoadingStoreProvider>
      </QueryClientProvider>
    </main>
  );
}

interface LoadingProps {
  children: ReactNode;
}

const LoadingStoreProvider = ({ children }: LoadingProps) => {
  return <>{children}</>;
};
