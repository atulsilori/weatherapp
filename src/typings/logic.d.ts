import { MakeLogicType } from 'kea';

/**
 * weather logic
 **/
declare type IWeatherdata = { data: any };

declare interface IWeatherValues {
  weather: IWeatherdata;
}

declare interface IWeatherActions {
  setWeather: (weather: IWeatherdata) => { data: IWeatherdata };
  setReset: () => Boolean;
}

declare type weatherLogicType = MakeLogicType<IWeatherValues, IWeatherActions>;

/**
 * event logic
 **/
declare interface IEventValues {
  error: boolean;
  errorMessage: string;
}

declare interface IEventActions {
  setError: (error: boolean) => boolean;
  setErrorMessage: (message: string) => string;
}

declare type eventLogicType = MakeLogicType<IEventValues, IEventActions>;
