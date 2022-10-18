import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from '@mui/material';
import React from 'react';
import styles from './Auth.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LoginForm } from './forms/LoginForm';
import { MainForm } from './forms/MainForm';
import { RegisterForm } from './forms/RegisterForm';
import CloseIcon from '@mui/icons-material/Close';

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

export const Auth: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>('main');

  return (
    <Dialog open={visible} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === 'main' ? (
                'Вход в BSG News'
              ) : (
                <p onClick={() => setFormType('main')} className={styles.backTitle}>
                  <ArrowBackIcon /> К авторизации
                </p>
              )}
            </Typography>
            {formType === 'main' && <MainForm onOpenLogin={() => setFormType('login')} />}
            {formType === 'login' && <LoginForm onOpenRegister={() => setFormType('register')} />}
            {formType === 'register' && (
              <RegisterForm
                onOpenRegister={() => setFormType('register')}
                onOpenLogin={() => setFormType('login')}
              />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
