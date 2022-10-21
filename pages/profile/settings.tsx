import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Divider, Paper, TextField, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { FormField } from '../../components/FormField';
import { MainLayout } from '../../layouts/MainLayout';
import { schemaSettings } from '../../utils/validations';

type SettingsFormType = {
  fullName: string;
  email: string;
  password: string;
};

export default function Settings() {
  const form = useForm<SettingsFormType>({ mode: 'onSubmit', resolver: yupResolver(schemaSettings) });
  const onSubmit = (data: SettingsFormType) => console.log(data);
  return (
    <MainLayout hideComments>
      <Paper sx={{ p: '20px' }} elevation={0}>
        <Typography variant="h6">Основные настройки</Typography>
        <Divider sx={{ margin: '20px 0 30px 0' }} />
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField name='fullName' label="Никнейм"/>
            <FormField name='email' label="Эл. почта"/>
            <FormField name='password' label="Пароль"/>
            <Divider sx={{ margin: '30px 0 20px 0' }} />
            <Button color="primary" variant="contained" disabled={!form.formState.isValid}>
              Сохранить изменения
            </Button>
          </form>
        </FormProvider>
      </Paper>
    </MainLayout>
  );
}
