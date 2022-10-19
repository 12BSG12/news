import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormField } from '../../FormField';
import { schemaReg } from '../../../utils/validations';

interface RegisterFormProps {
  onOpenLogin: () => void;
  onOpenRegister: () => void;
}

type RegisterFormType = {
  email: string;
  password: string;
};

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin, onOpenRegister }) => {
  const form = useForm<RegisterFormType>({ mode: 'onChange', resolver: yupResolver(schemaReg) });
  const onSubmit = (data: RegisterFormType) => console.log(data);
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="fullName" label="Имя и фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <div className="formBtn">
          <Button
            onClick={onOpenRegister}
            type="submit"
            color="primary"
            variant="contained"
            disabled={!form.formState.isValid}>
            Зарегистрироваться
          </Button>
          <Button onClick={onOpenLogin} color="primary" variant="text">
            Войти
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
