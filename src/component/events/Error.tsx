import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useActions, useValues } from 'kea';

import eventlogic from 'logics/eventlogic';

const Error = () => {
  const { error, errorMessage } = useValues(eventlogic);
  const { setError, setErrorMessage } = useActions(eventlogic);

  const handleClose = () => {
    setError(false);
    setErrorMessage('');
  };

  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      open={error}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default Error;
