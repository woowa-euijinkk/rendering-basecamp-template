import { usePopularMovies } from '../hooks/queries/useMovies';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { useMovieDetailModal } from '../hooks/useMovieDetailModal';
import { MovieItem } from './MovieItem';
import type { MovieItem as MovieItemType } from '../types/Movie.types';
import { Loading } from './common/Loading';

export const MovieList = () => {
  const { openMovieDetailModal } = useMovieDetailModal();

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    usePopularMovies();

  const movies = data?.pages.flatMap(page => page.data.results) ?? [];

  const { lastElementRef } = useInfiniteScroll(
    () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    hasNextPage,
    isFetchingNextPage
  );

  const handleMovieClick = async (movie: MovieItemType) => {
    await openMovieDetailModal(movie.id);
  };

  return (
    <main>
      <section className="container">
        <h2 className="text-2xl font-bold mb-64">지금 인기 있는 영화</h2>
        <ul className="thumbnail-list">
          {movies.length > 0 &&
            movies.map((movie, index) => (
              <MovieItem
                key={movie.id}
                movie={movie}
                onClick={handleMovieClick}
                ref={index === movies.length - 1 ? lastElementRef : null}
              />
            ))}
          {(isLoading || isFetchingNextPage) && <Loading />}
        </ul>
      </section>
    </main>
  );
};
