import { db } from './config_db';

export const movieService = {
  // Get all movies
  getAllMovies: async () => {
    try {
      const moviesSnapshot = await db.collection('movies').get();
      return moviesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  },
};
