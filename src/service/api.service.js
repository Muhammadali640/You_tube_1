import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      // part: 'snippet,statistics',
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': 'fe7a14643dmsh8b2dca045e65f03p1a5f1ejsn5249bcb1e72a',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const ApiService ={
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}` , options);
        return response.data
    }
}
