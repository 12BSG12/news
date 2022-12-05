import { Button } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormField } from '../../FormField';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../../../utils/validations';
import { UserApi } from '../../../utils/api';
import { ILogin } from '../../../utils/api/types';
import { setCookie } from 'nookies';
import { ErrorAlert } from './ErrorAlert';
import { useAppDispatch } from '../../../redux/hooks';
import { setUserData } from '../../../redux/slices/user';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const dispatch = useAppDispatch()

  const [errorMessage, setErrorMessage] = React.useState('');
  const [isError, setIsError] = React.useState(false);

  const form = useForm<ILogin>({ mode: 'onChange', resolver: yupResolver(schemaLogin) });
  const onSubmit = async (data: ILogin) => {
    try {
      const response = await UserApi.login(data);
      setCookie(null, 'authToken', response.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      dispatch(setUserData(response))
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
      setIsError(true)
    }
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <ErrorAlert message={errorMessage} isError={isError} setIsError={setIsError}/>
        <div className="formBtn">
          <Button
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            type="submit"
            color="primary"
            variant="contained">
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
