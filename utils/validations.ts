import * as yup from "yup";

export const schemaLogin = yup.object({
  email: yup.string().email('Некорректный адрес').required('Поле обязательно для заполнения'),
  password: yup.string().min(6, 'Минимум 6 символов').required('Поле обязательно для заполнения'),
}).required();

export const schemaReg = yup.object({
  fullName: yup.string().matches(/^([А-Я]{1}[а-яё]{1,23}\s*|[A-Z]{1}[a-z]{1,23}\s*)+$/, 'Некорректный ввод').required('Поле обязательно для заполнения'),
}).concat(schemaLogin).required();