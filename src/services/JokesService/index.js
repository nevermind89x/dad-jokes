import { JOKE_API } from '../../constants/jokes';
import { getAPIUrl } from '../../helpers';
const JokesService = {
  fetchJoke: async (params) => {
    const url = getAPIUrl(JOKE_API, params);
    const request = await fetch(url, { headers: {
      'Accept': 'application/json',
    }});

    const response = await request.json();
    return response;
  }
};

export default JokesService;
