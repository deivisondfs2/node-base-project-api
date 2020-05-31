/* eslint-disable implicit-arrow-linebreak */
import * as Yup from 'yup';

export default {
  userDefaultValidation: () =>
    Yup.object().shape({
      first_name: Yup.string().required('Field is requered aaa'),
      last_name: Yup.string().required(),
      email: Yup.string().email().required()
    })
};
