import { actions, defaults, kea, path, reducers } from 'kea';
import { eventLogicType } from 'typings/logic';

const eventlogic = kea<eventLogicType>([
  path(['event.logic']),
  defaults({
    error: false,
    errorMessage: '',
  }),
  actions({
    setError: (isError) => isError,
    setErrorMessage: (message) => message,
  }),
  reducers({
    error: {
      setError: (_, error) => error,
    },
    errorMessage: {
      setErrorMessage: (_, message) => message,
    },
  }),
]);

export default eventlogic;
