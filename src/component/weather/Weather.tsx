import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useActions } from 'kea';

import WeatherData from './WeatherData';
import useGetWeather from 'hooks/getWeather';
import weatherlogic from 'logics/weatherlogic';
import eventlogic from 'logics/eventlogic';
import { Stack } from '@mui/material';

const Weather: React.FC = () => {
  const [query, setQuery] = useState('');

  const { setWeather, setReset } = useActions(weatherlogic);
  const { setError, setErrorMessage } = useActions(eventlogic);

  const { mutate, isLoading } = useGetWeather();

  return (
    <div className='maincontainer'>
      <Stack spacing={1}>
        <TextField
          id='outlined-controlled'
          label='search city'
          value={query}
          onKeyDown={(ev: React.KeyboardEvent<HTMLInputElement>) => {
            if (ev.key === 'Enter') {
              if (query !== '') {
                mutate(query, {
                  onSuccess: (data) => {
                    setWeather(data);
                  },
                  onError: (data) => {
                    setReset();
                    setError(true);
                    setErrorMessage('city not found');
                  },
                });
              }
            }
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(event.target.value);
          }}
          variant='outlined'
        />
        <WeatherData isLoading={isLoading} />
      </Stack>
    </div>
  );
};

export default Weather;
