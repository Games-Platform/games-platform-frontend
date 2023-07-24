import * as yup from 'yup';

const emailRegEx = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required('This field is required')
      .email('Please enter a valid email address')
      .matches(emailRegEx, 'Please enter a valid email address'),
    password: yup
      .string()
      .required('This field is required')
      .min(8, 'Your password needs to be between 8 and 30 characters long')
      .max(30, 'Your password needs to be between 8 and 30 characters long'),
  })
  .required();

export const registerSchema = yup.object({
  email: yup
    .string()
    .required('This field is required')
    .email('Please enter a valid email address')
    .matches(emailRegEx, 'Please enter a valid email address'),
  username: yup
    .string()
    .required('This field is required')
    .min(2, 'Your username needs to be more than 8 characters')
    .max(40, 'Your username needs to be less than 40 characters'),
  password: yup
    .string()
    .required('This field is required')
    .min(8, 'Your password needs to be between 8 and 30 characters long')
    .max(30, 'Your password needs to be between 8 and 30 characters long'),
});
