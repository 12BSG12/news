import { Button, Divider, Paper, TextField, Typography } from '@mui/material';
import { MainLayout } from '../../layouts/MainLayout';

export default function Settings() {
  return (
    <MainLayout hideComments>
      <Paper sx={{ p: '20px' }} elevation={0}>
        <Typography variant="h6">Основные настройки</Typography>
        <Divider sx={{ margin: '20px 0 30px 0' }} />
        <form>
          <TextField
            sx={{ marginBottom: '20px' }}
            size="small"
            label="Никнейм"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            sx={{ marginBottom: '20px' }}
            size="small"
            label="Эл. почта"
            variant="outlined"
            fullWidth
            required
          />
          <TextField size="small" label="Пароль" variant="outlined" fullWidth required />
          <Divider sx={{ margin: '30px 0 20px 0' }} />
          <Button color="primary" variant="contained">
            Сохранить изменения
          </Button>
        </form>
      </Paper>
    </MainLayout>
  );
}
