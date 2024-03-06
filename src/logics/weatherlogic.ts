import { actions, defaults, kea, path, reducers } from 'kea';
import { weatherLogicType } from 'typings/logic';

const weatherlogic = kea<weatherLogicType>([
  path(['weather.logic']),
  defaults({
    weather: { data: {} },
  }),
  actions({
    setWeather: (weather) => ({ data: weather }),
    setReset: () => true,
  }),
  reducers({
    weather: {
      setWeather: (_, weather) => weather,
      setReset: () => ({ data: {} }),
    },
  }),
]);

export default weatherlogic;
