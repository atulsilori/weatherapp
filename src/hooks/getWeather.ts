import { useMutation } from 'react-query';
import axios from 'axios';

import { key, url } from 'constants/api';

const useGetWeather = () => {
  return useMutation(async (query: string) => {
    const response = await axios.get(url, {
      params: {
        q: query,
        appid: key,
        units: 'metric',
      },
    });
    return response.data;
  });
};

export default useGetWeather;
