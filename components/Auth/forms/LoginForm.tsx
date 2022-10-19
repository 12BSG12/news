import { Button } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormField } from '../../FormField';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../../../utils/validations';

interface LoginFormProps {
  onOpenRegister: () => void;
}

type LoginFormType = {
  email: string;
  password: string;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm<LoginFormType>({ mode: 'onSubmit', resolver: yupResolver(schemaLogin) });
  const onSubmit = (data: LoginFormType) => console.log(data);
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <div className="formBtn">
          <Button type="submit" color="primary" variant="contained">
            Войти
          </Button>
          <Button onClick={onOpenRegister} color="primary" variant="text">
            Регистрация
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
