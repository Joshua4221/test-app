import { useEffect, useState } from 'react';
import { movieService } from '../api_services';

export const useMovies = () => {
  const [movies, setMovies] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData: any = await movieService.getAllMovies();
        setMovies(moviesData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};
