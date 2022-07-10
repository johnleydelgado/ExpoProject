import * as Yup from 'yup';

import { INVALID_EMAIL_FORMAT, REQUIRED_FIELD } from '../../constant/validationMessage';

export const loginInitialValue = {
  email: '',
  password: '',
};

export const loginSchema = Yup.object().shape({
  email: Yup.string().required(REQUIRED_FIELD('email')).email(INVALID_EMAIL_FORMAT),
  password: Yup.string().required(REQUIRED_FIELD('password')),
});
