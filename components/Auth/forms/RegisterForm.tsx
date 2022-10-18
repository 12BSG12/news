import React from 'react'

interface RegisterFormProps {
  onOpenLogin: () => void;
  onOpenRegister: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({onOpenLogin, onOpenRegister}) => {
  return (
    <div>RegisterForm</div>
  )
}
