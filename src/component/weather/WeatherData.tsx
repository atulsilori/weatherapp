import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, Chip, Skeleton, Stack, Typography } from '@mui/material';
import { useValues } from 'kea';

import weatherlogic from 'logics/weatherlogic';
import _ from 'utils/operations';

declare interface IWeatherData {
  isLoading: boolean;
}

const WeatherData: React.FC<IWeatherData> = ({ isLoading }) => {
  const { weather } = useValues(weatherlogic);
  const cityName = _.get(weather, ['data', 'name'], '');
  const countryName = _.get(weather, ['data', 'sys', 'country'], '');
  const temperature = _.get(weather, ['data', 'main', 'temp_max'], '');
  const icon = _.get(weather, ['data', 'weather', 0, 'icon'], '');
  const description = _.get(weather, ['data', 'weather', 0, 'description'], '');
  return (
    <>
      {Object.keys(weather.data).length !== 0 && !isLoading && (
        <Card sx={{ maxWidth: 345 }} variant='outlined' className='infoCard'>
          <CardContent>
            <Stack spacing={1}>
              <Chip label={cityName} avatar={<Avatar>{countryName}</Avatar>} color='primary' />
              <Typography variant='h4' gutterBottom className='temperature'>
                {Math.floor(temperature)}
                <sup>°</sup>
              </Typography>
              <div className='icon'>
                <img src={`https://openweathermap.org/img/wn/${icon}.png`}></img>
              </div>
              <Typography variant='h6' gutterBottom className='temperature'>
                {description}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      )}

      {isLoading && (
        <Stack spacing={1}>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
          <Skeleton variant='circular' width={40} height={40} />
          <Skeleton variant='rectangular' width={210} height={60} />
          <Skeleton variant='rounded' width={210} height={60} />
        </Stack>
      )}
    </>
  );
};

export default WeatherData;
