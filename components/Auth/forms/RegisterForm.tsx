import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormField } from '../../FormField';
import { schemaReg } from '../../../utils/validations';
import { UserApi } from '../../../utils/api';
import { IReg } from '../../../utils/api/types';
import { setCookie } from 'nookies';
import { ErrorAlert } from './ErrorAlert';
import { useAppDispatch } from '../../../redux/hooks';
import { setUserData } from '../../../redux/slices/user';

interface RegisterFormProps {
  onOpenLogin: () => void;
  onOpenRegister: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin, onOpenRegister }) => {
  const dispatch = useAppDispatch()

  const [errorMessage, setErrorMessage] = React.useState('');
  const [isError, setIsError] = React.useState(false);

  const form = useForm<IReg>({ mode: 'onChange', resolver: yupResolver(schemaReg) });
  const onSubmit = async (data: IReg) => {
    try {
      const response = await UserApi.register(data);
      console.log(response);
      setCookie(null, 'authToken', response.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      dispatch(setUserData(response))
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
      setIsError(true)
    }
  }; 
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="fullName" label="Имя и фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <ErrorAlert message={errorMessage} isError={isError} setIsError={setIsError}/>
        <div className="formBtn">
          <Button
            onClick={onOpenRegister}
            type="submit"
            color="primary"
            variant="contained"
            disabled={!form.formState.isValid || form.formState.isSubmitting}>
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
