import React from 'react';
import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface FormFieldProps {
  name: string;
  label: string;
}

export const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      {...register(name)}
      required={true}
      name={name}
      sx={{ mb: '20px' }}
      size="small"
      label={label}
      variant="outlined"
      fullWidth
      error={!!errors[name]?.message}
      helperText={errors[name]?.message?.toString()}
    />
  );
};
