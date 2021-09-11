import { useState, useEffect } from 'react';
import JokesService from '../services/JokesService';
import { JOKES_LIMIT } from '../constants/jokes';

/**
 * Fetches jokes from api
 * @param {Object} page  current page
 * @param {number} limit number of jokes to fetch
 * @returns {Object}
 */
function useJokes(page = 0, limit = JOKES_LIMIT) {
  const [loading, setLoading] = useState(false);
  const [jokes, setJokes] = useState({ results: [] });

  useEffect(() => {
    /**
     * Async fetch Jokes from API
     */
    const getJokes = async () => {
      try {
        const jokesResponse = await JokesService.fetchJoke({ page, limit });
        setJokes(jokesResponse);
      } catch (e) {
        setJokes({ results: [] });
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    getJokes();
  }, [page, limit]);

  return { loading, jokes };
}

export default useJokes;
