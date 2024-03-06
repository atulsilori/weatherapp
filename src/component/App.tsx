import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Weather from 'component/weather/Weather';
import { Error } from 'component/events';
import '../styles/App.css';

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Weather />
      <Error />
    </QueryClientProvider>
  );
};

export default App;
