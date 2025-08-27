import { QueryClientProvider } from '@tanstack/react-query';
import { OverlayProvider } from 'overlay-kit';
import { queryClient } from './lib/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieHomePage from './pages/MovieHomePage';
import MovieDetailPage from './pages/MovieDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieHomePage />,
  },
  {
    path: '/detail/:movieId',
    element: <MovieDetailPage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <RouterProvider router={router} />
      </OverlayProvider>
    </QueryClientProvider>
  );
}

export default App;
