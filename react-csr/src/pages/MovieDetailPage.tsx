import { useMovieDetailModal } from '../hooks/useMovieDetailModal';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieHomePage from './MovieHomePage';

export default function MovieDetailPage() {
  return (
    <>
      <MovieHomePage />
      <DetailPageOpenModal />
    </>
  );
}

function DetailPageOpenModal() {
  const { movieId } = useParams();
  const { openMovieDetailModal } = useMovieDetailModal();

  useEffect(() => {
    if (movieId != null) {
      openMovieDetailModal(Number(movieId));
    }
  }, [movieId, openMovieDetailModal]);

  return null;
}
