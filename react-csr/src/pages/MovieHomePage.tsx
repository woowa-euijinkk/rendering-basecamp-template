import { Header } from '../components/Header';
import { MovieList } from '../components/MovieList';
import { Footer } from '../components/Footer';

export default function MovieHomePage() {
  return (
    <div id="wrap">
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}
