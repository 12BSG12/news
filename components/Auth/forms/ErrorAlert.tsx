import { Alert, Collapse } from '@mui/material';
import React from 'react';

interface ErrorAlertProps {
  message: string;
  isError: boolean;
  setIsError: (arg: boolean) => void;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({message, isError, setIsError}) => {
  return (
    <Collapse in={isError}>
      <Alert
        onClick={() => {
          setIsError(false);
        }}
        sx={{mb: 2, cursor: 'pointer' }}
        severity="error">
        {message}
      </Alert>
    </Collapse>
  );
};
